import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  UserGroupIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

const stats = [
  { id: 1, name: 'Active Courses', value: '3', icon: BookOpenIcon },
  { id: 2, name: 'Hours Learned', value: '28', icon: ClockIcon },
  { id: 3, name: 'Certifications', value: '2', icon: AcademicCapIcon },
  { id: 4, name: 'Study Groups', value: '4', icon: UserGroupIcon },
];

const recentActivity = [
  {
    id: 1,
    title: 'Completed JavaScript Basics',
    time: '2 hours ago',
    icon: BookOpenIcon,
  },
  {
    id: 2,
    title: 'Joined React Study Group',
    time: 'Yesterday',
    icon: UserGroupIcon,
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {item.name}
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {item.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {recentActivity.map((item) => (
                <li key={item.id} className="py-5">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <item.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.time}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
