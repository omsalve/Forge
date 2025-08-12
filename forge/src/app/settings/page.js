"use client";

export default function Settings() {
  return (
    <main className="flex">
      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 md:px-12 py-10 space-y-10">
        
        {/* Account Section */}
        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h2 className="text-2xl font-bold">Account</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-400">Display Name</label>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Email</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">Change Password</button>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h2 className="text-2xl font-bold">Preferences</h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Weight Units</span>
            <select className="bg-gray-800 px-3 py-1 rounded-lg">
              <option>kg</option>
              <option>lbs</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Theme</span>
            <select className="bg-gray-800 px-3 py-1 rounded-lg">
              <option>Dark</option>
              <option>Light</option>
              <option>System</option>
            </select>
          </div>
        </section>

        {/* Notifications */}
        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h2 className="text-2xl font-bold">Notifications</h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Workout Reminders</span>
            <input type="checkbox" className="scale-125" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Meal Reminders</span>
            <input type="checkbox" className="scale-125" />
          </div>
        </section>

        {/* Data & Privacy */}
        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h2 className="text-2xl font-bold">Data & Privacy</h2>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg">Download My Data</button>
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg">Delete Account</button>
        </section>

      </div>
    </main>
  );
}
