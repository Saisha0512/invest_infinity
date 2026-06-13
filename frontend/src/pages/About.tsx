import { colors, styles } from "@/lib/theme";

const objectives = [
  "Forecast stock prices using LSTM and GRU deep learning models",
  "Run both models simultaneously and let users compare results before optimization",
  "Generate optimized portfolios using Modern Portfolio Theory",
  "Provide clear risk and performance analytics for any portfolio",
  "Allow usage without an account, with optional history saving",
];

const features = [
  "Multi-stock forecasting with adjustable time horizons",
  "Side-by-side LSTM vs GRU model comparison",
  "User-selected model determines portfolio optimization input",
  "Portfolio allocation and rebalancing suggestions",
  "Risk metrics: Sharpe Ratio, Volatility, VaR, CVaR",
  "Interactive charts powered by Recharts",
  "Optional account for saved forecast and portfolio history",
];

const stack = [
  {
    group: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "ShadCN UI",
      "Recharts",
    ],
  },
  { group: "Modeling", items: ["LSTM", "GRU", "Modern Portfolio Theory"] },
  { group: "Backend", items: ["Python", "FastAPI", "REST APIs"] },
];

const future = [
  "Live market data integration via financial APIs",
  "Transformer-based forecasting models",
  "Backtesting engine for strategy validation",
  "Multi-currency and crypto asset support",
  "Personalized risk-tolerance profiles",
];

export default function About() {
  return (
    <div className="px-6 py-12" style={styles.page}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={styles.eyebrow}
          >
            About the Project
          </p>
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: colors.textPrimary }}
          >
            Invest Infinity
          </h1>
          <p
            className="text-sm leading-relaxed max-w-2xl mx-auto"
            style={{ color: colors.textSecondary }}
          >
            Invest Infinity is an AI-powered platform that combines deep
            learning stock forecasting with Modern Portfolio Theory, giving
            everyday investors institutional-grade tools for forecasting and
            portfolio optimization.
          </p>
        </div>

        {/* Overview */}
        <div className="p-6 rounded-xl mb-8" style={styles.card}>
          <h2
            className="text-sm font-semibold mb-3"
            style={{ color: colors.textPrimary }}
          >
            Project Overview
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            The platform follows a clear pipeline: users select stocks,
            historical data is fetched and preprocessed, and both LSTM and GRU
            models generate forecasts simultaneously. Users compare the two
            models' accuracy and projected portfolio outcomes, then choose one
            model's results to feed into portfolio optimization and risk
            analysis. Results are presented through an interactive visualization
            dashboard.
          </p>
        </div>

        {/* Objectives */}
        <div className="p-6 rounded-xl mb-8" style={styles.card}>
          <h2
            className="text-sm font-semibold mb-4"
            style={{ color: colors.textPrimary }}
          >
            Objectives
          </h2>
          <ul className="space-y-2">
            {objectives.map((o) => (
              <li
                key={o}
                className="flex items-start gap-3 text-sm"
                style={{ color: colors.textSecondary }}
              >
                <span
                  className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: colors.purpleLight }}
                />
                {o}
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="p-6 rounded-xl mb-8" style={styles.card}>
          <h2
            className="text-sm font-semibold mb-4"
            style={{ color: colors.textPrimary }}
          >
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 text-sm p-3 rounded-lg"
                style={{ ...styles.statTile, color: colors.textSecondary }}
              >
                <span
                  className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: colors.purpleLight }}
                />
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="p-6 rounded-xl mb-8" style={styles.card}>
          <h2
            className="text-sm font-semibold mb-4"
            style={{ color: colors.textPrimary }}
          >
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stack.map((s) => (
              <div key={s.group}>
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-2"
                  style={styles.eyebrow}
                >
                  {s.group}
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs"
                      style={{
                        background: colors.accentBg,
                        border: `1px solid ${colors.accentBorder}`,
                        color: colors.textSecondary,
                      }}
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Enhancements */}
        <div className="p-6 rounded-xl" style={styles.card}>
          <h2
            className="text-sm font-semibold mb-4"
            style={{ color: colors.textPrimary }}
          >
            Future Enhancements
          </h2>
          <ul className="space-y-2">
            {future.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 text-sm"
                style={{ color: colors.textSecondary }}
              >
                <span
                  className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: colors.purpleLight }}
                />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}