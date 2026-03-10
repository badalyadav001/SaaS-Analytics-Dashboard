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
]

const users = [
  { month: "Jan", users: 200 },
  { month: "Feb", users: 350 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 800 },
]

export default function Dashboard() {

  const router = useRouter()

  useEffect(() => {

    const auth = localStorage.getItem("auth")

    if (!auth) {
      router.push("/login")
    }

  }, [])

  return (

    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">

      <Sidebar />

      <div className="flex-1 p-8 space-y-8">

        <Navbar />

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          SaaS Analytics Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <StatsCard title="Total Revenue" value="$42,000" />

          <StatsCard title="Active Users" value="8,420" />

          <StatsCard title="Conversion Rate" value="12%" />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <RevenueChart data={revenue} />

          <UsersChart data={users} />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <UsersTable />

          <ActivityFeed />

        </div>

      </div>

    </div>

  )
}