"use client"

import { useState } from "react"
import DarkModeToggle from "@/components/ui/DarkModeToggle"
import { useRouter } from "next/navigation"

export default function Navbar() {

  const router = useRouter()

  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const notifications = [
    "New user registered",
    "Payment received",
    "Subscription upgraded",
    "Server maintenance scheduled"
  ]

  const handleLogout = () => {
    localStorage.removeItem("auth")
    router.push("/login")
  }

  const hour = new Date().getHours()

  let greeting = "Hello"
  if (hour < 12) greeting = "Good Morning"
  else if (hour < 18) greeting = "Good Afternoon"
  else greeting = "Good Evening"

  return (

    <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl shadow relative">

      <h2 className="font-semibold text-gray-700 dark:text-white">
        {greeting}, Badal 👋
      </h2>

      <div className="flex items-center gap-6">

        <DarkModeToggle />

        {/* Notification */}

        <div className="relative">

          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="text-xl dark:text-white"
          >
            🔔
          </button>

          {showNotifications && (

            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-700 shadow-lg rounded-lg p-3">

              <h3 className="font-semibold mb-2 dark:text-white">
                Notifications
              </h3>

              {notifications.map((note, index) => (

                <p
                  key={index}
                  className="text-sm text-gray-600 dark:text-gray-200 border-b py-1"
                >
                  {note}
                </p>

              ))}

            </div>

          )}

        </div>

        {/* Profile */}

        <div className="relative">

          <div
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 cursor-pointer"
          >

            <div className="w-8 h-8 rounded-full bg-blue-500"></div>

            <span className="text-sm font-medium dark:text-white">
              Badal
            </span>

          </div>

          {showProfile && (

            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 shadow-lg rounded-lg">

              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                Profile
              </button>

              <button
                onClick={() => router.push("/settings")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Settings
              </button>

              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Logout
              </button>

            </div>

          )}

        </div>

      </div>

    </div>

  )
}