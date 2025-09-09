import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  // An array of routes that should be accessible to both signed-in and signed-out users.
  // Your landing page is the primary public route.
  publicRoutes: ["/"],

  // An array of routes that should be ignored by the middleware.
  // This is useful for things like webhooks or static assets if needed.
  ignoredRoutes: ["/api/webhook"],
});

export const config = {
  // The following matcher has been simplified to let Clerk handle all routes
  // except for static assets and internal Next.js paths.
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

