import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import LandingPageClient from '../components/LandingPageClient';

// This new line is a route segment config option. It tells Next.js to
// treat this page as fully dynamic, ensuring the auth check runs on every request.
export const dynamic = 'force-dynamic';

export default function Page() {
  // 1. Get the user ID from Clerk's server-side auth helper.
  // This code will now run every time the page is accessed.
  const { userId } = auth();

  // 2. If a user ID exists, it means the user is logged in.
  // We immediately redirect them to the dashboard.
  if (userId) {
    redirect('/dashboard');
  }

  // 3. If there is no user ID, the user is logged out.
  // We render the interactive landing page from your client component.
  return <LandingPageClient />;
}

