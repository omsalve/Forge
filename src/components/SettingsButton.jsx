"use client";

import { Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SettingsButton({onClick}) {
  const router = useRouter();
  const handleClick = onClick || (() => router.push("/settings"));
  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed left-[40px] top-[calc(35%_+_240px)] z-50 pointer-events-auto flex items-center justify-center bg-[#2E2E2E] text-white rounded-lg w-[50px] max-h-[50px] p-2 ring-1 ring-red-600/30 hover:ring-red-500/40 transition"
      style={{ backgroundColor: "#2E2E2E", transform: "translateY(-50%)" }}
      aria-label="Settings"
    >
      <span className="hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition">
        <Settings size={24} />
      </span>
    </button>
  );
}
