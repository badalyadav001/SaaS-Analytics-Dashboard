"use client"

import { useEffect, useState } from "react"

export default function DarkModeToggle() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }

  }, [])

  const toggleTheme = () => {

    if (darkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setDarkMode(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setDarkMode(true)
    }

  }

  return (

    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-800 text-white rounded-lg dark:bg-white dark:text-black transition"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>

  )
}