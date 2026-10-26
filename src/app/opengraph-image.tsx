import { ImageResponse } from "next/og";

export const alt = "Gonzalo Rosano - Frontend developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#0a0a0b",
          color: "#f4f4f5",
        }}
      >
        <div
          style={{
            width: 56,
            height: 6,
            background: "#ff0066",
            marginBottom: 40,
          }}
        />
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
          Gonzalo Rosano
        </div>
        <div style={{ fontSize: 44, color: "#a1a1aa", marginTop: 16 }}>
          Frontend developer
        </div>
        <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 56 }}>
          grosano.vercel.app
        </div>
      </div>
    ),
    size
  );
}
