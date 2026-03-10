"use client"

import DarkModeToggle from "@/components/ui/DarkModeToggle"
import { useRouter } from "next/navigation"

export default function Navbar() {

  const router = useRouter()

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

    <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl shadow">

      {/* Greeting */}

      <h2 className="font-semibold text-gray-700 dark:text-white">

        {greeting}, Badal 👋

      </h2>

      <div className="flex items-center gap-6">

        <DarkModeToggle />

        <button className="text-xl dark:text-white">
          🔔
        </button>

        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-full bg-blue-500"></div>

          <span className="text-sm font-medium dark:text-white">
            Badal
          </span>

          <button
            onClick={handleLogout}
            className="text-sm bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  )
}