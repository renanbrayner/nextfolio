"use client";

import Script from "next/script";

export default function SplineCanvas({ className }: { className: string }) {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.0.38/build/spline-viewer.js"
      />
      <spline-viewer
        class={className}
        id="spline-viewer"
        url="https://prod.spline.design/zSwC5uXGJe1OG2AN/scene.splinecode"
      ></spline-viewer>
    </>
  );
}
