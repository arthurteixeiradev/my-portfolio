"use client";

import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[#0a1020]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, #0f172a 0%, #0a1020 40%, #0c2a3a 80%, #0a1020 100%)",
            backgroundSize: "200% 200%",
            animation: "smooth-shift 25s ease-in-out infinite alternate",
          }}
        ></div>

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 40% 40%, rgba(34, 211, 238, 0.15), transparent 70%)`,
            animation: "gentle-pulse 18s ease-in-out infinite",
          }}
        ></div>

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 60% 60%, rgba(34, 211, 238, 0.1), transparent 70%)`,
            animation: "gentle-pulse 22s ease-in-out infinite reverse",
          }}
        ></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center text-white">
        <h1
          className={cn(
            "text-5xl md:text-6xl font-bold tracking-tight",
            "leading-tight"
          )}
        >
          Hi! I'm Arthur Teixeira
        </h1>
      </div>

      <style jsx global>{`
        @keyframes smooth-shift {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        @keyframes gentle-pulse {
          0% {
            opacity: 0.1;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.1;
            transform: scale(0.95);
          }
        }
      `}</style>
    </section>
  );
};
