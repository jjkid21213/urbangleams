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
          background: "#f3eee4",
          color: "#16130f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>Urban Gleams</div>
        <div style={{ fontSize: 28, marginTop: 16 }}>
          Custom websites. justinbusiness124@gmail.com · 0494300150
        </div>
      </div>
    ),
    size,
  );
}
