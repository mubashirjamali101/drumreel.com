import { ImageResponse } from "next/og";

export const alt = "Drumreel. Approved. Ship Friday, filed with the team.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f5f7",
          color: "#1d1d1f",
          padding: "72px",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 1 }}>Drumreel</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 84, lineHeight: 1, maxWidth: 980, fontWeight: 600, letterSpacing: -2 }}>
            Approved.
          </div>
          <div style={{ fontSize: 28, color: "#6e6e73" }}>Ship Friday. Filed with the team.</div>
        </div>
        <div style={{ fontSize: 22, color: "#6e6e73" }}>drumreel.com</div>
      </div>
    ),
    { ...size },
  );
}
