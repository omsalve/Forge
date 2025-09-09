import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import MainLayout from "../components/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forge",
  description: "Built for those who don’t skip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/*
            This MainLayout component is a Client Component that intelligently
            wraps your pages. It will show the SideBar and SettingsButton on
            app pages (like /dashboard) but not on your main landing page (/).
          */}
          <MainLayout>
            {children}
          </MainLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
