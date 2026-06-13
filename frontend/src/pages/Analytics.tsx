import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { colors, styles, chartColors } from "@/lib/theme";

const riskData = [
  { metric: "Volatility", value: 17.2 },
  { metric: "VaR (95%)", value: 4.8 },
  { metric: "CVaR (95%)", value: 6.5 },
  { metric: "Max Drawdown", value: 12.1 },
];

const returnData = Array.from({ length: 12 }, (_, i) => ({
  month: `M${i + 1}`,
  return: Math.round((Math.random() * 8 - 2) * 10) / 10,
}));

const riskMetrics = [
  { label: "Sharpe Ratio", value: "1.58" },
  { label: "Volatility", value: "17.2%" },
  { label: "VaR (95%)", value: "4.8%" },
  { label: "CVaR (95%)", value: "6.5%" },
];

export default function Analytics() {
  return (
    <div className="px-6 py-12" style={styles.page}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-1"
            style={styles.eyebrow}
          >
            Risk & Performance
          </p>
          <h1
            className="text-3xl font-bold"
            style={{ color: colors.textPrimary }}
          >
            Analytics
          </h1>
          <p className="text-sm mt-2" style={{ color: colors.textMuted }}>
            Risk metrics and historical return distribution for your portfolio.
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {riskMetrics.map((m) => (
            <div key={m.label} className="p-5 rounded-xl" style={styles.card}>
              <div className="text-xs mb-2" style={{ color: colors.textMuted }}>
                {m.label}
              </div>
              <div
                className="text-2xl font-bold"
                style={{ color: colors.textPrimary }}
              >
                {m.value}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Risk Chart */}
          <div className="p-6 rounded-xl" style={styles.card}>
            <h2
              className="text-sm font-semibold mb-4"
              style={{ color: colors.textPrimary }}
            >
              Risk Breakdown
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={riskData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={chartColors.grid}
                />
                <XAxis
                  dataKey="metric"
                  stroke={chartColors.axis}
                  fontSize={11}
                />
                <YAxis stroke={chartColors.axis} fontSize={11} />
                <Tooltip
                  contentStyle={{
                    background: chartColors.tooltipBg,
                    border: `1px solid ${chartColors.tooltipBorder}`,
                    borderRadius: 8,
                  }}
                  labelStyle={{ color: colors.textPrimary }}
                />
                <Bar
                  dataKey="value"
                  fill={chartColors.secondary}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Return Chart */}
          <div className="p-6 rounded-xl" style={styles.card}>
            <h2
              className="text-sm font-semibold mb-4"
              style={{ color: colors.textPrimary }}
            >
              Monthly Returns
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={returnData}>
                <defs>
                  <linearGradient
                    id="returnGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor={chartColors.primary}
                      stopOpacity={0.4}
                    />
                    <stop
                      offset="100%"
                      stopColor={chartColors.primary}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={chartColors.grid}
                />
                <XAxis
                  dataKey="month"
                  stroke={chartColors.axis}
                  fontSize={11}
                />
                <YAxis stroke={chartColors.axis} fontSize={11} />
                <Tooltip
                  contentStyle={{
                    background: chartColors.tooltipBg,
                    border: `1px solid ${chartColors.tooltipBorder}`,
                    borderRadius: 8,
                  }}
                  labelStyle={{ color: colors.textPrimary }}
                />
                <Legend
                  wrapperStyle={{ fontSize: 12, color: colors.textSecondary }}
                />
                <Area
                  type="monotone"
                  dataKey="return"
                  name="Return %"
                  stroke={chartColors.primary}
                  fill="url(#returnGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}