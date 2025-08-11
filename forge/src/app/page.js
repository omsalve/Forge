"use client";

import SideBar from "../components/SideBar";
import GridWrapper from "../components/GridWrapper";
import BentoCard from "../components/BentoCard";

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

export default function Page() {
  return (
    <main className="flex">
      {/* Sidebar fixed on the left */}
      <SideBar />

      {/* Scrollable full pages */}
      <div className="flex-1 overflow-y-auto snap-y snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
        <section id="dashboard" className="h-screen flex items-center justify-center snap-start px-6 md:px-12">
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

        <section id="workout" className="h-screen flex items-center justify-center snap-start px-6 md:px-12">
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

        <section id="meals" className="h-screen flex items-center justify-center snap-start px-6 md:px-12">
          <GridWrapper  className="gap-6" />
        </section>

        <section id="profile" className="h-screen flex items-center justify-center snap-start px-6 md:px-12">
          <GridWrapper  className="gap-6" />
        </section>
      </div>
    </main>
  );
}
