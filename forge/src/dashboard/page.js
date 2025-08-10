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

export default function Page() {
  return (
    <main className="flex">
      {/* Sidebar fixed on the left */}
      <SideBar />

      {/* Scrollable full pages */}
      <div className="flex-1 overflow-y-auto snap-y snap-mandatory">
        <section className="h-screen flex items-center justify-center snap-start">
           <GridWrapper
            id="dashboard"
            style={{
              gridTemplateAreas: dashboardGrid,
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr 1fr",
            }}
          >
            <BentoCard title="Your Picture" area="picture" />
            <BentoCard title="Calorie Intake" area="calories" />
            <BentoCard title="Macros" area="macros" />
            <BentoCard title="Water Intake" area="water" />
            <BentoCard title="AI Chatbot" area="chatbot" />
          </GridWrapper>
        </section>
        
        <section className="h-screen flex items-center justify-center snap-start">
          <GridWrapper id="workout" />
        </section>
        <section className="h-screen flex items-center justify-center snap-start">
          <GridWrapper id="meals" />
        </section>
        <section className="h-screen flex items-center justify-center snap-start">
          <GridWrapper id="profile" />
        </section>
      </div>
    </main>
  );
}
