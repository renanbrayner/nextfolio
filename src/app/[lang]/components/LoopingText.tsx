"use client";

import React, { useEffect, useRef, useState } from "react";

export default function LoopingText() {
  const [offset, setOffset] = useState(0);
  const offsetRef = useRef(offset);

  useEffect(() => {
    const animate = () => {
      // Diminuir offset gradativamente
      offsetRef.current -= 1;

      // Quando atingir -2586, reiniciar para 0
      if (offsetRef.current <= -2586) {
        offsetRef.current = 0;
      }

      // Atualizar o estado com o novo valor de offset
      setOffset(offsetRef.current);

      // Agendar a próxima animação
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
          QUASAR • VUE • STYLED COMPONENTS • NUXT • REACT • NEXT JS • TYPESCRIPT
          • AXIOS • CYPRESS • ZOD • QUASAR • VUE • STYLED COMPONENTS • NUXT •
          REACT • NEXT JS • TYPESCRIPT • AXIOS • CYPRESS • ZOD •{" "}
        </textPath>
      </text>
    </svg>
  );
}
