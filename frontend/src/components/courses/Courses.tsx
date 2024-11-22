import { 
  BookOpenIcon, 
  ClockIcon, 
  UserGroupIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const courses = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    description: 'Learn HTML, CSS, and JavaScript basics to start your web development journey.',
    instructor: 'Sarah Wilson',
    duration: '8 weeks',
    level: 'Beginner',
    students: 234,
    rating: 4.8,
    image: 'web-dev'
  },
  {
    id: 2,
    title: 'React Mastery',
    description: 'Master React.js and build modern web applications from scratch.',
    instructor: 'David Chen',
    duration: '10 weeks',
    level: 'Intermediate',
    students: 189,
    rating: 4.9,
    image: 'react'
  },
  {
    id: 3,
    title: 'UI/UX Design Principles',
    description: 'Create beautiful and user-friendly interfaces with modern design principles.',
    instructor: 'Emma Thompson',
    duration: '6 weeks',
    level: 'All Levels',
    students: 156,
    rating: 4.7,
    image: 'design'
  }
];

export default function Courses() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Featured Courses</h1>
        <div className="flex space-x-3">
          <button className="btn-primary">All Courses</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} 
               className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <BookOpenIcon className="h-20 w-20 text-blue-600" />
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{course.description}</p>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <UserGroupIcon className="h-5 w-5 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-600">{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium">{course.rating}</span>
                </div>
              </div>
              
              <div className="mt-4 flex items-center text-sm text-gray-600">
                <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                {course.duration}
                <span className="mx-2">•</span>
                <span>{course.level}</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600">{course.students} students</span>
                <button className="btn-primary">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Course Categories */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Popular Categories</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {['Web Development', 'Design', 'Business', 'Marketing'].map((category) => (
            <button
              key={category}
              className="p-4 text-center bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-gray-900 font-medium">{category}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
