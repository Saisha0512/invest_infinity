import { colors, styles } from "@/lib/theme";

export default function Footer() {
  return (
    <footer
      className="px-6 py-6 mt-auto"
      style={{ ...styles.navFooter, borderTop: `1px solid ${colors.border}` }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-center">
        <img
          src="/logo.png"
          alt="Invest Infinity"
          className="h-8 w-auto object-contain"
        />

        <p className="text-sm" style={{ color: colors.textSecondary }}>
          <b>Thank you for visiting Invest Infinity!</b>
        </p>

        <p className="text-xs" style={{ color: colors.textFaint }}>
          © {new Date().getFullYear()} Invest Infinity. All rights reserved.
        </p>
      </div>
    </footer>
  );
}