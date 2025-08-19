"use client";

export default function BentoCard({ title, area }) {
  return (
    <div
      style={{ gridArea: area }}
      className="
        bg-[#3A3A3A] rounded-lg flex items-center justify-center text-white p-4
        shadow-md shadow-black/30
        hover:shadow-lg hover:shadow-black/70
        transition-shadow duration-300 ease-in-out
      "
    >
      {title}
    </div>
  );
}
