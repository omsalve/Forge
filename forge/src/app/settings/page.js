"use client";

import React, { useState } from "react";

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
    alert("Settings saved\nYour preferences have been updated successfully.");
  };

  const SettingsSection = ({ title, children, badge }) => (
    <section className="bg-gray-800 border border-gray-700 p-6 rounded-lg hover:bg-gray-700 transition">
      <div className="flex items-center mb-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {badge && (
          <span className="ml-auto bg-gray-600 text-gray-300 px-2 py-0.5 rounded text-xs font-semibold">
            {badge}
          </span>
        )}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );

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

  // Simple select replacement with native <select>
  // Switch replacement with checkbox input styled minimal

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c1.656 0 3-1.344 3-3S13.656 2 12 2 9 3.344 9 5s1.344 3 3 3zM19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Settings</h1>
              <p className="text-gray-400">Customize your Forge experience</p>
            </div>
          </div>
        </div>

        {/* Profile Settings */}
        <SettingsSection title="Profile" badge="Premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-white font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-white font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="age" className="block mb-1 text-white font-medium">
                Age
              </label>
              <input
                id="age"
                type="number"
                min={0}
                value={profile.age}
                onChange={(e) =>
                  setProfile((prev) => ({
                    ...prev,
                    age: parseInt(e.target.value) || 0,
                  }))
                }
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="goal" className="block mb-1 text-white font-medium">
                Primary Goal
              </label>
              <select
                id="goal"
                value={profile.goal}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, goal: e.target.value }))
                }
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="maintenance">Maintenance</option>
                <option value="strength">Strength</option>
                <option value="endurance">Endurance</option>
              </select>
            </div>
          </div>

          <hr className="border-gray-600 my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SettingRow label="Weight" description="Current body weight">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  value={profile.weight}
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      weight: parseInt(e.target.value) || 0,
                    }))
                  }
                  className="w-20 px-2 py-1 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-400">kg</span>
              </div>
            </SettingRow>

            <SettingRow label="Height" description="Your height">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  value={profile.height}
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      height: parseInt(e.target.value) || 0,
                    }))
                  }
                  className="w-20 px-2 py-1 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-400">cm</span>
              </div>
            </SettingRow>
          </div>
        </SettingsSection>

        {/* App Preferences */}
        <SettingsSection title="App Preferences">
          <SettingRow label="Measurement Units" description="Choose your preferred unit system">
            <select
              value={preferences.units}
              onChange={(e) =>
                setPreferences((prev) => ({ ...prev, units: e.target.value }))
              }
              className="w-32 px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </SettingRow>
        </SettingsSection>

        {/* Notifications */}
        <SettingsSection title="Notifications">
          <SettingRow label="Push Notifications" description="Receive notifications on your device">
            <input
              type="checkbox"
              checked={preferences.notifications}
              onChange={(e) =>
                setPreferences((prev) => ({ ...prev, notifications: e.target.checked }))
              }
              className="h-5 w-9 cursor-pointer"
            />
          </SettingRow>

          <SettingRow
            label="Weekly Progress Reports"
            description="Get weekly summaries of your progress"
          >
            <input
              type="checkbox"
              checked={preferences.weeklyReports}
              onChange={(e) =>
                setPreferences((prev) => ({ ...prev, weeklyReports: e.target.checked }))
              }
              className="h-5 w-9 cursor-pointer"
            />
          </SettingRow>

          <SettingRow label="Workout Reminders" description="Remind me when it's time to work out">
            <input
              type="checkbox"
              checked={preferences.workoutReminders}
              onChange={(e) =>
                setPreferences((prev) => ({ ...prev, workoutReminders: e.target.checked }))
              }
              className="h-5 w-9 cursor-pointer"
            />
          </SettingRow>
        </SettingsSection>

        {/* Privacy & Security */}
        <SettingsSection title="Privacy & Security">
          <SettingRow label="Private Profile" description="Hide your profile from other users">
            <input
              type="checkbox"
              checked={preferences.privateProfile}
              onChange={(e) =>
                setPreferences((prev) => ({ ...prev, privateProfile: e.target.checked }))
              }
              className="h-5 w-9 cursor-pointer"
            />
          </SettingRow>

          <SettingRow label="Data Sharing" description="Allow anonymous data sharing for research">
            <input
              type="checkbox"
              checked={preferences.dataSharing}
              onChange={(e) =>
                setPreferences((prev) => ({ ...prev, dataSharing: e.target.checked }))
              }
              className="h-5 w-9 cursor-pointer"
            />
          </SettingRow>

          <hr className="border-gray-600 my-6" />

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="flex-1 py-2 px-4 border border-gray-600 rounded bg-transparent text-white hover:bg-gray-700 transition"
              onClick={() => alert("Change Password clicked")}
            >
              🔒 Change Password
            </button>
            <button
              type="button"
              className="flex-1 py-2 px-4 border border-gray-600 rounded bg-transparent text-white hover:bg-gray-700 transition"
              onClick={() => alert("Download Data clicked")}
            >
              ⬇️ Download Data
            </button>
          </div>
        </SettingsSection>

        {/* Data Management */}
        <SettingsSection title="Data Management">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <button
              type="button"
              className="flex justify-start items-center gap-2 py-2 px-4 border border-gray-600 rounded bg-transparent text-white hover:bg-gray-700 transition"
              onClick={() => alert("Import Data clicked")}
            >
              ⬆️ Import Data
            </button>
            <button
              type="button"
              className="flex justify-start items-center gap-2 py-2 px-4 border border-gray-600 rounded bg-transparent text-white hover:bg-gray-700 transition"
              onClick={() => alert("Export Data clicked")}
            >
              ⬇️ Export Data
            </button>
            <button
              type="button"
              className="flex justify-start items-center gap-2 py-2 px-4 border border-red-600 rounded bg-transparent text-red-600 hover:bg-red-700 transition"
              onClick={() => {
                if (
                  confirm(
                    "Are you sure you want to clear all data? This action cannot be undone."
                  )
                ) {
                  alert("Data cleared!");
                }
              }}
            >
              🗑️ Clear All Data
            </button>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 space-y-2 text-white">
            <h4 className="font-medium">Storage Usage</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Workouts:</span>
                <span className="font-medium">2.4 MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Nutrition:</span>
                <span className="font-medium">1.8 MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Progress Photos:</span>
                <span className="font-medium">15.2 MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total:</span>
                <span className="font-medium text-blue-400">19.4 MB</span>
              </div>
            </div>
          </div>
        </SettingsSection>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-blue-600 to-blue-400 px-8 py-3 rounded shadow-lg text-white font-semibold hover:brightness-110 transition"
          >
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
}
