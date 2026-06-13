import { useState } from "react";
import StockSelector from "@/components/StockSelector";
import ForecastHorizonSelector, {
  type ForecastHorizon,
} from "@/components/ForecastHorizonSelector";
import type { ForecastModel } from "@/components/ModelSelector";
import { colors, styles } from "@/lib/theme";

interface ModelResult {
  model: ForecastModel;
  rmse: number;
  mae: number;
  mape: number;
  expectedReturn: number;
  volatility: number;
  sharpe: number;
}

function mockResult(model: ForecastModel): ModelResult {
  return {
    model,
    rmse: model === "LSTM" ? 2.41 : 2.78,
    mae: model === "LSTM" ? 1.87 : 2.12,
    mape: model === "LSTM" ? 1.32 : 1.59,
    expectedReturn: model === "LSTM" ? 12.4 : 11.1,
    volatility: model === "LSTM" ? 18.7 : 17.9,
    sharpe: model === "LSTM" ? 1.42 : 1.31,
  };
}

export default function Dashboard() {
  const [selectedStocks, setSelectedStocks] = useState<string[]>([
    "AAPL",
    "MSFT",
  ]);
  const [horizon, setHorizon] = useState<ForecastHorizon>(30);
  const [generated, setGenerated] = useState(false);
  const [chosenModel, setChosenModel] = useState<ForecastModel | null>(null);
  const [optimized, setOptimized] = useState(false);

  const results: ModelResult[] = [mockResult("LSTM"), mockResult("GRU")];

  const handleGenerate = () => {
    setGenerated(true);
    setChosenModel(null);
    setOptimized(false);
  };

  return (
    <div className="px-6 py-12" style={styles.page}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-1"
            style={styles.eyebrow}
          >
            Workspace
          </p>
          <h1
            className="text-3xl font-bold"
            style={{ color: colors.textPrimary }}
          >
            Dashboard
          </h1>
          <p className="text-sm mt-2" style={{ color: colors.textMuted }}>
            Configure your forecast. Both LSTM and GRU run together so you can
            compare results before choosing one for portfolio optimization.
          </p>
        </div>

        {/* Configuration */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 p-6 rounded-xl" style={styles.card}>
            <StockSelector
              selected={selectedStocks}
              onChange={setSelectedStocks}
            />
          </div>
          <div className="p-6 rounded-xl" style={styles.card}>
            <ForecastHorizonSelector selected={horizon} onChange={setHorizon} />
          </div>
        </div>

        {/* Generate */}
        <div
          className="p-6 rounded-xl flex items-center justify-between mb-8"
          style={styles.card}
        >
          <div>
            <h2
              className="text-sm font-semibold mb-1"
              style={{ color: colors.textPrimary }}
            >
              Run Forecast
            </h2>
            <p className="text-xs" style={{ color: colors.textMuted }}>
              {selectedStocks.length} stocks · {horizon}-day horizon · LSTM
              &amp; GRU run together
            </p>
          </div>
          <button
            onClick={handleGenerate}
            disabled={selectedStocks.length === 0}
            className="px-6 py-3 rounded-lg text-sm font-semibold disabled:opacity-40 transition-all"
            style={styles.buttonPrimary}
          >
            Generate Forecast
          </button>
        </div>

        {generated && (
          <>
            {/* Step 1: side-by-side model results */}
            <div className="mb-4">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-1"
                style={styles.eyebrow}
              >
                Step 1
              </p>
              <h2
                className="text-xl font-bold mb-1"
                style={{ color: colors.textPrimary }}
              >
                Compare Model Results
              </h2>
              <p className="text-sm" style={{ color: colors.textMuted }}>
                Review forecast accuracy and resulting portfolio metrics for
                each model.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {results.map((r) => {
                const isChosen = chosenModel === r.model;
                return (
                  <div
                    key={r.model}
                    className="p-6 rounded-xl"
                    style={isChosen ? styles.cardSelected : styles.card}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3
                          className="text-lg font-bold"
                          style={{ color: colors.textPrimary }}
                        >
                          {r.model}
                        </h3>
                        <p
                          className="text-xs"
                          style={{ color: colors.textMuted }}
                        >
                          {r.model === "LSTM"
                            ? "Long Short-Term Memory"
                            : "Gated Recurrent Unit"}
                        </p>
                      </div>
                      {isChosen && (
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={styles.pillActive}
                        >
                          Selected
                        </span>
                      )}
                    </div>

                    {/* Forecast accuracy */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[
                        ["RMSE", r.rmse],
                        ["MAE", r.mae],
                        ["MAPE", `${r.mape}%`],
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
                            className="text-base font-semibold"
                            style={{ color: colors.textPrimary }}
                          >
                            {val}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Resulting portfolio metrics */}
                    <p
                      className="text-xs font-semibold mb-2"
                      style={{ color: colors.textSecondary }}
                    >
                      If used for portfolio optimization:
                    </p>
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {[
                        ["Expected Return", `${r.expectedReturn}%`],
                        ["Volatility", `${r.volatility}%`],
                        ["Sharpe Ratio", r.sharpe],
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
                            className="text-base font-semibold"
                            style={{ color: colors.textPrimary }}
                          >
                            {val}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setChosenModel(r.model);
                        setOptimized(false);
                      }}
                      className="w-full py-2.5 rounded-lg text-sm font-semibold transition-all"
                      style={
                        isChosen ? styles.buttonPrimary : styles.buttonSecondary
                      }
                    >
                      {isChosen
                        ? "Selected for Optimization"
                        : `Use ${r.model} for Portfolio Optimization`}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Step 2: optimize */}
            <div className="mb-4">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-1"
                style={styles.eyebrow}
              >
                Step 2
              </p>
              <h2
                className="text-xl font-bold mb-1"
                style={{ color: colors.textPrimary }}
              >
                Optimize Portfolio
              </h2>
              <p className="text-sm" style={{ color: colors.textMuted }}>
                Choose a model above, then run portfolio optimization using its
                forecast results.
              </p>
            </div>

            <div
              className="p-6 rounded-xl flex items-center justify-between mb-8"
              style={styles.card}
            >
              <div>
                <h2
                  className="text-sm font-semibold mb-1"
                  style={{ color: colors.textPrimary }}
                >
                  Run Optimization
                </h2>
                <p className="text-xs" style={{ color: colors.textMuted }}>
                  {chosenModel
                    ? `Using ${chosenModel} forecast results · ${selectedStocks.length} stocks · ${horizon}-day horizon`
                    : "Select a model above to continue"}
                </p>
              </div>
              <button
                onClick={() => setOptimized(true)}
                disabled={!chosenModel}
                className="px-6 py-3 rounded-lg text-sm font-semibold disabled:opacity-40 transition-all"
                style={styles.buttonPrimary}
              >
                Optimize Portfolio
              </button>
            </div>

            {optimized && chosenModel && (
              <div className="p-6 rounded-xl" style={styles.card}>
                <h2
                  className="text-sm font-semibold mb-4"
                  style={{ color: colors.textPrimary }}
                >
                  Portfolio Summary — optimized using {chosenModel}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    [
                      "Expected Return",
                      `${mockResult(chosenModel).expectedReturn}%`,
                    ],
                    ["Volatility", `${mockResult(chosenModel).volatility}%`],
                    ["Sharpe Ratio", mockResult(chosenModel).sharpe],
                    ["Assets", `${selectedStocks.length}`],
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
                        className="text-lg font-semibold"
                        style={{ color: colors.textPrimary }}
                      >
                        {val}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-4" style={{ color: colors.textFaint }}>
                  View full allocation breakdown on the Portfolio page.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}