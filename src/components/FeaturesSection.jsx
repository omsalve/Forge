"use client";

import { Dumbbell, Flame, Users } from "lucide-react";

const features = [
  {
    title: "Training Programs",
    description:
      "Forge adapts workouts to your goals in real time — from strength and hypertrophy to athletic performance. No generic plans, just AI-tailored training.",
    icon: <Dumbbell className="w-8 h-8 text-red-500" />,
    highlight: [
      "Dynamic workout generation",
      "Form correction feedback",
      "Progress tracking",
    ],
  },
  {
    title: "Nutrition & Recovery",
    description:
      "Smart meal suggestions and recovery plans based on your activity, sleep, and lifestyle. Your AI coach keeps you fueled and ready.",
    icon: <Flame className="w-8 h-8 text-orange-500" />,
    highlight: [
      "Adaptive nutrition tracking",
      "Recovery optimization",
      "Supplement guidance",
    ],
  },
  {
    title: "Community & Challenges",
    description:
      "Stay motivated with a connected community, AI-driven challenges, and leaderboards that keep pushing your limits.",
    icon: <Users className="w-8 h-8 text-blue-500" />,
    highlight: [
      "AI-set weekly challenges",
      "Progress-based leaderboards",
      "Community feedback loop",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center mb-12">
          What Forge Can Do
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-8 bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-400 mb-4">{feature.description}</p>
              <ul className="space-y-2 text-sm text-zinc-300">
                {feature.highlight.map((point, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
