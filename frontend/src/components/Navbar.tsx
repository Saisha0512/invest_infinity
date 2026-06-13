import { Link, useLocation } from "react-router-dom";
import { colors, styles } from "@/lib/theme";

const links = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/forecast", label: "Forecast" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/analytics", label: "Analytics" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-4 py-2"
      style={{
        ...styles.navFooter,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      {/* Logo — top left */}
      <Link to="/" className="flex items-center -my-1">
        <img
          src="/logo.png"
          alt="Invest Infinity"
          className="h-16 w-auto object-contain"
        />
      </Link>

      {/* Centered pill nav */}
      <div
        className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full absolute left-1/2 -translate-x-1/2"
        style={{
          background: colors.surfaceHover,
          border: `1px solid ${colors.borderStrong}`,
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        }}
      >
        {links.map((l) => {
          const active = pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
              style={
                active ? styles.pillActive : { color: colors.textSecondary }
              }
            >
              {l.label}
            </Link>
          );
        })}
      </div>

      {/* Login button — top right */}
      <Link
        to="/login"
        className="px-4 py-1.5 rounded-lg text-sm font-medium transition-all"
        style={styles.buttonPrimary}
      >
        Login
      </Link>
    </nav>
  );
}