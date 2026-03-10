"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Skeleton from "@/components/ui/Skeleton"

export default function UsersTable() {

  const [users, setUsers] = useState<any[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function fetchUsers() {

      try {

        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        )

        setUsers(res.data)

      } catch (error) {

        console.log("Error fetching users")

      } finally {

        setLoading(false)

      }

    }

    fetchUsers()

  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  // Skeleton Loading UI

  if (loading) {

    return (

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4">

        <Skeleton />
        <Skeleton />
        <Skeleton />

      </div>

    )

  }

  return (

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

      <h2 className="text-lg font-semibold mb-4 dark:text-white">
        Users
      </h2>

      {/* Search */}

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />

      {/* Table */}

      <table className="w-full text-left">

        <thead className="bg-gray-50 dark:bg-gray-700">

          <tr className="border-b dark:border-gray-700">

            <th className="py-2 dark:text-gray-300">Name</th>
            <th className="py-2 dark:text-gray-300">Email</th>
            <th className="py-2 dark:text-gray-300">Company</th>

          </tr>

        </thead>

        <tbody>

          {filteredUsers.map((user) => (

            <tr
              key={user.id}
              className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >

              <td className="py-2 dark:text-white">
                {user.name}
              </td>

              <td className="py-2 dark:text-white">
                {user.email}
              </td>

              <td className="py-2 dark:text-white">
                {user.company?.name}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}