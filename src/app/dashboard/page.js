import Link from 'next/link';
import BentoCard from '../../components/BentoCard';
import GridWrapper from '../../components/GridWrapper';
import { auth } from '@clerk/nextjs/server';
import { UserButton } from "@clerk/nextjs";
import prisma from '../libs/prisma';

/**
 * This is a Next.js Server Component.
 * It's an `async` function, which allows us to fetch data directly
 * from the database based on the authenticated user. This code runs on the server.
 */
export default async function DashboardPage() {
  // 1. Get the authenticated user's ID from Clerk
  const { userId } = auth();

  let workoutPlan = null;
  // 2. If a user is logged in, fetch their most recent workout plan
  if (userId) {
    workoutPlan = await prisma.workoutPlan.findFirst({
      where: {
        userId: userId, // Use the actual user's ID
      },
      orderBy: { createdAt: 'desc' },
      include: {
        sessions: {
          orderBy: { sessionOrder: 'asc' },
          include: {
            exercises: {
              include: {
                exercise: true,
              },
            },
          },
        },
      },
    });
  }

  // 3. Render the page with a single return statement and conditional logic inside
  return (
    <main className="bg-black text-white min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              {workoutPlan ? workoutPlan.name : 'Welcome to Forge'}
            </h1>
            <p className="text-gray-400 mt-2 text-lg">
              {workoutPlan
                ? 'Your personalized program is ready. Time to get to work.'
                : 'Create a plan to get started.'}
            </p>
          </div>
          {/* Clerk's user button for profile and sign-out */}
          <UserButton afterSignOutUrl="/" />
        </div>

        <GridWrapper>
          {/* This is the conditional rendering logic (ternary operator).
            If a workoutPlan exists, it maps over the sessions.
            If not, it displays the welcome/onboarding card.
          */}
          {workoutPlan ? (
            workoutPlan.sessions.map((session, index) => (
              <BentoCard
                key={session.id}
                className={index < 2 ? 'md:col-span-6' : 'md:col-span-4'}
              >
                <div className="flex flex-col h-full">
                  <h2 className="text-2xl font-bold text-red-400">{`Day ${session.sessionOrder}`}</h2>
                  <p className="text-gray-400 mb-4">{session.name}</p>

                  <div className="flex-grow space-y-3 mb-4 overflow-y-auto pr-2">
                    {session.exercises.map(({ exercise, targetSets, targetReps }) => (
                      <div
                        key={exercise.id}
                        className="flex justify-between items-center text-sm p-3 bg-gray-900/70 border border-gray-800 rounded-lg"
                      >
                        <span className="text-gray-200">{exercise.name}</span>
                        <span className="font-mono text-red-400 font-semibold">
                          {targetSets}x{targetReps}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/workout/${session.id}`}
                    className="mt-auto block w-full text-center bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                  >
                    Start Workout
                  </Link>
                </div>
              </BentoCard>
            ))
          ) : (
            <BentoCard className="col-span-12 row-span-1 flex flex-col items-center justify-center bg-gray-900/50 border-gray-800">
              <div className="text-center">
                <p className="text-gray-400 mt-2">
                  You don&apos;t have an active workout plan yet.
                </p>
                <Link
                  href="/onboarding"
                  className="mt-6 inline-block bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Create Your First Plan
                </Link>
              </div>
            </BentoCard>
          )}
        </GridWrapper>
      </div>
    </main>
  );
}

