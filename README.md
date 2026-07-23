# Hamza Shafi - Developer Portfolio

A modern, responsive developer portfolio with integrated Vercel Speed Insights for performance monitoring.

## Features

- Clean, modern design with custom cursor effects
- Responsive layout for all devices
- Integrated Vercel Speed Insights for performance tracking
- Interactive project filtering
- Smooth scroll animations

## Vercel Speed Insights Setup

This portfolio includes Vercel Speed Insights to track and monitor real-world performance metrics.

### Prerequisites

1. Deploy this site to Vercel
2. Enable Speed Insights in your Vercel dashboard:
   - Go to your project on Vercel
   - Navigate to Speed Insights in the sidebar
   - Click "Enable" to activate Speed Insights

### How It Works

The Speed Insights integration uses:
- `@vercel/speed-insights` package (installed via npm)
- A bundled script (`dist/speed-insights.bundle.js`) that injects the tracking code
- Automatic performance data collection once deployed to Vercel

### Building

To rebuild the Speed Insights bundle:

```bash
npm install
npm run build
```

This will:
1. Install the `@vercel/speed-insights` package
2. Bundle the Speed Insights initialization script
3. Output the bundle to `dist/speed-insights.bundle.js`

### Deployment

When deploying to Vercel:
1. The Speed Insights script will automatically connect to Vercel's infrastructure
2. Performance metrics will be collected from real user visits
3. View the data in your Vercel dashboard under Speed Insights

### Local Development

The Speed Insights script runs in debug mode during local development. Production tracking only occurs when deployed to Vercel.

## Project Structure

```
.
├── index.html                          # Main portfolio page
├── speed-insights.js                   # Speed Insights initialization
├── dist/
│   └── speed-insights.bundle.js       # Bundled Speed Insights script
├── package.json                        # npm dependencies
└── README.md                          # This file
```

## License

ISC
