const MODELS = [
  { value: "LSTM", label: "LSTM", desc: "Long Short-Term Memory" },
  { value: "GRU", label: "GRU", desc: "Gated Recurrent Unit" },
] as const;

export type ForecastModel = (typeof MODELS)[number]["value"];

interface ModelSelectorProps {
  selected: ForecastModel;
  onChange: (model: ForecastModel) => void;
}

export default function ModelSelector({
  selected,
  onChange,
}: ModelSelectorProps) {
  return (
    <div>
      <h2 className="text-sm font-semibold mb-4" style={{ color: "#e2e8f0" }}>
        Forecasting Model
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
              style={
                active
                  ? {
                      background: "rgba(0,212,255,0.12)",
                      color: "#00d4ff",
                      border: "1px solid rgba(0,212,255,0.3)",
                    }
                  : {
                      background: "rgba(255,255,255,0.04)",
                      color: "#94a3b8",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              <div className="font-semibold">{m.label}</div>
              <div
                className="text-xs mt-0.5"
                style={{ color: active ? "#7dd3fc" : "#64748b" }}
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