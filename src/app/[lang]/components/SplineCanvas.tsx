"use client";
import Spline from "@splinetool/react-spline";

export default function SplineCanvas({ className }: { className: string }) {
  return (
    <div className={className}>
      <Spline
        onStart={() => console.log("foo")}
        scene="https://prod.spline.design/zSwC5uXGJe1OG2AN/scene.splinecode"
      />
    </div>
  );
}
