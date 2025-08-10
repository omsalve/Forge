"use client";

export default function BentoCard({ title, area }) {
  return (
    <div
      style={{ gridArea: area }}
      className="bg-[#3A3A3A] rounded-lg flex items-center justify-center text-white p-4"
    >
      {title}
    </div>
  );
}
