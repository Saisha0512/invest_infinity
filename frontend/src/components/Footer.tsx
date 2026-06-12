export default function Footer() {
  return (
    <footer
      className="px-6 py-6 mt-auto"
      style={{
        background:
          "linear-gradient(135deg, #0a0f1e 0%, #0d1529 60%, #0a1020 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-center">
        <img
          src="/logo.png"
          alt="Invest Infinity"
          className="h-8 w-auto object-contain"
        />

        <p className="text-sm" style={{ color: "#94a3b8" }}>
          <b>Thank you for visiting Invest Infinity!</b>
        </p>

        <p className="text-xs" style={{ color: "#475569" }}>
          © {new Date().getFullYear()} Invest Infinity. All rights reserved.
        </p>
      </div>
    </footer>
  );
}