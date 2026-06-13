import { colors, styles } from "@/lib/theme";

const MODELS = [
  { value: "LSTM", label: "LSTM", desc: "Long Short-Term Memory" },
  { value: "GRU", label: "GRU", desc: "Gated Recurrent Unit" },
] as const;

export type ForecastModel = (typeof MODELS)[number]["value"];

interface ModelSelectorProps {
  selected: ForecastModel;
  onChange: (model: ForecastModel) => void;
  /** Optional label override, e.g. for the optimization-step picker */
  title?: string;
}

export default function ModelSelector({
  selected,
  onChange,
  title = "Forecasting Model",
}: ModelSelectorProps) {
  return (
    <div>
      <h2
        className="text-sm font-semibold mb-4"
        style={{ color: colors.textPrimary }}
      >
        {title}
      </h2>
      <div className="flex gap-2">
        {MODELS.map((m) => {
          const active = selected === m.value;
          return (
            <button
              key={m.value}
              type="button"
              onClick={() => onChange(m.value)}
              className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-left transition-all"
              style={active ? styles.pillActive : styles.pillInactive}
            >
              <div className="font-semibold">{m.label}</div>
              <div
                className="text-xs mt-0.5"
                style={{
                  color: active ? colors.selectedText : colors.textMuted,
                }}
              >
                {m.desc}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { MODELS };