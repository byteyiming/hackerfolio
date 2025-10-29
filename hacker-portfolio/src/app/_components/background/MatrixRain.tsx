"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const characters = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charArray = characters.split("");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const fontSize = 16;
    const charVerticalSpacing = 4; // Vertical spacing between characters
    const charHorizontalSpacing = 3; // Horizontal spacing between columns
    const columnSpacing = fontSize + charHorizontalSpacing; // Spacing between columns
    let columns = Math.floor(width / columnSpacing);
    const rowHeight = fontSize + charVerticalSpacing; // Vertical spacing between characters
    
    // Generate a full row string for each column, with occasional blanks for spacing
    const generateRow = (): string => {
      const len = 15 + Math.floor(Math.random() * 20); // 15-35 chars per row
      const blankProbability = 0.45; // 45% chance to insert a blank (more sparse)
      return Array.from({ length: len }, () => (
        Math.random() < blankProbability ? " " : charArray[Math.floor(Math.random() * charArray.length)]
      )).join("");
    };
    
    // Per-column: vertical position (px), speed (px per step), and full row string
    // Make speeds vary significantly (0.5 to 5.0) and add spacing in initial positions
    let rows: Array<{ y: number; speed: number; text: string }> = Array.from({ length: columns }, (_, i) => {
      const totalRowHeight = (15 + Math.floor(Math.random() * 20)) * rowHeight;
      return {
        y: -totalRowHeight - Math.random() * height - (i % 3) * 200, // Spaced out, but ensure some visible
        speed: 0.5 + Math.random() * 4.5, // Much wider speed range: 0.5 to 5.0
        text: generateRow(),
      };
    });

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / columnSpacing);
      rows = Array.from({ length: columns }, (_, i) => {
        if (rows[i]) return rows[i];
        const totalRowHeight = (15 + Math.floor(Math.random() * 20)) * rowHeight;
        return {
          y: -totalRowHeight - Math.random() * height - (i % 3) * 200,
          speed: 0.5 + Math.random() * 4.5,
          text: generateRow()
        };
      });
    };

    window.addEventListener("resize", resize);

    const stepIntervalMs = 10; // lower = faster, higher = slower
    let lastStepAt = 0;

    const draw = (now?: number) => {
      const t = typeof now === "number" ? now : performance.now();
      const shouldStep = t - lastStepAt >= stepIntervalMs;
      // hard clear (no trailing/ghosting)
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#00ff00";
      ctx.font = `${fontSize}px monospace`;
      // ensure no glow/shadow
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";

      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const x = i * columnSpacing;
        // Draw the entire row string character by character vertically
        for (let j = 0; j < row.text.length; j++) {
          const char = row.text[j];
          const y = row.y + j * rowHeight;
          // Only draw if visible on screen
          if (y >= -rowHeight && y <= height + rowHeight) {
            ctx.fillText(char, x, y);
          }
        }

        if (shouldStep) {
          // Move entire row down
          row.y += row.speed;
          
          // If row has completely scrolled off bottom, reset it at the top with spacing
          const totalRowHeight = row.text.length * rowHeight;
          if (row.y > height + totalRowHeight) {
            row.text = generateRow(); // New row content first
            const newTotalRowHeight = row.text.length * rowHeight;
            row.y = -newTotalRowHeight - Math.random() * height - (i % 3) * 200; // Reset with spacing
            row.speed = 0.5 + Math.random() * 4.5; // New speed with wide range
          }
        }
      }

      if (shouldStep) {
        lastStepAt = t;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    // paint initial black background
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);
    draw();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="matrix-container" aria-hidden>
      <canvas ref={canvasRef} />
      <style jsx>{`
        .matrix-container {
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 1;
        }
        canvas {
          width: 100%;
          height: 100%;
          display: block;
        }
      `}</style>
    </div>
  );
}


