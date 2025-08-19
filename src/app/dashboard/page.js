"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import SideBar from "../../components/SideBar";
import GridWrapper from "../../components/GridWrapper";
import BentoCard from "../../components/BentoCard";
import SettingsButton from "../../components/SettingsButton";

// ---- Desktop Grid Templates ----
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
  "today aimeal aimeal aimeal"
  "today aimeal aimeal aimeal"
  "today calories macros water"
  "today calories macros water"
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
    <main className="flex bg-black text-white h-screen overflow-hidden">
      {/* Sidebar (desktop only) */}
      <div className="hidden md:block">
        <SideBar />
        <SettingsButton onClick={() => router.push("/settings")} />
      </div>
      

      {/* Main Content */}
      <div className="flex-1 h-full overflow-y-auto no-scrollbar">
        {/* Settings Button (mobile only) */}
        <div className="md:hidden flex justify-end p-4">
          <SettingsButton onClick={() => router.push("/settings")} />
        </div>

        {/* Sections */}
        <Section badge="Dashboard" title="Your Overview" grid={dashboardGrid} cols={4}>
          <BentoCard title="Your Picture" area="picture" />
          <BentoCard title="Calorie Intake" area="calories" />
          <BentoCard title="Macros" area="macros" />
          <BentoCard title="Water Intake" area="water" />
          <BentoCard title="AI Chatbot" area="chatbot" />
        </Section>

        <Section badge="Workout" title="Train Smarter" grid={workoutGrid} cols={4}>
          <BentoCard title="Today's Workout" area="today" />
          <BentoCard title="Last Session Log" area="lastsesh" />
          <BentoCard title="AI Suggested Workout" area="aisugg" />
        </Section>

        <Section badge="Meals" title="Fuel Right" grid={mealGrid} cols={4}>
          <BentoCard title="Calorie Goal" area="calories" />
          <BentoCard title="Macros" area="macros" />
          <BentoCard title="Water Intake" area="water" />
          <BentoCard title="Today's Meals" area="today" />
          <BentoCard title="AI Suggested Meals" area="aimeal" />
        </Section>

        <Section badge="Profile" title="Your Numbers" grid={profGrid} cols={6}>
          <BentoCard title="Your Name & Location" area="avatar" />
          <BentoCard title="Workout Streak Board" area="board" />
          <BentoCard title="Weight" area="weight" />
          <BentoCard title="Body Fat %" area="bodyfat" />
          <BentoCard title="Bench Press" area="bp" />
          <BentoCard title="Squats" area="squats" />
          <BentoCard title="Deadlift" area="dl" />
          <BentoCard title="AI Coach / Chatbot" area="desc" />
        </Section>
      </div>
    </main>
  );
}

// ---- Components ----
function Section({ badge, title, grid, cols, children }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-4 md:px-12 py-6 md:py-8">
      <div className="absolute -inset-24 pointer-events-none bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
      <Header badge={badge} title={title} />
      <Content grid={grid} cols={cols}>
        {children}
      </Content>
    </section>
  );
}

function Header({ badge, title }) {
  return (
    <div className="w-full max-w-6xl mx-auto mb-6 pt-2 md:pt-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.35 }}
        className="text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-medium mb-3">
          <span>{badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
      </motion.div>
    </div>
  );
}

function Content({ grid, cols, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-6xl mx-auto h-[72vh]"
    >
      {/* Desktop grid */}
      <div className="hidden md:block h-full">
        <GridWrapper
          className={`h-full gap-6 grid grid-cols-${cols}`}
          style={{ gridTemplateAreas: grid }}
        >
          {children}
        </GridWrapper>
      </div>

      {/* Mobile stacked */}
      <div className="flex flex-col gap-4 md:hidden">{children}</div>
    </motion.div>
  );
}
