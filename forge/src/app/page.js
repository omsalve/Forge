"use client";

import { useRouter } from "next/navigation";
import SideBar from "../components/SideBar";
import GridWrapper from "../components/GridWrapper";
import BentoCard from "../components/BentoCard";
import SettingsButton from "../components/SettingsButton";

const dashboardGrid = `
  "picture calories macros water"
  "picture calories macros water"
  "picture chatbot chatbot chatbot"
  "picture chatbot chatbot chatbot"
`;

const workoutGrid = `
  "today lastsesh aisugg aisugg"
  "today lastsesh aisugg aisugg"
  "today lastsesh aisugg aisugg"
  "today lastsesh aisugg aisugg"
`;

const mealGrid = `
  "calGoal yestmeal aimeal aimeal"
  "calGoal yestmeal aimeal aimeal"
  "Nmeal yestmeal aimeal aimeal"
  "Nmeal yestmeal aimeal aimeal"
`;

const profGrid = `
  "avatar avatar avatar board board board"
  "weight bodyfat . board board board"
  "bp squats dl desc desc desc"
  "bp squats dl desc desc desc"
`;

export default function Page() {
  const router = useRouter();

  return (
    <main className="flex">
      {/* Sidebar fixed on the left */}
      <SideBar />

      {/* Settings Button - navigate to /settings on click */}
      <SettingsButton onClick={() => router.push("/settings")} />
        

      {/* Scrollable full pages */}
      <div className="flex-1 overflow-y-auto snap-y snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
        {/* Dashboard */}
        <section
          id="dashboard"
          className="h-screen flex items-center justify-center snap-start px-6 md:px-12"
        >
          <GridWrapper
            style={{
              gridTemplateAreas: dashboardGrid,
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr 1fr",
            }}
            className="gap-6"
          >
            <BentoCard
              title="Your Picture"
              area="picture"
              className="shadow-lg shadow-black/60 rounded-lg"
            />
            <BentoCard
              title="Calorie Intake"
              area="calories"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="Macros"
              area="macros"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="Water Intake"
              area="water"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="AI Chatbot"
              area="chatbot"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
          </GridWrapper>
        </section>

        {/* Workout */}
        <section
          id="workout"
          className="h-screen flex items-center justify-center snap-start px-6 md:px-12"
        >
          <GridWrapper
            style={{
              gridTemplateAreas: workoutGrid,
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr 1fr",
            }}
            className="gap-6"
          >
            <BentoCard
              title="Today's Workout"
              area="today"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="Last Session Log"
              area="lastsesh"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="AI Suggested Workout"
              area="aisugg"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
          </GridWrapper>
        </section>

        {/* Meals */}
        <section
          id="meals"
          className="h-screen flex items-center justify-center snap-start px-6 md:px-12"
        >
          <GridWrapper
            style={{
              gridTemplateAreas: mealGrid,
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr 1fr",
            }}
            className="gap-6"
          >
            <BentoCard
              title="Calorie Goal"
              area="calGoal"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="Next Meal"
              area="Nmeal"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="Yesterday's Meals"
              area="yestmeal"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="AI Suggested Meal"
              area="aimeal"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
          </GridWrapper>
        </section>

        {/* Profile */}
        <section
          id="profile"
          className="h-screen flex items-center justify-center snap-start px-6 md:px-12"
        >
          <GridWrapper
            style={{
              gridTemplateAreas: profGrid,
              gridTemplateColumns: "repeat(6, 1fr)",
              gridTemplateRows: "repeat(4, 1fr)",
            }}
            className="gap-6"
          >
            <BentoCard
              title="Your Name & Location"
              area="avatar"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="Workout Streak Board"
              area="board"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="Weight"
              area="weight"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="Body Fat %"
              area="bodyfat"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="Bench Press"
              area="bp"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="Squats"
              area="squats"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="Deadlift"
              area="dl"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
            <BentoCard
              title="AI Coach / Chatbot"
              area="desc"
              className="shadow-lg shadow-black/50 rounded-lg"
            />
          </GridWrapper>
        </section>
      </div>
    </main>
  );
}
