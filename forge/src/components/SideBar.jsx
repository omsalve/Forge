"use client";

import { Home, Bot, UtensilsCrossed, User } from "lucide-react";

export default function SideBar() {
    return (
        <div className="fixed left-[40px] top-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-[#2E2E2E] text-white rounded-lg max-w-[50px] max-h-[420px] p-2">
            <button className="p-2 rounded-lg hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition">
                <Home size={24} />
            </button>
            <button className="p-2 rounded-lg hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition">
                <Bot size={24} />
            </button>
            <button className="p-2 rounded-lg hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition">
                <UtensilsCrossed size={24} />
            </button>
            <button className="p-2 rounded-lg hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition">
                <User size={24}></User>
            </button>
        </div>
    );
}
