import { MdDashboard, MdPeople, MdQueryStats, MdModelTraining } from 'react-icons/md';

// Define the props interface
interface SidebarProps {
  currentPage: 'dashboard' | 'team-stats' | 'player-stats' | 'predictive-models';
  setCurrentPage: (page: 'dashboard' | 'team-stats' | 'player-stats' | 'predictive-models') => void;
}

const Sidebar = ({ currentPage, setCurrentPage }: SidebarProps) => {
  // Array of navigation items
  const navItems = [
    {
      id: 'dashboard' as const,
      label: 'Dashboard',
      icon: <MdDashboard size={20} />,
    },
    {
      id: 'team-stats' as const,
      label: 'Team Stats',
      icon: <MdQueryStats size={20} />,
    },
    {
      id: 'player-stats' as const,
      label: 'Player Stats',
      icon: <MdPeople size={20} />,
    },
    {
      id: 'predictive-models' as const,
      label: 'Predictive Models',
      icon: <MdModelTraining size={20} />,
    },
  ];

  return (
    // Sidebar with primary background color from Firebase Studio
    <aside className="h-full w-64 flex-shrink-0 border-r border-gray-800 bg-background-primary">
      {/* Navigation menu */}
      <nav className="flex h-full flex-col py-6">
        <div className="px-4 pb-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Main Navigation
          </h2>
        </div>

        {/* Navigation items */}
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setCurrentPage(item.id)}
                className={`flex w-full items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-gradient-primary text-black' // Active item with gradient from Firebase Studio
                    : 'text-text-secondary hover:bg-background-secondary hover:text-text-primary'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Separator */}
        <div className="my-4 border-t border-gray-800" />

        {/* Secondary navigation section */}
        <div className="px-4 pb-2">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Analysis Tools
          </h2>
        </div>

        {/* Secondary navigation items */}
        <ul className="space-y-1 px-2">
          {/* These items don't trigger page changes but demonstrate the design */}
          <li>
            <button className="flex w-full items-center rounded-md px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-background-secondary hover:text-text-primary">
              <span className="mr-3">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </span>
              Statistical Analysis
            </button>
          </li>
          <li>
            <button className="flex w-full items-center rounded-md px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-background-secondary hover:text-text-primary">
              <span className="mr-3">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              Performance Metrics
            </button>
          </li>
        </ul>

        {/* Accent area at bottom with blue from Firebase Studio */}
        <div className="mt-auto px-4 pb-6">
          <div className="rounded-md bg-background-secondary p-4">
            <div className="mb-2 flex items-center">
              <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent-blue bg-opacity-20">
                <svg
                  className="h-4 w-4 text-accent-blue"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="text-sm font-medium text-accent-blue">Data Updated</h3>
            </div>
            <p className="text-xs text-text-secondary">
              Latest MLB statistics were updated 24 minutes ago
            </p>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
