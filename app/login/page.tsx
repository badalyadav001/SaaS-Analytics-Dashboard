"use client"

import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const handleLogin = () => {

    localStorage.setItem("auth", "true")

    router.push("/dashboard")

  }

  return (

    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">

      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow w-96">

        <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">
          SaaSify Login
        </h1>

        <button
          onClick={handleLogin}
          className="bg-indigo-600 text-white w-full py-2 rounded-lg hover:bg-indigo-700"
        >
          Login as Admin
        </button>

      </div>

    </div>

  )
}