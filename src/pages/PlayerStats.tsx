import { useState } from 'react';

// Sample player stats data
const playerStats = [
  {
    id: 1,
    name: 'Aaron Judge',
    team: 'New York Yankees',
    position: 'RF',
    homeRuns: 28,
    rbi: 67,
    avg: 0.312,
    ops: 1.012,
  },
  {
    id: 2,
    name: 'Shohei Ohtani',
    team: 'Los Angeles Dodgers',
    position: 'DH',
    homeRuns: 32,
    rbi: 72,
    avg: 0.298,
    ops: 1.027,
  },
  {
    id: 3,
    name: 'Juan Soto',
    team: 'New York Yankees',
    position: 'LF',
    homeRuns: 21,
    rbi: 58,
    avg: 0.285,
    ops: 0.938,
  },
  {
    id: 4,
    name: 'Mookie Betts',
    team: 'Los Angeles Dodgers',
    position: 'RF',
    homeRuns: 19,
    rbi: 51,
    avg: 0.301,
    ops: 0.932,
  },
  {
    id: 5,
    name: 'Vladimir Guerrero Jr.',
    team: 'Toronto Blue Jays',
    position: '1B',
    homeRuns: 23,
    rbi: 62,
    avg: 0.306,
    ops: 0.945,
  },
  {
    id: 6,
    name: 'Rafael Devers',
    team: 'Boston Red Sox',
    position: '3B',
    homeRuns: 22,
    rbi: 59,
    avg: 0.290,
    ops: 0.897,
  },
  {
    id: 7,
    name: 'Yordan Alvarez',
    team: 'Houston Astros',
    position: 'DH',
    homeRuns: 26,
    rbi: 64,
    avg: 0.302,
    ops: 0.968,
  },
  {
    id: 8,
    name: 'Freddie Freeman',
    team: 'Los Angeles Dodgers',
    position: '1B',
    homeRuns: 18,
    rbi: 55,
    avg: 0.311,
    ops: 0.925,
  },
];

// Define player filter and sort options
type SortField = 'homeRuns' | 'rbi' | 'avg' | 'ops';
type StatCategory = 'batting' | 'pitching' | 'fielding';

const PlayerStats = () => {
  // State for active stat category and sort field
  const [statCategory, setStatCategory] = useState<StatCategory>('batting');
  const [sortField, setSortField] = useState<SortField>('homeRuns');
  const [searchQuery, setSearchQuery] = useState('');

  // Sort and filter players
  const filteredPlayers = playerStats
    .filter(
      (player) =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.team.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortField === 'avg' || sortField === 'ops') {
        return b[sortField] - a[sortField]; // Higher is better
      }
      return b[sortField] - a[sortField]; // Higher is better for HR and RBI too
    });

  return (
    <div className="space-y-6">
      {/* Page title and search */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-text-primary">Player Statistics</h1>

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search players or teams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded bg-background-primary py-2 pl-3 pr-10 text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-accent-blue"
          />
          <svg
            className="absolute right-3 top-2.5 h-4 w-4 text-text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Stat category tabs */}
      <div className="mb-4 flex border-b border-gray-800">
        <button
          onClick={() => setStatCategory('batting')}
          className={`border-b-2 px-4 py-2 text-sm font-medium ${
            statCategory === 'batting'
              ? 'border-accent-orange text-text-primary'
              : 'border-transparent text-text-secondary hover:text-text-primary'
          }`}
        >
          Batting
        </button>
        <button
          onClick={() => setStatCategory('pitching')}
          className={`border-b-2 px-4 py-2 text-sm font-medium ${
            statCategory === 'pitching'
              ? 'border-accent-orange text-text-primary'
              : 'border-transparent text-text-secondary hover:text-text-primary'
          }`}
        >
          Pitching
        </button>
        <button
          onClick={() => setStatCategory('fielding')}
          className={`border-b-2 px-4 py-2 text-sm font-medium ${
            statCategory === 'fielding'
              ? 'border-accent-orange text-text-primary'
              : 'border-transparent text-text-secondary hover:text-text-primary'
          }`}
        >
          Fielding
        </button>
      </div>

      {/* Player stats table */}
      <div className="overflow-hidden rounded-lg border border-gray-800">
        <table className="min-w-full divide-y divide-gray-800">
          <thead className="bg-background-secondary">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Player
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Team
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Pos
              </th>
              <th
                className={`cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${sortField === 'homeRuns' ? 'text-accent-orange' : 'text-text-secondary'}`}
                onClick={() => setSortField('homeRuns')}
              >
                HR {sortField === 'homeRuns' && '↓'}
              </th>
              <th
                className={`cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${sortField === 'rbi' ? 'text-accent-orange' : 'text-text-secondary'}`}
                onClick={() => setSortField('rbi')}
              >
                RBI {sortField === 'rbi' && '↓'}
              </th>
              <th
                className={`cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${sortField === 'avg' ? 'text-accent-orange' : 'text-text-secondary'}`}
                onClick={() => setSortField('avg')}
              >
                AVG {sortField === 'avg' && '↓'}
              </th>
              <th
                className={`cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${sortField === 'ops' ? 'text-accent-orange' : 'text-text-secondary'}`}
                onClick={() => setSortField('ops')}
              >
                OPS {sortField === 'ops' && '↓'}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 bg-background-primary">
            {filteredPlayers.map((player) => (
              <tr key={player.id}>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-primary">
                  {player.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                  {player.team}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                  {player.position}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                  {player.homeRuns}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                  {player.rbi}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                  {player.avg.toFixed(3)}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-text-primary">
                  {player.ops.toFixed(3)}
                </td>
              </tr>
            ))}
            {filteredPlayers.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-sm text-text-secondary">
                  No players found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Filter and sort controls */}
      <div className="rounded-lg bg-background-primary p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-sm text-text-secondary">Sort by:</span>
            <div className="mt-2 flex space-x-2">
              <button
                onClick={() => setSortField('homeRuns')}
                className={`rounded px-3 py-1.5 text-xs font-medium ${
                  sortField === 'homeRuns'
                    ? 'bg-gradient-primary text-black'
                    : 'bg-background-secondary text-text-secondary hover:text-text-primary'
                }`}
              >
                Home Runs
              </button>
              <button
                onClick={() => setSortField('rbi')}
                className={`rounded px-3 py-1.5 text-xs font-medium ${
                  sortField === 'rbi'
                    ? 'bg-gradient-primary text-black'
                    : 'bg-background-secondary text-text-secondary hover:text-text-primary'
                }`}
              >
                RBI
              </button>
              <button
                onClick={() => setSortField('avg')}
                className={`rounded px-3 py-1.5 text-xs font-medium ${
                  sortField === 'avg'
                    ? 'bg-gradient-primary text-black'
                    : 'bg-background-secondary text-text-secondary hover:text-text-primary'
                }`}
              >
                Batting Avg
              </button>
              <button
                onClick={() => setSortField('ops')}
                className={`rounded px-3 py-1.5 text-xs font-medium ${
                  sortField === 'ops'
                    ? 'bg-gradient-primary text-black'
                    : 'bg-background-secondary text-text-secondary hover:text-text-primary'
                }`}
              >
                OPS
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-text-secondary">Displaying:</span>
            <span className="text-sm font-medium text-text-primary">
              {filteredPlayers.length} of {playerStats.length} players
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
