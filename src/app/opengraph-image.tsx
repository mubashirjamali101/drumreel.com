import { ImageResponse } from "next/og";

export const alt = "Drumreel — Describe the walkthrough. Get the MP4.";
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
          background: "#0c0c0d",
          color: "#f3eee6",
          padding: "72px",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, letterSpacing: 2 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              border: "2px solid #c9925a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c9925a",
              fontSize: 18,
            }}
          >
            ●
          </div>
          DRUMREEL
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 980 }}>
            Superintelligence for product demos.
          </div>
          <div style={{ fontSize: 28, color: "#8a8a86", maxWidth: 820 }}>
            Write a prompt. Get a walkthrough of your live product — host and voice included, if you want.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#c9925a" }}>drumreel.com · 50 credits after you verify email</div>
      </div>
    ),
    { ...size },
  );
}
