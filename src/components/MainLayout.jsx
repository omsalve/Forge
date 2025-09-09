"use client";

import { useRouter } from 'next/navigation';
import SideBar from "./SideBar"
import SettingsButton from "./SettingsButton";
import { usePathname } from 'next/navigation';

export default function MainLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleSettingsClick = () => {
    router.push('/settings');
  };

  // This is the core logic. If the user is on the landing page (`/`),
  // we render *only* the children (the landing page itself).
  if (pathname === '/') {
    return <>{children}</>;
  }

  // If the user is on any other page (e.g., `/dashboard`, `/settings`),
  // we render the full application layout with the sidebar and settings button.
  return (
    <main className="flex h-screen">
      <SideBar />
      <section className="flex-1 bg-[#0B0B0B] overflow-y-auto">
        {children}
      </section>
      <SettingsButton onClick={handleSettingsClick} />
    </main>
  );
}

