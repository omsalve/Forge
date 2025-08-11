"use client";

import { useCallback } from "react";
import { Home, Bot, UtensilsCrossed, User } from "lucide-react";
import { animate } from "framer-motion";

export default function SideBar() {
  // Smooth scroll function using framer-motion animate
  const smoothScrollTo = useCallback((targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;

    animate(startPosition, targetPosition, {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // easeOutCubic-ish
      onUpdate(value) {
        window.scrollTo(0, value);
      },
    });
  }, []);

  return (
    <div className="fixed left-[40px] top-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-[#2E2E2E] text-white rounded-lg max-w-[50px] max-h-[420px] p-2">
      <button
        onClick={() => smoothScrollTo("dashboard")}
        className="p-2 rounded-lg hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition"
      >
        <Home size={24} />
      </button>
      <button
        onClick={() => smoothScrollTo("chatbot")}
        className="p-2 rounded-lg hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition"
      >
        <Bot size={24} />
      </button>
      <button
        onClick={() => smoothScrollTo("meals")}
        className="p-2 rounded-lg hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition"
      >
        <UtensilsCrossed size={24} />
      </button>
      <button
        onClick={() => smoothScrollTo("profile")}
        className="p-2 rounded-lg hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition"
      >
        <User size={24} />
      </button>
    </div>
  );
}
