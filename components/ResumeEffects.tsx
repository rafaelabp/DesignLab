"use client";

import { useEffect } from "react";

export function ResumeEffects() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const updateParallax = () => {
      frame = 0;
      root.style.setProperty("--resume-scroll", String(window.scrollY));
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateParallax);
      }
    };

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const Observer = window.IntersectionObserver;

    if (Observer) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      revealItems.forEach((item) => observer.observe(item));
      window.addEventListener("scroll", onScroll, { passive: true });
      updateParallax();

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
        if (frame) {
          window.cancelAnimationFrame(frame);
        }
      };
    }

    revealItems.forEach((item) => item.classList.add("in"));
    globalThis.addEventListener("scroll", onScroll, { passive: true });
    updateParallax();

    return () => {
      globalThis.removeEventListener("scroll", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return null;
}
