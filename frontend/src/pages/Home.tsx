import { Link } from "react-router-dom";
import { colors, styles } from "@/lib/theme";

const features = [
  {
    icon: "📈",
    title: "LSTM & GRU Forecasting",
    desc: "Deep learning models trained on historical price data to predict future stock movements with high accuracy.",
  },
  {
    icon: "⚖️",
    title: "Portfolio Optimization",
    desc: "Modern Portfolio Theory to find the optimal asset allocation that maximizes returns for a given risk level.",
  },
  {
    icon: "🛡️",
    title: "Risk Analysis",
    desc: "Comprehensive risk metrics including VaR, CVaR, Sharpe Ratio, and volatility breakdowns.",
  },
  {
    icon: "📊",
    title: "Interactive Charts",
    desc: "Real-time visualizations of forecasts, allocations, and performance comparisons in one dashboard.",
  },
  {
    icon: "🔍",
    title: "Model Comparison",
    desc: "Compare LSTM vs GRU outputs side-by-side using RMSE, MAE, and MAPE metrics.",
  },
  {
    icon: "💾",
    title: "Save & Revisit",
    desc: "Create an account to save forecast runs and portfolio sessions for future reference.",
  },
];

const workflow = [
  {
    step: "01",
    label: "Select Stocks",
    desc: "Pick from AAPL, MSFT, GOOGL and more",
  },
  {
    step: "02",
    label: "Generate Forecasts",
    desc: "LSTM and GRU run together",
  },
  {
    step: "03",
    label: "Compare Results",
    desc: "Review accuracy and projected metrics",
  },
  {
    step: "04",
    label: "Choose a Model",
    desc: "Pick which model's results to use",
  },
  {
    step: "05",
    label: "Optimize Portfolio",
    desc: "MPT-based allocation for the chosen model",
  },
  {
    step: "06",
    label: "Analyze Risk",
    desc: "Full risk metrics and performance report",
  },
];

const techStack = [
  { name: "Python", role: "Backend & ML" },
  { name: "LSTM / GRU", role: "Forecasting" },
  { name: "React", role: "Frontend" },
  { name: "FastAPI", role: "REST API" },
  { name: "Recharts", role: "Visualizations" },
  { name: "Tailwind CSS", role: "Styling" },
];

export default function Home() {
  return (
    <div style={styles.page}>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 600,
              height: 600,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${colors.accentBg} 0%, transparent 70%)`,
            }}
          />
        </div>

        <div
          className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium"
          style={{
            borderColor: colors.accentBorder,
            color: colors.accentText,
            background: colors.accentBg,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: colors.cyan }}
          />
          AI-Powered Investment Intelligence
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
          style={{ lineHeight: 1.1 }}
        >
          <span style={{ color: colors.textPrimary }}>Forecast Smarter.</span>{" "}
          <br />
          <span style={styles.brandText}>Invest Better.</span>
        </h1>

        <p
          className="text-lg max-w-2xl mb-10"
          style={{ color: colors.textSecondary }}
        >
          Invest Infinity combines deep learning stock forecasting with Modern
          Portfolio Theory to help you make data-driven investment decisions —
          no finance degree required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/dashboard"
            className="px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
            style={styles.buttonPrimary}
          >
            Get Started Free
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
            style={styles.buttonSecondary}
          >
            Learn More
          </Link>
        </div>

        {/* Mini stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          {[
            ["6+", "Stock Symbols"],
            ["2", "DL Models"],
            ["4", "Time Horizons"],
          ].map(([val, label]) => (
            <div key={label}>
              <div
                className="text-3xl font-bold"
                style={{ color: colors.accentText }}
              >
                {val}
              </div>
              <div className="text-xs mt-1" style={{ color: colors.textMuted }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={styles.eyebrow}
          >
            How It Works
          </p>
          <h2
            className="text-3xl font-bold"
            style={{ color: colors.textPrimary }}
          >
            From Data to Decision in 6 Steps
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {workflow.map((w, i) => (
            <div
              key={w.step}
              className="relative flex flex-col items-center text-center p-4 rounded-xl"
              style={styles.card}
            >
              {i < workflow.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 right-0 translate-x-1/2 text-xs"
                  style={{ color: colors.border }}
                >
                  →
                </div>
              )}
              <div
                className="text-xs font-mono font-bold mb-2"
                style={{ color: colors.accentText }}
              >
                {w.step}
              </div>
              <div
                className="text-sm font-semibold mb-1"
                style={{ color: colors.textPrimary }}
              >
                {w.label}
              </div>
              <div className="text-xs" style={{ color: colors.textMuted }}>
                {w.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        className="px-6 py-20"
        style={{ background: "rgba(0,0,0,0.15)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: colors.purpleLight }}
            >
              Features
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ color: colors.textPrimary }}
            >
              Everything You Need
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-xl transition-all duration-200"
                style={styles.card}
              >
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3
                  className="text-sm font-semibold mb-2"
                  style={{ color: colors.textPrimary }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={styles.eyebrow}
          >
            Built With
          </p>
          <h2
            className="text-3xl font-bold"
            style={{ color: colors.textPrimary }}
          >
            Technology Stack
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((t) => (
            <div
              key={t.name}
              className="px-5 py-3 rounded-lg text-center"
              style={{
                background: colors.accentBg,
                border: `1px solid ${colors.accentBorder}`,
              }}
            >
              <div
                className="text-sm font-semibold"
                style={{ color: colors.textPrimary }}
              >
                {t.name}
              </div>
              <div
                className="text-xs mt-0.5"
                style={{ color: colors.textMuted }}
              >
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div
          className="max-w-2xl mx-auto p-12 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${colors.accentBg}, ${colors.selectedBg})`,
            border: `1px solid ${colors.selectedBorder}`,
          }}
        >
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: colors.textPrimary }}
          >
            Ready to Invest Smarter?
          </h2>
          <p className="text-sm mb-8" style={{ color: colors.textSecondary }}>
            No account required. Start forecasting stocks and optimizing your
            portfolio right now.
          </p>
          <Link
            to="/dashboard"
            className="inline-block px-10 py-3 rounded-lg font-semibold text-sm transition-all"
            style={styles.buttonPrimary}
          >
            Open Dashboard
          </Link>
        </div>
      </section>
    </div>
  );
}