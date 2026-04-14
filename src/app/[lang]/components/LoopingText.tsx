"use client";

import React, { useEffect, useRef, useState } from "react";

export default function LoopingText() {
  const [offset, setOffset] = useState(0);
  const offsetRef = useRef(offset);

  useEffect(() => {
    const animate = () => {
      offsetRef.current -= 1;
      // mais é pra esquerda
      if (offsetRef.current <= -2315) {
        offsetRef.current = 0;
      }
      setOffset(offsetRef.current);
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <svg
      className="full scale-125 select-none text-4xl tracking-wider"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <defs>
        <path
          id="curve"
          fillOpacity="0"
          d="M0,32L48,69.3C96,107,192,181,288,197.3C384,213,480,171,576,133.3C672,96,768,64,864,85.3C960,107,1056,181,1152,197.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </defs>
      <text>
        <textPath fill="#f8fafc" href="#curve" startOffset={offset}>
          DOCKER • QUASAR • VUE • NUXT • REACT • NEXT JS • TYPESCRIPT • .NET
          • AXIOS • MONGODB • POSTGRESQL • CYPRESS • ZOD • DOCKER • QUASAR • VUE • NUXT •
          REACT • NEXT JS • TYPESCRIPT • .NET • AXIOS • MONGODB • POSTGRESQL• CYPRESS • ZOD • DOCKER • QUASAR
        </textPath>
      </text>
    </svg>
  );
}
