"use client";

import DarkVeil from "../../../src/reactbits/Backgrounds/DarkVeil/DarkVeil";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { BarChart3, Brain, Dumbbell, Flame, X, TrendingUp, Activity, Target, LineChart, Star } from "lucide-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import { useRouter } from "next/navigation";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

function DumbbellModel(props) {
  const { scene } = useGLTF("/models/dumbbell.glb");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += 0.001;
      ref.current.rotation.z += 0.001;
    }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}

export default function Page() {
  const [features] = useState([
    {
      title: "Precision Tracking",
      description:
        "Log every rep, set, and PR with pinpoint accuracy so progress isn’t just felt — it’s proven.",
      icon: <BarChart3 className="w-10 h-10" />,
    },
    {
      title: (
        <span className="whitespace-nowrap">Performance<br></br> Coaching</span>
      ),
      description:
        "AI-powered insights to help you train smarter, recover faster, and break plateaus.",
      icon: <Brain className="w-10 h-10" />,
    },
    {
      title: "Strength Analytics",
      description:
        "Visualize your growth over time — from your first lift to your heaviest pull.",
      icon: <Dumbbell className="w-10 h-10" />,
    },
    {
      title: "Community Grind",
      description:
        "Connect with lifters who push you harder, because iron sharpens iron.",
      icon: <Flame className="w-10 h-10" />,
    },
  ]);
  const [showSignup, setShowSignup] = useState(false);
  const [authError, setAuthError] = useState(null);
  const router = useRouter();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { amount: 0.8 });
  const showNavItems = !heroInView;
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);
  const reviews = [
    { name: "Aria M.", role: "Powerlifter", text: "Added 35kg to my total in 12 weeks. Data made the difference." },
    { name: "J. Patel", role: "Coach", text: "Session planning is fast, and the charts keep my athletes locked in." },
    { name: "Leo R.", role: "CrossFit", text: "Seeing volume and intensity trends kept me from overreaching." },
    { name: "Sam K.", role: "Bodybuilder", text: "Love the simplicity. Log fast, lift faster." },
    { name: "Nora T.", role: "Runner + Lift", text: "Balanced my lifting with runs thanks to recovery insights." },
  ];
  const faqs = [
    { q: "Is Forge free?", a: "We’ll have a generous free tier during beta with optional pro features." },
    { q: "Do I own my data?", a: "Yes. Export anytime. We’re privacy-first by design." },
    { q: "Will there be an Android/iOS app?", a: "Yes — mobile-first experience is on the roadmap." },
    { q: "Does Forge work offline?", a: "Offline logging is planned; your data will sync when you’re back online." },
  ];

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  const capabilities = [
    {
      title: "Track Everything",
      description:
        "Workouts, sets, reps, RPE, rest — all logged fast so you stay focused on the iron.",
      icon: <Activity className="w-8 h-8" />,
    },
    {
      title: "Smarter Training",
      description:
        "AI guidance adapts your load, volume, and recovery to keep you progressing.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Visualize Progress",
      description:
        "See trends with clean charts — PRs, 1RMs, volume, intensity, and more.",
      icon: <LineChart className="w-8 h-8" />,
    },
    {
      title: "Own Your Data",
      description:
        "Your training history is yours. Export anytime. Privacy-first by design.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ];

  return (
    <main className="w-screen h-screen bg-black text-white overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* NAVBAR (Floating) */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-black/70 border border-gray-800 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        >
          <AnimatePresence initial={false}>
            {showNavItems && (
              <motion.button
                layout
                key="brand"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                onClick={() => scrollToSection("home")}
                className={`text-white text-xl sm:text-2xl tracking-wide px-1 ${bebasNeue.className}`}
              >
                FORGE
              </motion.button>
            )}
          </AnimatePresence>
          <motion.div layout className="hidden sm:flex items-center gap-1 sm:gap-2">
            <button onClick={() => scrollToSection("features")} className="px-3 py-1.5 rounded-full text-gray-300 hover:text-white hover:bg-red-600/10 border border-transparent hover:border-red-600/30 transition">Features</button>
            <button onClick={() => scrollToSection("why")} className="px-3 py-1.5 rounded-full text-gray-300 hover:text-white hover:bg-red-600/10 border border-transparent hover:border-red-600/30 transition">Why Forge?</button>
            <button onClick={() => scrollToSection("reviews")} className="px-3 py-1.5 rounded-full text-gray-300 hover:text-white hover:bg-red-600/10 border border-transparent hover:border-red-600/30 transition">Reviews</button>
            <button onClick={() => scrollToSection("faq")} className="px-3 py-1.5 rounded-full text-gray-300 hover:text-white hover:bg-red-600/10 border border-transparent hover:border-red-600/30 transition">FAQ</button>
          </motion.div>
          <motion.div layout className="pl-1 sm:pl-2">
            <AnimatePresence initial={false}>
              {showNavItems && (
                <motion.button
                  layout
                  key="join"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setShowSignup(true)}
                  className={`relative overflow-hidden px-4 py-1.5 bg-black text-red-400 font-semibold rounded-full border border-red-600/30 ring-1 ring-red-600/40 hover:ring-red-500/50 hover:border-red-500/40 hover:text-red-300 transition ${bebasNeue.className}`}
                >
                  Join
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </nav>
      {/* HERO */}
      <section ref={heroRef} id="home" className="w-screen h-screen relative snap-start">
        <DarkVeil />

        {/* Dumbbell */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[calc(50%+100px)] w-[200px] h-[200px]">
          <Canvas
            style={{ background: "transparent" }}
            camera={{ position: [0, 0, 2], fov: 50 }}
          >
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 5]} />
            <DumbbellModel scale={0.02} />
          </Canvas>
        </div>

        {/* Headings */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 flex flex-col items-center">
  <h1
    className="font-[BaseNeue] text-[5rem] font-black m-0"
    style={{ fontFamily: "BaseNeue, sans-serif" }}
  >
    FORGE.
  </h1>
  <h2
    className="mt-4 italic font-normal"
    style={{ fontFamily: "Satoshi, sans-serif" }}
  >
    Built for those who don’t skip.
  </h2>

  {/* Button here so it stacks below */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className={`relative overflow-hidden mt-8 px-8 py-3 bg-black text-red-400 text-2xl font-semibold rounded-2xl border border-red-600/30 ring-2 ring-red-600/40 shadow-[0_0_24px_rgba(220,38,38,0.25)] hover:ring-red-500/50 hover:border-red-500/40 hover:text-red-300 transition-transform duration-300 ${bebasNeue.className}`}
    onClick={() => setShowSignup(true)}
    aria-haspopup="dialog"
    aria-expanded={showSignup}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent pointer-events-none" />
    <span className="relative z-10">Start Forging</span>
  </motion.button>
</div>

        
      </section>

      {/* FEATURES */}
      <section id="features" className="w-screen h-screen relative snap-start flex items-center bg-black text-white px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-medium mb-4">
            <span>Core Principles</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Precision tools for lifters and athletes — log fast, analyze clearly, progress relentlessly.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.05 },
              },
            }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-stretch"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { y: 12, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl p-6 text-left shadow-lg border border-gray-800 bg-black hover:border-red-600/50 transition-colors h-full flex flex-col overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-3 min-w-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-600/20 border border-red-600/30 text-red-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold break-words leading-snug">{feature.title}</h3>
                </div>
                <p className="text-gray-400 break-words leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT FORGE CAN DO */}
      <section id="why" className="w-screen h-screen relative snap-start flex items-center bg-black text-white px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-medium mb-4">
              <span>Why Forge?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What Forge Can Do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              Everything you need to plan, execute, and measure elite training — all in one place.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.05 },
              },
            }}
            className="grid gap-8 md:grid-cols-2 items-stretch"
          >
            {capabilities.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                whileHover={{ scale: 1.01 }}
                className="relative overflow-hidden rounded-3xl border border-gray-800 bg-black hover:border-red-600/50 transition-colors h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent pointer-events-none" />
                <div className="p-6 lg:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4 text-red-400 min-w-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/20 border border-red-600/30">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold break-words leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4 break-words leading-relaxed">{item.description}</p>
                  <div className="flex gap-3 text-xs text-gray-500 mt-auto flex-wrap">
                    <span className="px-2 py-1 rounded-lg bg-gray-900 border border-gray-800">Fast</span>
                    <span className="px-2 py-1 rounded-lg bg-gray-900 border border-gray-800">Accurate</span>
                    <span className="px-2 py-1 rounded-lg bg-gray-900 border border-gray-800">Private</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="w-screen h-screen relative snap-start flex items-center bg-black text-white px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-medium mb-4">
              <span>Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">What athletes say</h2>
          </div>
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2">
            {reviews.map((r, i) => (
              <div key={i} className="min-w-[260px] max-w-xs snap-start rounded-2xl bg-black border border-gray-800 hover:border-red-600/40 transition p-5">
                <div className="flex items-center gap-1 text-red-400 mb-3">
                  <Star className="w-4 h-4 fill-red-400" />
                  <Star className="w-4 h-4 fill-red-400" />
                  <Star className="w-4 h-4 fill-red-400" />
                  <Star className="w-4 h-4 fill-red-400" />
                  <Star className="w-4 h-4 fill-red-400" />
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{r.text}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white font-medium">{r.name}</span>
                  <span className="text-gray-500">{r.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="w-screen h-screen relative snap-start flex items-center bg-black text-white px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-medium mb-4">
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const open = faqOpenIndex === idx;
              return (
                <div key={idx} className="rounded-2xl border bg-black border-gray-800 hover:border-red-600/40 transition overflow-hidden">
                  <button
                    className="w-full text-left px-5 py-4 flex items-center justify-between"
                    onClick={() => setFaqOpenIndex(open ? null : idx)}
                  >
                    <span className="text-white font-medium">{item.q}</span>
                    <span className="text-red-400">{open ? "−" : "+"}</span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    className="px-5"
                  >
                    <div className="pb-4 text-gray-400 leading-relaxed">{item.a}</div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="w-screen h-screen relative snap-start flex items-center justify-center bg-black text-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${bebasNeue.className}`}>Ready to Forge?</h2>
          <p className="text-gray-400 mb-8">Own your training. Measure what matters. Build real strength.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`relative overflow-hidden mt-2 px-8 py-3 bg-black text-red-400 text-2xl font-semibold rounded-2xl border border-red-600/30 ring-2 ring-red-600/40 shadow-[0_0_24px_rgba(220,38,38,0.25)] hover:ring-red-500/50 hover:border-red-500/40 hover:text-red-300 transition-transform duration-300 ${bebasNeue.className}`}
            onClick={() => setShowSignup(true)}
            aria-haspopup="dialog"
            aria-expanded={showSignup}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent pointer-events-none" />
            <span className="relative z-10">Start Forging</span>
          </motion.button>
        </div>
      </section>

      {/* SIGN UP BUBBLE (Modal) */}
      <AnimatePresence>
        {showSignup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* 60% BLACK: overlay + modal body */}
            <motion.div
              className="absolute inset-0 bg-black/70"
              onClick={() => setShowSignup(false)}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative z-10 w-full max-w-md mx-4"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
                {/* 30% RED: header bar + CTA button color */}
                <div className="bg-red-600 text-white flex items-center justify-between px-5 py-4">
                  <h3 className={`text-lg font-semibold ${bebasNeue.className}`}>Join Forge</h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition"
                    aria-label="Close sign up"
                    onClick={() => setShowSignup(false)}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
                <div className="bg-black px-6 py-6">
                  {/* 10% GREY: labels, borders, helper text */}
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const username = (formData.get("username") || "").toString().trim();
                      const password = (formData.get("password") || "").toString();
                      if (username === "omsalve" && password === "9323003566") {
                        setAuthError(null);
                        setShowSignup(false);
                        router.push("/dashboard");
                        return;
                      }
                      setAuthError("Invalid credentials. This is temporary access only.");
                    }}
                  >
                    <div>
                      <label className="block text-sm text-gray-300 mb-1" htmlFor="username">Username</label>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="omsalve"
                        autoComplete="username"
                        className="w-full rounded-xl bg-black border border-gray-700 text-white placeholder-gray-500 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-1" htmlFor="password">Password</label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        autoComplete="current-password"
                        className="w-full rounded-xl bg-black border border-gray-700 text-white placeholder-gray-500 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition"
                      />
                    </div>
                    {authError && (
                      <p className="text-sm text-gray-400">{authError}</p>
                    )}
                    <button
                      type="submit"
                      className="w-full mt-2 bg-red-600 text-white font-semibold rounded-2xl px-4 py-3 hover:bg-red-500 transition"
                      style={{ fontFamily: "Satoshi, sans-serif" }}
                    >
                      Access Dashboard
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      By continuing you agree to our Terms and Privacy Policy.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
