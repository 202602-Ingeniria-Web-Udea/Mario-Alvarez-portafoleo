// Scroll reveal: fades a section in the first time it enters the viewport.
//
// Why a hook instead of a `<Reveal>` wrapper component: the reveal targets are
// the page sections, which already render their own root element. A wrapper
// would add a DOM level inside the `<main>` flow that exists only to carry a
// class, and it would have to forward refs plus keep working for `<section>`
// vs `<footer>`. Attaching the hook to the element that is already there keeps
// the DOM identical and the call site to one `ref`.
//
// Why `data-reveal` + imperative DOM instead of React state: the "hidden until
// revealed" state must never reach the server-rendered HTML. With JSX the
// class would have to ship inside the markup, so any failure to hydrate (or
// JS being unavailable) would strand the content at opacity 0. Writing the
// attribute from JS inverts that: no attribute means no CSS rule matches and
// the section keeps its normal, fully visible styles. The matching rules live
// in app/globals.css.
//
// Limitation to respect when using it: never attach this to an element that a
// media query toggles with `display: none`. Such an element never intersects
// the viewport, so the observer never fires and the element would stay at
// opacity 0 the moment a resize reveals it.
"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

// useLayoutEffect warns when it runs during server prerendering, so fall back
// to useEffect where there is no DOM. Both are no-ops on the server, and the
// client bundle picks the layout variant, which lets the pending state be set
// before the browser paints — that is what keeps an already-visible section
// from flashing visible for one frame before it fades in.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Pre-reveal state. globals.css only hides it under
    // `prefers-reduced-motion: no-preference`.
    element.dataset.reveal = "pending";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.dataset.reveal = "in";
        // Play it once: disconnect so scrolling back up never replays it.
        observer.disconnect();
      },
      // 15% visible reads as "this section is arriving" without making a tall
      // section wait to be fully on screen. The default root (viewport) is
      // what we want, so it is left implicit.
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}
