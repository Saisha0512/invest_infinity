import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { colors, styles, chartColors } from "@/lib/theme";

const allocation = [
  { name: "AAPL", value: 28 },
  { name: "MSFT", value: 24 },
  { name: "GOOGL", value: 18 },
  { name: "NVDA", value: 16 },
  { name: "AMZN", value: 14 },
];

const stats = [
  { label: "Expected Return", value: "13.6%", desc: "Annualized" },
  { label: "Volatility", value: "17.2%", desc: "Annualized std. dev." },
  { label: "Sharpe Ratio", value: "1.58", desc: "Risk-adjusted return" },
];

export default function Portfolio() {
  return (
    <div className="px-6 py-12" style={styles.page}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-1"
            style={styles.eyebrow}
          >
            Allocation
          </p>
          <h1
            className="text-3xl font-bold"
            style={{ color: colors.textPrimary }}
          >
            Portfolio
          </h1>
          <p className="text-sm mt-2" style={{ color: colors.textMuted }}>
            Optimized allocation using Modern Portfolio Theory, based on your
            chosen forecast model.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Allocation Chart */}
          <div className="p-6 rounded-xl" style={styles.card}>
            <h2
              className="text-sm font-semibold mb-4"
              style={{ color: colors.textPrimary }}
            >
              Asset Allocation
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={allocation}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  label={({ name, value }) => `${name} ${value}%`}
                  labelLine={false}
                >
                  {allocation.map((_, i) => (
                    <Cell
                      key={i}
                      fill={chartColors.palette[i % chartColors.palette.length]}
                      stroke="none"
                    />
                  ))}
                </Pie>
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
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Portfolio Stats */}
          <div className="p-6 rounded-xl" style={styles.card}>
            <h2
              className="text-sm font-semibold mb-4"
              style={{ color: colors.textPrimary }}
            >
              Performance Metrics
            </h2>
            <div className="space-y-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between p-4 rounded-lg"
                  style={styles.statTile}
                >
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: colors.textPrimary }}
                    >
                      {s.label}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: colors.textMuted }}
                    >
                      {s.desc}
                    </div>
                  </div>
                  <div
                    className="text-xl font-bold"
                    style={{ color: colors.purpleLight }}
                  >
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs mt-6" style={{ color: colors.textFaint }}>
              Allocation generated from mock optimization run. Replace with live
              MPT engine output.
            </p>
          </div>
        </div>

        {/* Holdings table */}
        <div className="p-6 rounded-xl" style={styles.card}>
          <h2
            className="text-sm font-semibold mb-4"
            style={{ color: colors.textPrimary }}
          >
            Holdings Breakdown
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: `1px solid ${colors.border}` }}>
                  {["Asset", "Weight", "Expected Return", "Volatility"].map(
                    (h) => (
                      <th
                        key={h}
                        className="text-left py-2 px-3 font-medium"
                        style={{ color: colors.textMuted }}
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {allocation.map((a, i) => (
                  <tr
                    key={a.name}
                    style={{ borderBottom: `1px solid ${colors.surface}` }}
                  >
                    <td
                      className="py-3 px-3 font-medium"
                      style={{ color: colors.textPrimary }}
                    >
                      <span
                        className="inline-block w-2 h-2 rounded-full mr-2"
                        style={{
                          background:
                            chartColors.palette[i % chartColors.palette.length],
                        }}
                      />
                      {a.name}
                    </td>
                    <td
                      className="py-3 px-3"
                      style={{ color: colors.textSecondary }}
                    >
                      {a.value}%
                    </td>
                    <td className="py-3 px-3" style={{ color: colors.success }}>
                      {(10 + Math.random() * 10).toFixed(1)}%
                    </td>
                    <td className="py-3 px-3" style={{ color: colors.warning }}>
                      {(15 + Math.random() * 10).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
