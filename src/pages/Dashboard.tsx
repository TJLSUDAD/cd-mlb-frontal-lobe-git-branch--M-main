import { useState } from 'react';
import { FaChartLine, FaUsers, FaBaseballBall, FaTrophy } from 'react-icons/fa';

// Dashboard stats data
const statsData = [
  { id: 1, name: 'Win Percentage', value: '62.4%', change: '+2.1%', icon: <FaChartLine /> },
  { id: 2, name: 'Player Performance', value: '86.3', change: '+4.5%', icon: <FaUsers /> },
  { id: 3, name: 'Team Runs', value: '418', change: '-1.2%', icon: <FaBaseballBall /> },
  { id: 4, name: 'League Standing', value: '3rd', change: '+2', icon: <FaTrophy /> },
];

// Recent game data
const recentGames = [
  { id: 1, team: 'New York Yankees', opponent: 'Boston Red Sox', result: 'W', score: '6-3' },
  { id: 2, team: 'New York Yankees', opponent: 'Tampa Bay Rays', result: 'L', score: '2-5' },
  { id: 3, team: 'New York Yankees', opponent: 'Toronto Blue Jays', result: 'W', score: '8-4' },
  { id: 4, team: 'New York Yankees', opponent: 'Baltimore Orioles', result: 'W', score: '3-1' },
];

// League standings data
const leagueStandings = [
  { id: 1, team: 'Tampa Bay Rays', wins: 42, losses: 20, pct: 0.677 },
  { id: 2, team: 'Boston Red Sox', wins: 39, losses: 23, pct: 0.629 },
  { id: 3, team: 'New York Yankees', wins: 35, losses: 27, pct: 0.565 },
  { id: 4, team: 'Toronto Blue Jays', wins: 33, losses: 29, pct: 0.532 },
  { id: 5, team: 'Baltimore Orioles', wins: 22, losses: 40, pct: 0.355 },
];

const Dashboard = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      {/* Page title */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text-primary">MLB Frontal Lobe Dashboard</h1>

        {/* Time period selector with Firebase Studio styling */}
        <div className="flex items-center space-x-2 rounded-md bg-background-primary p-1">
          <button className="rounded px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary">
            Daily
          </button>
          <button className="rounded bg-gradient-primary px-3 py-1.5 text-sm font-medium text-black">
            Weekly
          </button>
          <button className="rounded px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary">
            Monthly
          </button>
        </div>
      </div>

      {/* Stats overview */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="rounded-lg bg-background-primary p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-accent-blue bg-opacity-20 p-3 text-accent-blue">
                {stat.icon}
              </span>
              <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-text-primary">{stat.value}</h3>
            <p className="text-sm text-text-secondary">{stat.name}</p>
          </div>
        ))}
      </div>

      {/* Main content area with tabs */}
      <div className="rounded-lg bg-background-primary shadow-sm">
        {/* Tabs */}
        <div className="flex border-b border-gray-800 px-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`border-b-2 px-4 py-3 text-sm font-medium ${
              activeTab === 'overview'
                ? 'border-accent-orange text-text-primary'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            Team Overview
          </button>
          <button
            onClick={() => setActiveTab('predictions')}
            className={`border-b-2 px-4 py-3 text-sm font-medium ${
              activeTab === 'predictions'
                ? 'border-accent-orange text-text-primary'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            Predictions
          </button>
          <button
            onClick={() => setActiveTab('standings')}
            className={`border-b-2 px-4 py-3 text-sm font-medium ${
              activeTab === 'standings'
                ? 'border-accent-orange text-text-primary'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            Standings
          </button>
        </div>

        {/* Tab content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div>
              <h3 className="mb-4 text-lg font-medium text-text-primary">Recent Games</h3>
              <div className="overflow-hidden rounded-lg border border-gray-800">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead className="bg-background-secondary">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                        Opponent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                        Result
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 bg-background-primary">
                    {recentGames.map((game) => (
                      <tr key={game.id}>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                          {game.opponent}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm">
                          <span
                            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              game.result === 'W'
                                ? 'bg-green-900 bg-opacity-20 text-green-500'
                                : 'bg-red-900 bg-opacity-20 text-red-500'
                            }`}
                          >
                            {game.result}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                          {game.score}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'predictions' && (
            <div>
              <h3 className="mb-4 text-lg font-medium text-text-primary">Win Probability</h3>
              <div className="mb-6 rounded-lg bg-background-secondary p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-text-primary">Next Game Prediction</h4>
                    <p className="text-xs text-text-secondary">vs Boston Red Sox - June 17, 2025</p>
                  </div>
                  <span className="text-lg font-bold text-text-primary">64.2%</span>
                </div>

                {/* Prediction progress bar using Firebase Studio gradient */}
                <div className="h-2 overflow-hidden rounded-full bg-background-primary">
                  <div className="h-full w-[64%] bg-gradient-primary" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded bg-background-primary p-3">
                    <p className="text-xs text-text-secondary">Batting Advantage</p>
                    <p className="text-sm font-medium text-text-primary">+1.2 runs</p>
                  </div>
                  <div className="rounded bg-background-primary p-3">
                    <p className="text-xs text-text-secondary">Pitching Advantage</p>
                    <p className="text-sm font-medium text-text-primary">+0.8 ERA</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-gradient-primary rounded-md px-4 py-2 text-sm font-medium text-black hover:opacity-90">
                  Run Detailed Prediction
                </button>
              </div>
            </div>
          )}

          {activeTab === 'standings' && (
            <div>
              <h3 className="mb-4 text-lg font-medium text-text-primary">AL East Standings</h3>
              <div className="overflow-hidden rounded-lg border border-gray-800">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead className="bg-background-secondary">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                        Team
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                        W
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                        L
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                        PCT
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 bg-background-primary">
                    {leagueStandings.map((team) => (
                      <tr key={team.id}>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-primary">
                          {team.team}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                          {team.wins}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                          {team.losses}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                          {team.pct.toFixed(3)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
