"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import MatrixRain with SSR disabled to avoid hydration mismatch
const MatrixRain = dynamic(() => import("./MatrixRain"), {
  ssr: false,
  loading: () => null,
});

export default function MatrixRainClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <MatrixRain />;
}

