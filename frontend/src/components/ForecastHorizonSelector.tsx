import { colors, styles } from "@/lib/theme";

const HORIZONS = [7, 30, 60, 90] as const;

export type ForecastHorizon = (typeof HORIZONS)[number];

interface ForecastHorizonSelectorProps {
  selected: ForecastHorizon;
  onChange: (horizon: ForecastHorizon) => void;
}

export default function ForecastHorizonSelector({
  selected,
  onChange,
}: ForecastHorizonSelectorProps) {
  return (
    <div>
      <h2
        className="text-sm font-semibold mb-4"
        style={{ color: colors.textPrimary }}
      >
        Forecast Horizon
      </h2>
      <div className="flex gap-2 flex-wrap">
        {HORIZONS.map((h) => {
          const active = selected === h;
          return (
            <button
              key={h}
              type="button"
              onClick={() => onChange(h)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={active ? styles.pillActive : styles.pillInactive}
            >
              {h} days
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { HORIZONS };