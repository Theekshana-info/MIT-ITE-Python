import { RefObject, useEffect } from "react";

/**
 * Enables proper touch scrolling for Monaco Editor on mobile devices.
 * When content fits in the editor (no scroll needed), page scrolls.
 * When content overflows, editor scrolls first, then page at boundaries.
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

    // Find Monaco's internal scrollable element and apply touch-action CSS
    const applyTouchAction = () => {
      const monacoScrollable = wrapper.querySelector<HTMLElement>(".monaco-scrollable-element");
      const overflowGuard = wrapper.querySelector<HTMLElement>(".overflow-guard");
      const viewLines = wrapper.querySelector<HTMLElement>(".view-lines");
      
      // Apply touch-action to allow vertical panning
      [monacoScrollable, overflowGuard, viewLines].forEach(el => {
        if (el) {
          el.style.touchAction = "pan-y";
        }
      });
    };

    // Apply immediately
    applyTouchAction();

    // Also apply after Monaco finishes rendering (it recreates DOM elements)
    const timeoutId = setTimeout(applyTouchAction, 500);
    const timeoutId2 = setTimeout(applyTouchAction, 1000);

    // Watch for DOM changes and reapply
    const observer = new MutationObserver(() => {
      applyTouchAction();
    });

    observer.observe(wrapper, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      observer.disconnect();
    };
  }, [wrapperRef, enabled]);
}
