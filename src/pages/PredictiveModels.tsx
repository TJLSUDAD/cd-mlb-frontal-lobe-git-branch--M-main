import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample prediction data
const predictionData = [
  { date: 'Apr', actual: 0.542, predicted: 0.512, accuracy: 94 },
  { date: 'May', actual: 0.567, predicted: 0.589, accuracy: 96 },
  { date: 'Jun', actual: 0.612, predicted: 0.601, accuracy: 98 },
  { date: 'Jul', actual: 0.583, predicted: 0.573, accuracy: 97 },
  { date: 'Aug', actual: 0.559, predicted: 0.542, accuracy: 95 },
  { date: 'Sep', actual: 0.578, predicted: 0.567, accuracy: 96 },
];

// Sample upcoming game predictions
const upcomingGames = [
  {
    id: 1,
    homeTeam: 'New York Yankees',
    awayTeam: 'Boston Red Sox',
    homeWinProb: 0.62,
    predictedScore: '5-3',
    predictedTotal: 8.0,
  },
  {
    id: 2,
    homeTeam: 'Los Angeles Dodgers',
    awayTeam: 'San Francisco Giants',
    homeWinProb: 0.58,
    predictedScore: '4-3',
    predictedTotal: 7.0,
  },
  {
    id: 3,
    homeTeam: 'Chicago Cubs',
    awayTeam: 'St. Louis Cardinals',
    homeWinProb: 0.46,
    predictedScore: '3-4',
    predictedTotal: 7.0,
  },
  {
    id: 4,
    homeTeam: 'Houston Astros',
    awayTeam: 'Texas Rangers',
    homeWinProb: 0.53,
    predictedScore: '6-5',
    predictedTotal: 11.0,
  },
];

const PredictiveModels = () => {
  // State for active model
  const [activeModel, setActiveModel] = useState<'team' | 'player' | 'game'>('team');

  return (
    <div className="space-y-6">
      {/* Page title */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text-primary">Predictive Models</h1>

        <button className="rounded bg-gradient-primary px-4 py-2 text-sm font-medium text-black hover:opacity-90">
          Run New Prediction
        </button>
      </div>

      {/* Model selection tabs */}
      <div className="flex border-b border-gray-800">
        <button
          onClick={() => setActiveModel('team')}
          className={`border-b-2 px-4 py-3 text-sm font-medium ${
            activeModel === 'team'
              ? 'border-accent-orange text-text-primary'
              : 'border-transparent text-text-secondary hover:text-text-primary'
          }`}
        >
          Team Win Predictions
        </button>
        <button
          onClick={() => setActiveModel('player')}
          className={`border-b-2 px-4 py-3 text-sm font-medium ${
            activeModel === 'player'
              ? 'border-accent-orange text-text-primary'
              : 'border-transparent text-text-secondary hover:text-text-primary'
          }`}
        >
          Player Performance
        </button>
        <button
          onClick={() => setActiveModel('game')}
          className={`border-b-2 px-4 py-3 text-sm font-medium ${
            activeModel === 'game'
              ? 'border-accent-orange text-text-primary'
              : 'border-transparent text-text-secondary hover:text-text-primary'
          }`}
        >
          Game Outcomes
        </button>
      </div>

      {/* Model performance chart */}
      <div className="rounded-lg bg-background-primary p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-text-primary">
          Model Performance
        </h2>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <span className="mr-2 text-2xl font-bold text-accent-blue">96.7%</span>
              <span className="rounded-full bg-green-900 bg-opacity-20 px-2 py-1 text-xs font-medium text-green-500">
                +2.3%
              </span>
            </div>
            <p className="text-sm text-text-secondary">Average prediction accuracy</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-full bg-accent-orange" />
              <span className="text-sm text-text-secondary">Actual</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-full bg-accent-blue" />
              <span className="text-sm text-text-secondary">Predicted</span>
            </div>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={predictionData}
              margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="date" stroke="#BDBDBD" />
              <YAxis
                tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                domain={[0.4, 0.7]}
                stroke="#BDBDBD"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1E1E1E',
                  border: '1px solid #333',
                  color: '#FFFFFF',
                }}
                formatter={(value) => [`${(Number(value) * 100).toFixed(1)}%`]}
              />
              <Legend wrapperStyle={{ color: '#BDBDBD' }} />
              <Line
                type="monotone"
                dataKey="actual"
                name="Actual Win Rate"
                stroke="#FF8C00"
                strokeWidth={2}
                dot={{ r: 4, fill: '#FF8C00' }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="predicted"
                name="Predicted Win Rate"
                stroke="#64B5F6"
                strokeWidth={2}
                dot={{ r: 4, fill: '#64B5F6' }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Upcoming games predictions */}
      <div className="rounded-lg bg-background-primary shadow-sm">
        <div className="border-b border-gray-800 px-6 py-4">
          <h2 className="text-lg font-semibold text-text-primary">
            Upcoming Game Predictions
          </h2>
        </div>
        <div className="divide-y divide-gray-800">
          {upcomingGames.map((game) => (
            <div key={game.id} className="flex flex-col p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="mb-1 flex items-center">
                  <span className="font-medium text-text-primary">{game.homeTeam}</span>
                  <span className="mx-2 text-text-secondary">vs</span>
                  <span className="font-medium text-text-primary">{game.awayTeam}</span>
                </div>
                <p className="text-sm text-text-secondary">Predicted Score: {game.predictedScore}</p>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-center text-xl font-bold text-text-primary">
                    {(game.homeWinProb * 100).toFixed(1)}%
                  </p>
                  <p className="text-center text-xs text-text-secondary">Win Probability</p>
                </div>
                <div>
                  <p className="text-center text-xl font-bold text-text-primary">
                    {game.predictedTotal}
                  </p>
                  <p className="text-center text-xs text-text-secondary">Total Runs</p>
                </div>
                <button
                  className="rounded border border-accent-blue px-3 py-1 text-sm font-medium text-accent-blue hover:bg-accent-blue hover:bg-opacity-10"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 px-6 py-4 text-center">
          <button className="rounded bg-background-secondary px-4 py-2 text-sm font-medium text-text-primary hover:bg-opacity-80">
            View All Predictions
          </button>
        </div>
      </div>

      {/* Model information */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-background-primary p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-medium text-text-primary">Model Inputs</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>• Historical Game Outcomes</li>
            <li>• Player Performance Metrics</li>
            <li>• Team Statistics</li>
            <li>• Weather Conditions</li>
            <li>• Park Factors</li>
          </ul>
        </div>
        <div className="rounded-lg bg-background-primary p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-medium text-text-primary">Algorithm</h3>
          <p className="mb-4 text-sm text-text-secondary">
            Uses ensemble learning combining gradient boosting and neural networks for optimal prediction accuracy.
          </p>
          <div className="flex items-center">
            <div className="h-2 flex-1 rounded-full bg-background-secondary overflow-hidden">
              <div className="h-full w-[82%] bg-gradient-primary" />
            </div>
            <span className="ml-3 text-sm font-medium text-text-primary">82%</span>
          </div>
          <p className="mt-1 text-xs text-text-secondary">Feature Importance: Player Stats</p>
        </div>
        <div className="rounded-lg bg-background-primary p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-medium text-text-primary">Last Updated</h3>
          <p className="mb-2 text-sm text-text-secondary">
            Model was last trained 2 hours ago with the latest game data.
          </p>
          <button className="rounded bg-background-secondary px-3 py-1.5 text-xs font-medium text-text-primary hover:bg-opacity-80">
            View Training Log
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictiveModels;
