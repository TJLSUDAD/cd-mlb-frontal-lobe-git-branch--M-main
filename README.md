# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# MLB Frontal Lobe - Predictive Modeling Dashboard

MLB Frontal Lobe is a sophisticated analytics dashboard for baseball statistics and predictive modeling, featuring Firebase Studio-inspired dark theme aesthetics for professional data visualization.

![MLB Frontal Lobe Dashboard](https://example.com/dashboard-screenshot.png)

## Features

- **Dark Theme Analytics Dashboard**: Sleek, modern interface with the Firebase Studio-inspired dark theme
- **Team Statistics**: Comprehensive team performance data with visual charts
- **Player Statistics**: Detailed player metrics with sortable tables and filtering
- **Predictive Models**: AI-driven predictions for game outcomes and player performance
- **Interactive Data Visualization**: Dynamic charts for data exploration and analysis

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Package Manager**: Bun
- **Charts & Visualization**: Recharts
- **Icons**: React Icons

## Color Scheme

- **Primary Background**: #121212
- **Secondary Background**: #1E1E1E
- **Primary Text**: #FFFFFF
- **Secondary Text**: #BDBDBD
- **Accent Colors**:
  - Blue: #64B5F6
  - Orange-Gold Gradient: #FF8C00 to #FFD700

## Getting Started

### Prerequisites

- Node.js 16+
- Bun (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mlb-frontal-lobe.git
   cd mlb-frontal-lobe
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Configure environment:
   ```bash
   cp .env.example .env
   ```

4. Start development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view the dashboard

## Project Structure

```
mlb-frontal-lobe/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components
│   │   ├── Dashboard.tsx   # Main dashboard page
│   │   ├── TeamStats.tsx   # Team statistics page
│   │   ├── PlayerStats.tsx # Player statistics page
│   │   └── PredictiveModels.tsx # Prediction models page
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── .env                   # Environment configuration
├── .env.example           # Environment example template
├── tailwind.config.js     # TailwindCSS configuration
└── vite.config.ts         # Vite configuration
```

## Deployment

The application can be deployed as a static site to services like Netlify, Vercel, or GitHub Pages:

```bash
bun run build
```

The build output will be in the `dist` directory.

## License

MIT

## Acknowledgements

- MLB for providing inspiration for the baseball statistics application
- Firebase Studio for the design inspiration

---

Developed with ❤️ for baseball analytics enthusiasts
