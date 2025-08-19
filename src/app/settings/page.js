"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Settings as SettingsIcon,
  Lock,
  Download,
  Upload,
  Trash2,
  Bell,
  Ruler,
  Shield,
  Database,
} from "lucide-react";

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@forge.fit",
    age: 28,
    weight: 75,
    height: 178,
    goal: "muscle-gain",
  });

  const [preferences, setPreferences] = useState({
    units: "metric",
    notifications: true,
    weeklyReports: true,
    workoutReminders: true,
    privateProfile: false,
    dataSharing: false,
  });

  const handleSave = () => {
    alert("✅ Settings saved\nYour preferences have been updated successfully.");
  };

  // Section wrapper
  const SettingsSection = ({ title, children, badge }) => (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden bg-black/90 border border-gray-800 p-6 rounded-2xl hover:border-red-600/40 transition"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-red-600/5 to-transparent" />
      <div className="relative flex items-center mb-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {badge && (
          <span className="ml-auto bg-red-600/20 text-red-400 border border-red-600/30 px-2 py-0.5 rounded text-xs font-semibold">
            {badge}
          </span>
        )}
      </div>
      <div className="relative space-y-4">{children}</div>
    </motion.section>
  );

  // Setting row
  const SettingRow = ({ label, description, children }) => (
    <div className="flex items-center justify-between py-2">
      <div className="space-y-1 max-w-xs">
        <label className="block text-sm font-medium text-white">{label}</label>
        {description && (
          <p className="text-xs text-gray-400 truncate">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen relative bg-black p-6 text-white overflow-y-auto overflow-x-hidden">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />

      <div className="relative max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-red-600 to-red-400 shadow-lg border border-red-600/30">
              <SettingsIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-gray-400">Fine-tune your Forge vibe</p>
            </div>
          </div>
        </motion.div>

        {/* Profile */}
        <SettingsSection title="Profile" badge="Premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-1 text-white font-medium">
                <User className="inline h-4 w-4 mr-1 text-red-400" />
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile((p) => ({ ...p, name: e.target.value }))
                }
                className="w-full px-3 py-2 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 text-white font-medium">
                📧 Email
              </label>
              <input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile((p) => ({ ...p, email: e.target.value }))
                }
                className="w-full px-3 py-2 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
              />
            </div>
            {/* Age */}
            <div>
              <label htmlFor="age" className="block mb-1 text-white font-medium">
                🎂 Age
              </label>
              <input
                id="age"
                type="number"
                min={0}
                value={profile.age}
                onChange={(e) =>
                  setProfile((p) => ({ ...p, age: parseInt(e.target.value) || 0 }))
                }
                className="w-full px-3 py-2 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
              />
            </div>
            {/* Goal */}
            <div>
              <label htmlFor="goal" className="block mb-1 text-white font-medium">
                🎯 Primary Goal
              </label>
              <select
                id="goal"
                value={profile.goal}
                onChange={(e) =>
                  setProfile((p) => ({ ...p, goal: e.target.value }))
                }
                className="w-full px-3 py-2 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
              >
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="maintenance">Maintenance</option>
                <option value="strength">Strength</option>
                <option value="endurance">Endurance</option>
              </select>
            </div>
          </div>
        </SettingsSection>

        {/* Preferences */}
        <SettingsSection title="App Preferences">
          <SettingRow
            label="Measurement Units"
            description="Choose your preferred unit system"
          >
            <Ruler className="h-4 w-4 text-gray-400" />
            <select
              value={preferences.units}
              onChange={(e) =>
                setPreferences((p) => ({ ...p, units: e.target.value }))
              }
              className="w-32 px-3 py-2 rounded bg-black border border-gray-700 text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
            >
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </SettingRow>
        </SettingsSection>

        {/* Notifications */}
        <SettingsSection title="Notifications">
          {[
            ["Push Notifications", "Receive notifications on your device", "notifications", <Bell key="bell" className="h-4 w-4 text-gray-400" />],
            ["Weekly Reports", "Get weekly summaries of your progress", "weeklyReports", "📊"],
            ["Workout Reminders", "Remind me when it’s time to work out", "workoutReminders", "⏰"],
          ].map(([label, desc, key, icon]) => (
            <SettingRow key={key} label={<span className="flex items-center gap-1">{icon} {label}</span>} description={desc}>
              <input
                type="checkbox"
                checked={preferences[key]}
                onChange={(e) =>
                  setPreferences((p) => ({ ...p, [key]: e.target.checked }))
                }
                className="h-5 w-9 cursor-pointer accent-red-600"
              />
            </SettingRow>
          ))}
        </SettingsSection>

        {/* Privacy */}
        <SettingsSection title="Privacy & Security">
          {[
            ["Private Profile", "Hide your profile from other users", "privateProfile", <Shield key="shield" className="h-4 w-4 text-gray-400" />],
            ["Data Sharing", "Allow anonymous data sharing", "dataSharing", <Database key="db" className="h-4 w-4 text-gray-400" />],
          ].map(([label, desc, key, icon]) => (
            <SettingRow key={key} label={<span className="flex items-center gap-1">{icon} {label}</span>} description={desc}>
              <input
                type="checkbox"
                checked={preferences[key]}
                onChange={(e) =>
                  setPreferences((p) => ({ ...p, [key]: e.target.checked }))
                }
                className="h-5 w-9 cursor-pointer accent-red-600"
              />
            </SettingRow>
          ))}

          <hr className="border-gray-800 my-6" />

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="flex-1 py-2 px-4 border border-gray-800 rounded bg-black text-white hover:border-red-600/40 transition flex items-center justify-center gap-2"
              onClick={() => alert("🔒 Change Password clicked")}
            >
              <Lock className="h-4 w-4" /> Change Password
            </button>
            <button
              type="button"
              className="flex-1 py-2 px-4 border border-gray-800 rounded bg-black text-white hover:border-red-600/40 transition flex items-center justify-center gap-2"
              onClick={() => alert("⬇️ Download Data clicked")}
            >
              <Download className="h-4 w-4" /> Download Data
            </button>
          </div>
        </SettingsSection>

        {/* Data Management */}
        <SettingsSection title="Data Management">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <button
              type="button"
              className="flex justify-center items-center gap-2 py-2 px-4 border border-gray-800 rounded bg-black text-white hover:border-red-600/40 transition"
              onClick={() => alert("⬆️ Import Data clicked")}
            >
              <Upload className="h-4 w-4" /> Import
            </button>
            <button
              type="button"
              className="flex justify-center items-center gap-2 py-2 px-4 border border-gray-800 rounded bg-black text-white hover:border-red-600/40 transition"
              onClick={() => alert("⬇️ Export Data clicked")}
            >
              <Download className="h-4 w-4" /> Export
            </button>
            <button
              type="button"
              className="flex justify-center items-center gap-2 py-2 px-4 border border-red-600/60 rounded bg-black text-red-500 hover:border-red-600 transition"
              onClick={() => {
                if (
                  confirm("⚠️ Are you sure you want to clear all data? This cannot be undone.")
                ) {
                  alert("🗑️ Data cleared!");
                }
              }}
            >
              <Trash2 className="h-4 w-4" /> Clear All
            </button>
          </div>
        </SettingsSection>

        {/* Save button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="relative overflow-hidden bg-black text-red-400 border border-red-600/30 ring-1 ring-red-600/40 px-8 py-3 rounded-lg shadow-lg font-semibold hover:ring-red-500/50 hover:border-red-500/40 hover:text-red-300 transition flex items-center gap-2"
          >
            <SettingsIcon className="h-5 w-5" />
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
}
