import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { colors, styles, chartColors } from "@/lib/theme";

const mockData = Array.from({ length: 30 }, (_, i) => {
  const day = i + 1;
  const base = 180 + Math.sin(i / 4) * 8 + i * 0.6;
  return {
    day: `Day ${day}`,
    historical: i < 20 ? Math.round(base + (Math.random() - 0.5) * 4) : null,
    lstm: i >= 18 ? Math.round(base + (Math.random() - 0.5) * 6 + 2) : null,
    gru: i >= 18 ? Math.round(base + (Math.random() - 0.5) * 6 - 1) : null,
  };
});

const modelMetrics = [
  { model: "LSTM", rmse: "2.41", mae: "1.87", mape: "1.32%" },
  { model: "GRU", rmse: "2.78", mae: "2.12", mape: "1.59%" },
];

export default function Forecast() {
  return (
    <div className="px-6 py-12" style={styles.page}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={styles.eyebrow}
            >
              Results
            </p>
            <h1
              className="text-3xl font-bold"
              style={{ color: colors.textPrimary }}
            >
              Forecast
            </h1>
            <p className="text-sm mt-2" style={{ color: colors.textMuted }}>
              AAPL · 30-day horizon · Comparing{" "}
              <span style={{ color: colors.purpleLight }}>LSTM</span> and{" "}
              <span style={{ color: colors.purpleLight }}>GRU</span>
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="p-6 rounded-xl mb-8" style={styles.card}>
          <h2
            className="text-sm font-semibold mb-4"
            style={{ color: colors.textPrimary }}
          >
            Historical vs Predicted Price
          </h2>
          <ResponsiveContainer width="100%" height={360}>
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis
                dataKey="day"
                stroke={chartColors.axis}
                fontSize={11}
                interval={3}
              />
              <YAxis
                stroke={chartColors.axis}
                fontSize={11}
                domain={["auto", "auto"]}
              />
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
              <Line
                type="monotone"
                dataKey="historical"
                name="Historical"
                stroke={chartColors.primary}
                strokeWidth={2}
                dot={false}
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="lstm"
                name="LSTM Predicted"
                stroke={chartColors.secondary}
                strokeWidth={2}
                strokeDasharray="5 4"
                dot={false}
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="gru"
                name="GRU Predicted"
                stroke={chartColors.palette[2]}
                strokeWidth={2}
                strokeDasharray="2 3"
                dot={false}
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Metrics — side by side per model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modelMetrics.map((m) => (
            <div key={m.model} className="p-6 rounded-xl" style={styles.card}>
              <h2
                className="text-sm font-semibold mb-4"
                style={{ color: colors.textPrimary }}
              >
                {m.model} Accuracy
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["RMSE", m.rmse],
                  ["MAE", m.mae],
                  ["MAPE", m.mape],
                ].map(([label, val]) => (
                  <div
                    key={label}
                    className="p-3 rounded-lg"
                    style={styles.statTile}
                  >
                    <div
                      className="text-xs mb-1"
                      style={{ color: colors.textMuted }}
                    >
                      {label}
                    </div>
                    <div
                      className="text-lg font-bold"
                      style={{ color: colors.textPrimary }}
                    >
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}