import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="card">
            <h1 className="text-2xl font-bold">Welcome to EduVerse NZ</h1>
            <p className="mt-4">Your learning journey begins here.</p>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
