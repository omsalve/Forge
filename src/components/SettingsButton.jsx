import { Settings } from "lucide-react";

export default function SettingsButton({onClick}) {
  return (
    <button
      onClick={onClick}
      className="fixed left-[40px] top-[calc(35%_+_240px)] flex items-center justify-center bg-[#2E2E2E] text-white rounded-lg w-[50px] max-h-[50px] p-2"
      style={{ backgroundColor: "#2E2E2E", transform: "translateY(-50%)" }}
      aria-label="Settings"
    >
      <span className="hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition">
        <Settings size={24} />
      </span>
    </button>
  );
}
