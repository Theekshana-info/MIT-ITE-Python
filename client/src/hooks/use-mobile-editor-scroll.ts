import { RefObject, useEffect } from "react";

/**
 * Bridges touch scrolling between Monaco editor and the surrounding page on mobile devices.
 * Ensures the page scrolls when the editor content is shorter than its viewport, and
 * when the editor reaches its scroll boundaries.
 */
export function useMobileEditorScroll(wrapperRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || typeof window === "undefined") {
      return;
    }

    let lastY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        return;
      }
      lastY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        return;
      }

      const currentY = event.touches[0].clientY;
      const deltaY = currentY - lastY;
      lastY = currentY;

      const scrollHeight = wrapper.scrollHeight;
      const clientHeight = wrapper.clientHeight;
      const scrollTop = wrapper.scrollTop;
      const isScrollable = scrollHeight > clientHeight + 1;

      if (!isScrollable) {
        // Editor content is shorter than viewport, forward scroll to page.
        event.preventDefault();
        window.scrollBy({ top: -deltaY, left: 0, behavior: "auto" });
        return;
      }

      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if ((atTop && deltaY > 0) || (atBottom && deltaY < 0)) {
        // Editor reached boundary; forward scroll to page.
        event.preventDefault();
        window.scrollBy({ top: -deltaY, left: 0, behavior: "auto" });
      }
    };

    wrapper.addEventListener("touchstart", handleTouchStart, { passive: true });
    wrapper.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      wrapper.removeEventListener("touchstart", handleTouchStart);
      wrapper.removeEventListener("touchmove", handleTouchMove);
    };
  });
}
