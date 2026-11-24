"use client";

import { Moon, Sun } from "lucide-react";

// Circular reveal from the button, like Magic UI's Animated Theme Toggler, on the View Transitions API.
export function ThemeToggle({ className }: { className?: string }) {
  async function toggle({ currentTarget }: React.MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const flip = () => {
      const theme = root.classList.toggle("dark") ? "dark" : "light";
      try { localStorage.setItem("theme", theme); } catch {} // storage can be blocked
    };
    if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) return flip();
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const [x, y] = [left + width / 2, top + height / 2];
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    await document.startViewTransition(flip).ready.catch(() => {}); // a fast second click skips the first
    root.animate(
      { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 400, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" },
    );
  }
  return (
    <button type="button" onClick={toggle} aria-label="Switch between light and dark mode" className={className}>
      <Sun aria-hidden className="size-4 dark:hidden" />
      <Moon aria-hidden className="hidden size-4 dark:block" />
    </button>
  );
}
