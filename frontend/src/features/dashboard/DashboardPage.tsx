import { AcademicCapIcon, BookOpenIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const stats = [
  { name: 'Enrolled Courses', stat: '12', icon: BookOpenIcon },
  { name: 'Completed Modules', stat: '48', icon: AcademicCapIcon },
  { name: 'Study Groups', stat: '4', icon: UserGroupIcon },
  { name: 'Progress Rate', stat: '87%', icon: ChartBarIcon },
]

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <item.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                  <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
