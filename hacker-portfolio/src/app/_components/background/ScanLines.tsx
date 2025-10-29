"use client";

export default function ScanLines() {
  return (
    <div className="scanlines" aria-hidden>
      <style jsx>{`
        .scanlines {
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 5;
          background: repeating-linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0px,
            rgba(0, 0, 0, 0) 2px,
            rgba(0, 255, 0, 0.06) 2px,
            rgba(0, 255, 0, 0.06) 3px
          );
          mix-blend-mode: screen;
          animation: flicker 1s linear infinite;
        }

        @keyframes flicker {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}


