interface Props {
  title: string
  value: string
  trend?: string
}

export default function StatsCard({ title, value, trend }: Props) {

  return (

    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 transition hover:shadow-lg">

      <h2 className="text-gray-500 dark:text-gray-300 text-sm">
        {title}
      </h2>

      <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">
        {value}
      </p>

      {trend && (

        <p className="text-green-500 text-sm mt-2">
          {trend}
        </p>

      )}

    </div>

  )
}