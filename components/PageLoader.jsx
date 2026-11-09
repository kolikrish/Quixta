"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";

const KEY = "quixta-loader-played";
export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(() => pathname === "/");
  const lenis = useLenis();
  useEffect(() => {
    if (!visible || document.documentElement.classList.contains("loader-played")) {
      setVisible(false);
      return;
    }
    try { if (localStorage.getItem(KEY) === "1") { setVisible(false); return; } localStorage.setItem(KEY, "1"); } catch {}
    const timer = setTimeout(() => setVisible(false), 650);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (!visible) {
      root.classList.remove("is-loading");
      lenis?.start();
      return;
    }
    root.classList.add("is-loading");
    lenis?.stop();
    return () => root.classList.remove("is-loading");
  }, [visible, lenis]);
  if (!visible) return null;
  return <div className="page-loader" aria-hidden="true"><span className="page-loader-wordmark">QUIXTA</span></div>;
}

