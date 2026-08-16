import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Og() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#080a0d",
          color: "#eef1f4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>Urban Gleams</div>
        <div style={{ fontSize: 28, marginTop: 16, color: "#8b949e" }}>
          Custom websites from $299. justinbusiness124@gmail.com · 0494300150
        </div>
      </div>
    ),
    size,
  );
}
