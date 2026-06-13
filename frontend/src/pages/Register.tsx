import { Link } from "react-router-dom";
import { colors, styles } from "@/lib/theme";

export default function Register() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={styles.page}
    >
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="text-3xl font-bold" style={styles.brandText}>
              ∞
            </span>
          </div>
          <h1
            className="text-2xl font-bold"
            style={{ color: colors.textPrimary }}
          >
            Create Account
          </h1>
          <p className="text-sm mt-1" style={{ color: colors.textMuted }}>
            Save your forecasts and portfolio runs
          </p>
        </div>

        <form className="p-6 rounded-xl space-y-4" style={styles.card}>
          <div>
            <label
              className="block text-xs font-medium mb-1.5"
              style={{ color: colors.textSecondary }}
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full px-3 py-2 rounded-lg text-sm outline-none"
              style={styles.input}
            />
          </div>
          <div>
            <label
              className="block text-xs font-medium mb-1.5"
              style={{ color: colors.textSecondary }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 rounded-lg text-sm outline-none"
              style={styles.input}
            />
          </div>
          <div>
            <label
              className="block text-xs font-medium mb-1.5"
              style={{ color: colors.textSecondary }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 rounded-lg text-sm outline-none"
              style={styles.input}
            />
          </div>
          <div>
            <label
              className="block text-xs font-medium mb-1.5"
              style={{ color: colors.textSecondary }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 rounded-lg text-sm outline-none"
              style={styles.input}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg text-sm font-semibold transition-all"
            style={styles.buttonPrimary}
          >
            Create Account
          </button>

          <p
            className="text-center text-xs"
            style={{ color: colors.textMuted }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium"
              style={{ color: colors.accentText }}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}