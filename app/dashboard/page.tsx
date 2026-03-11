"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import Sidebar from "@/components/sidebar/Sidebar"
import Navbar from "@/components/navbar/Navbar"
import StatsCard from "@/components/dashboard/StatsCard"
import RevenueChart from "@/components/charts/RevenueChart"
import UsersChart from "@/components/charts/UsersChart"
import UsersTable from "@/components/table/UsersTable"
import ActivityFeed from "@/components/dashboard/ActivityFeed"

const revenue = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 3000 },
  { month: "Mar", value: 5000 },
  { month: "Apr", value: 7000 },
  { month: "May", value: 9000 },
  { month: "Jun", value: 11000 },
]

const users = [
  { month: "Jan", users: 200 },
  { month: "Feb", users: 350 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 800 },
  { month: "May", users: 1200 },
  { month: "Jun", users: 1600 },
]

export default function Dashboard() {

  const router = useRouter()

  useEffect(() => {

    const auth = localStorage.getItem("auth")

    if (!auth) {
      router.push("/login")
    }

  }, [router])

  return (

    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">

      <Sidebar />

      <div className="flex-1 p-8 space-y-8">

        <Navbar />

        {/* Welcome */}

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Welcome back, Badal 👋
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Here's what's happening with your platform today.
          </p>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <StatsCard title="Total Revenue" value="$54,200" />
          <StatsCard title="Active Users" value="9,840" />
          <StatsCard title="Conversion Rate" value="14.2%" />

        </div>

        {/* Charts */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <RevenueChart data={revenue} />

          <UsersChart data={users} />

        </div>

        {/* Table + Activity */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <UsersTable />

          <ActivityFeed />

        </div>

      </div>

    </div>

  )

}