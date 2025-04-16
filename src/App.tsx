import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import TeamStats from './pages/TeamStats';
import PlayerStats from './pages/PlayerStats';
import PredictiveModels from './pages/PredictiveModels';

// Define the page types
type Page = 'dashboard' | 'team-stats' | 'player-stats' | 'predictive-models';

function App() {
  // State to handle current page
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'team-stats':
        return <TeamStats />;
      case 'player-stats':
        return <PlayerStats />;
      case 'predictive-models':
        return <PredictiveModels />;
      default:
        return <Dashboard />;
    }
  };

  return (
    // Main container with primary background color from Firebase Studio
    <div className="flex h-screen w-full flex-col bg-background-primary text-text-primary">
      {/* Header component */}
      <Header />

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for navigation */}
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Content area with secondary background color from Firebase Studio */}
        <main className="flex-1 overflow-auto bg-background-secondary p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
