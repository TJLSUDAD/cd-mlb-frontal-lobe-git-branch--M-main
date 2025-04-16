import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Team stats data for display
const teamStats = [
  { id: 1, team: 'New York Yankees', avgRuns: 5.2, homeRuns: 95, strikeouts: 486, era: 3.42 },
  { id: 2, team: 'Boston Red Sox', avgRuns: 4.8, homeRuns: 76, strikeouts: 512, era: 3.98 },
  { id: 3, team: 'Tampa Bay Rays', avgRuns: 4.6, homeRuns: 82, strikeouts: 534, era: 3.51 },
  { id: 4, team: 'Toronto Blue Jays', avgRuns: 4.4, homeRuns: 68, strikeouts: 501, era: 3.87 },
  { id: 5, team: 'Baltimore Orioles', avgRuns: 4.0, homeRuns: 62, strikeouts: 486, era: 4.35 },
];

// Chart data for visualization
const chartData = [
  { name: 'Yankees', avgRuns: 5.2, homeRuns: 95, strikeouts: 486 },
  { name: 'Red Sox', avgRuns: 4.8, homeRuns: 76, strikeouts: 512 },
  { name: 'Rays', avgRuns: 4.6, homeRuns: 82, strikeouts: 534 },
  { name: 'Blue Jays', avgRuns: 4.4, homeRuns: 68, strikeouts: 501 },
  { name: 'Orioles', avgRuns: 4.0, homeRuns: 62, strikeouts: 486 },
];

const TeamStats = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('runs');

  return (
    <div className="space-y-6">
      {/* Page title */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text-primary">Team Statistics</h1>

        {/* Time period selector with Firebase Studio styling */}
        <div className="flex items-center space-x-2 rounded-md bg-background-primary p-1">
          <button className="rounded px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary">
            Season
          </button>
          <button className="rounded bg-gradient-primary px-3 py-1.5 text-sm font-medium text-black">
            Last 30 Days
          </button>
          <button className="rounded px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary">
            Last 7 Days
          </button>
        </div>
      </div>

      {/* Stats visualization */}
      <div className="rounded-lg bg-background-primary p-6 shadow-sm">
        <div className="mb-4 flex border-b border-gray-800">
          <button
            onClick={() => setActiveTab('runs')}
            className={`border-b-2 px-4 py-2 text-sm font-medium ${
              activeTab === 'runs'
                ? 'border-accent-orange text-text-primary'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            Runs per Game
          </button>
          <button
            onClick={() => setActiveTab('homers')}
            className={`border-b-2 px-4 py-2 text-sm font-medium ${
              activeTab === 'homers'
                ? 'border-accent-orange text-text-primary'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            Home Runs
          </button>
          <button
            onClick={() => setActiveTab('strikeouts')}
            className={`border-b-2 px-4 py-2 text-sm font-medium ${
              activeTab === 'strikeouts'
                ? 'border-accent-orange text-text-primary'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            Strikeouts
          </button>
        </div>

        {/* Chart area */}
        <div className="h-80 pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#BDBDBD" />
              <YAxis stroke="#BDBDBD" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1E1E1E',
                  border: '1px solid #333',
                  color: '#FFFFFF'
                }}
              />
              <Legend wrapperStyle={{ color: '#BDBDBD' }} />
              {activeTab === 'runs' && (
                <Bar dataKey="avgRuns" name="Runs per Game" fill="#64B5F6" radius={[4, 4, 0, 0]} />
              )}
              {activeTab === 'homers' && (
                <Bar dataKey="homeRuns" name="Home Runs" fill="#FF8C00" radius={[4, 4, 0, 0]} />
              )}
              {activeTab === 'strikeouts' && (
                <Bar dataKey="strikeouts" name="Strikeouts" fill="#FFD700" radius={[4, 4, 0, 0]} />
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Team stats table */}
      <div className="overflow-hidden rounded-lg border border-gray-800">
        <table className="min-w-full divide-y divide-gray-800">
          <thead className="bg-background-secondary">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Team
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Runs/Game
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Home Runs
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Strikeouts
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                ERA
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 bg-background-primary">
            {teamStats.map((team) => (
              <tr key={team.id}>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-primary">
                  {team.team}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                  {team.avgRuns}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                  {team.homeRuns}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                  {team.strikeouts}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                  {team.era}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamStats;
