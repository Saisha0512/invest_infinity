import { colors, styles } from "@/lib/theme";

const AVAILABLE_STOCKS = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA"];

interface StockSelectorProps {
  selected: string[];
  onChange: (stocks: string[]) => void;
  /** Optional cap on how many stocks can be selected at once */
  maxSelection?: number;
}

export default function StockSelector({
  selected,
  onChange,
  maxSelection,
}: StockSelectorProps) {
  const toggleStock = (symbol: string) => {
    if (selected.includes(symbol)) {
      onChange(selected.filter((s) => s !== symbol));
    } else {
      if (maxSelection && selected.length >= maxSelection) return;
      onChange([...selected, symbol]);
    }
  };

  return (
    <div>
      <h2
        className="text-sm font-semibold mb-4"
        style={{ color: colors.textPrimary }}
      >
        Select Stocks
      </h2>
      <div className="flex flex-wrap gap-2">
        {AVAILABLE_STOCKS.map((symbol) => {
          const active = selected.includes(symbol);
          return (
            <button
              key={symbol}
              type="button"
              onClick={() => toggleStock(symbol)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={active ? styles.pillActive : styles.pillInactive}
            >
              {symbol}
            </button>
          );
        })}
      </div>
      {maxSelection && (
        <p className="text-xs mt-2" style={{ color: colors.textMuted }}>
          {selected.length}/{maxSelection} selected
        </p>
      )}
    </div>
  );
}

export { AVAILABLE_STOCKS };