"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {

  const pathname = usePathname()

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Users", path: "/users", icon: "👥" },
    { name: "Analytics", path: "/analytics", icon: "📈" },
    { name: "Settings", path: "/settings", icon: "⚙" },
  ]

  return (

    <div className="h-screen w-64 bg-gray-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-10 tracking-wide">
        SaaSify
      </h1>

      <nav className="flex flex-col gap-3">

        {menu.map((item) => (

          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
            ${pathname === item.path
                ? "bg-blue-500 shadow-lg"
                : "hover:bg-gray-700"
              }`}
          >

            <span>{item.icon}</span>

            {item.name}

          </Link>

        ))}

      </nav>

    </div>

  )
}