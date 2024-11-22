import { CalendarIcon, UserIcon, StarIcon } from '@heroicons/react/24/outline'

const courses = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript.',
    instructor: 'Sarah Johnson',
    duration: '8 weeks',
    students: 156,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Advanced React Patterns',
    description: 'Master advanced React concepts and design patterns for scalable applications.',
    instructor: 'Michael Chen',
    duration: '6 weeks',
    students: 89,
    rating: 4.9,
  },
  // Add more courses as needed
]

export default function CoursesPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Available Courses</h1>
        <button className="btn-primary">Browse All</button>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="card hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <div className="h-48 bg-blue-100 rounded-t flex items-center justify-center">
                <BookOpenIcon className="h-20 w-20 text-blue-600" aria-hidden="true" />
              </div>
              <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="sr-only">Rating</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{course.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-500">{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-500">{course.duration}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">{course.students} students</div>
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium text-gray-900">{course.rating}</span>
                </div>
              </div>
              <button className="mt-4 w-full btn-primary">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
