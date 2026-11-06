"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "../data";
import { CloseIcon, MenuIcon } from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [observed, setObserved] = useState("home");
  const [open, setOpen] = useState(false);
  // Di halaman detail project, tandai menu "Project" sebagai aktif.
  const active = isHome ? observed : "projects";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const home = document.getElementById("home");
      const offset = home ? -home.getBoundingClientRect().top : window.scrollY;
      setScrolled(offset > 8);
    };
    onScroll();
    // Capture: tetap tertangkap meski yang di-scroll bukan window.
    document.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true,
    });
    return () => document.removeEventListener("scroll", onScroll, true);
  }, []);

  // Saat tombol diklik, scroll halus melewati section lain. Selama itu
  // berlangsung, abaikan perhitungan scroll agar tombol tidak berpindah-pindah.
  const locked = useRef(false);
  const unlockTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const unlockLater = (ms: number, sync: () => void) => {
    clearTimeout(unlockTimer.current);
    unlockTimer.current = setTimeout(() => {
      locked.current = false;
      sync();
    }, ms);
  };

  useEffect(() => {
    if (!isHome) return;

    const update = () => {
      const lastEl = document.getElementById(navLinks[navLinks.length - 1].id);
      const atBottom = lastEl
        ? lastEl.getBoundingClientRect().bottom <= window.innerHeight + 2
        : false;
      let current = navLinks[0].id;
      if (atBottom) {
        current = navLinks[navLinks.length - 1].id;
      } else {
        const line = window.innerHeight * 0.35;
        for (const { id } of navLinks) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= line) current = id;
        }
      }
      setObserved(current);
    };

    const onScroll = () => {
      if (locked.current) {
        unlockLater(150, update);
        return;
      }
      update();
    };

    const frame = requestAnimationFrame(() => {
      if (!locked.current) update();
    });
    document.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true,
    });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  const handleNavClick = (id: string) => {
    setOpen(false);
    setObserved(id);
    locked.current = true;
    // Cadangan jika tidak ada scroll sama sekali (sudah di posisi tujuan).
    unlockLater(700, () => {});
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/#home"
          onClick={() => handleNavClick("home")}
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="text-accent">&lt;</span>
          {profile.name.split(" ")[0]}
          <span className="text-accent"> /&gt;</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                onClick={() => handleNavClick(id)}
                aria-current={active === id ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active === id
                    ? "bg-accent/10 text-accent"
                    : "text-slate-400 hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-slate-300 hover:bg-surface-2 md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-line px-6 pb-4 pt-2 md:hidden">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                onClick={() => handleNavClick(id)}
                className={`block rounded-md px-3 py-3 text-sm ${
                  active === id ? "text-accent" : "text-slate-300"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
