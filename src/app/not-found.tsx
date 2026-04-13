import Link from "next/link";

// Root-level 404 — outside locale scope (rare, but good to have)
export default function RootNotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f9fafb" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <div
            style={{
              fontSize: "6rem",
              fontWeight: 900,
              color: "#111827",
              lineHeight: 1,
              marginBottom: "1rem",
            }}
          >
            4<span style={{ color: "#1d4ed8" }}>0</span>4
          </div>
          <h2 style={{ fontSize: "1.5rem", color: "#374151", marginBottom: "0.5rem" }}>
            Page Not Found
          </h2>
          <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
            This page doesn&apos;t exist.
          </p>
          <Link
            href="/en"
            style={{
              background: "#1d4ed8",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.75rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Go to Homepage
          </Link>
        </div>
      </body>
    </html>
  );
}
