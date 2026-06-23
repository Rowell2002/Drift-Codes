import { useEffect, useState } from "react";

const KEY = "drift-reduced-motion";

function readPref(): boolean {
  if (typeof window === "undefined") return false;
  const stored = window.localStorage.getItem(KEY);
  if (stored !== null) return stored === "1";
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

/**
 * Reactive reduced-motion preference shared across pages.
 * Source of truth: localStorage["drift-reduced-motion"] ("1" | "0"),
 * falling back to the OS `prefers-reduced-motion` media query.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() => readPref());

  useEffect(() => {
    const sync = () => setReduced(readPref());

    // Cross-tab + same-tab updates
    window.addEventListener("storage", sync);
    window.addEventListener("drift-motion-change", sync);
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    mq?.addEventListener?.("change", sync);

    // Poll once to catch in-tab toggles that don't fire `storage`
    sync();
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("drift-motion-change", sync);
      mq?.removeEventListener?.("change", sync);
    };
  }, []);

  return reduced;
}