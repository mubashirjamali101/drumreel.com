import { ImageResponse } from "next/og";

export const alt = "Drumreel. You describe the walkthrough. We record the screen.";
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
          background: "#050505",
          color: "#f5f5f4",
          padding: "72px",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 1 }}>Drumreel</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 56, lineHeight: 1.1, maxWidth: 980, fontWeight: 500 }}>
            You describe the walkthrough. Drumreel records the screen.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#8a8a86" }}>drumreel.com</div>
      </div>
    ),
    { ...size },
  );
}
