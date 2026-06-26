import { useEffect, useRef } from "react";

export function useScrollReveal(
  visibleClass = "animate-fade-up",
  options = { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add(visibleClass);
        observer.unobserve(el);
      }
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
  }, [visibleClass]);

  return ref;
}
