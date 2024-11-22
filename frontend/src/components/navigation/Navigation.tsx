import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600">EduVerse NZ</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                to="/dashboard"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium"
              >
                Dashboard
              </Link>
              <Link
                to="/courses"
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium"
              >
                Courses
              </Link>
              <Link
                to="/resources"
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium"
              >
                Resources
              </Link>
            </div>
          </div>
          
          {/* Right side - Profile button */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="btn-primary">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
