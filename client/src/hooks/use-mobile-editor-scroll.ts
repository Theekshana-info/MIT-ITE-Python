import { RefObject, useEffect } from "react";

/**
 * Bridges touch scrolling between Monaco editor and the surrounding page on mobile devices.
 * Ensures the page scrolls when the editor content is shorter than its viewport, and
 * when the editor reaches its scroll boundaries.
 */
export function useMobileEditorScroll(wrapperRef: RefObject<HTMLElement>, enabled = true) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") {
      return;
    }

    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return;
    }

    let scrollElement: HTMLElement | null = null;
    let originalTouchAction: string | null = null;
    let rafId: number | null = null;
    let lastY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        return;
      }
      lastY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1 || !scrollElement) {
        return;
      }

      const currentY = event.touches[0].clientY;
      const deltaY = lastY - currentY;
      lastY = currentY;

      const { scrollHeight, clientHeight, scrollTop } = scrollElement;
      const isScrollable = scrollHeight > clientHeight + 1;

      if (!isScrollable) {
        return; // Let the page handle scrolling.
      }

      const atUpperBound = scrollTop <= 0 && deltaY < 0;
      const atLowerBound = scrollTop + clientHeight >= scrollHeight - 1 && deltaY > 0;

      if (atUpperBound || atLowerBound) {
        return; // Allow the page to scroll when the editor hits its boundary.
      }

      event.preventDefault();
      scrollElement.scrollTop += deltaY;
    };

    const detachListeners = () => {
      if (scrollElement) {
        scrollElement.removeEventListener("touchstart", handleTouchStart);
        scrollElement.removeEventListener("touchmove", handleTouchMove);
        if (originalTouchAction !== null) {
          scrollElement.style.touchAction = originalTouchAction;
        }
      }
      scrollElement = null;
      originalTouchAction = null;
    };

    const attachListeners = () => {
      detachListeners();
      scrollElement = wrapper.querySelector<HTMLElement>(".monaco-scrollable-element");

      if (!scrollElement) {
        rafId = window.requestAnimationFrame(attachListeners);
        return;
      }

      originalTouchAction = scrollElement.style.touchAction;
      scrollElement.style.touchAction = "none";

      scrollElement.addEventListener("touchstart", handleTouchStart, { passive: true });
      scrollElement.addEventListener("touchmove", handleTouchMove, { passive: false });
    };

    attachListeners();

    const observer = new MutationObserver(() => {
      if (!scrollElement || !wrapper.contains(scrollElement)) {
        attachListeners();
      }
    });

    observer.observe(wrapper, { childList: true, subtree: true });

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      observer.disconnect();
      detachListeners();
    };
  }, [wrapperRef, enabled]);
}
