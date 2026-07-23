// Vercel Speed Insights initialization
// This script injects the Speed Insights tracking code into the page
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false
});
