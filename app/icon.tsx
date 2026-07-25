import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#142820",
          color: "#f7f3eb",
          fontSize: 28,
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.04em",
        }}
      >
        WR
      </div>
    ),
    size,
  );
}
