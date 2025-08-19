"use client";

export default function GridWrapper({ children, className, style }) {
  return (
    <div
      style={style}
      className={`w-[80vw] h-[85vh] grid gap-4 p-[50px] bg-[#2E2E2E] rounded-lg ${className || ""}`}
    >
      {children}
    </div>
  );
}
