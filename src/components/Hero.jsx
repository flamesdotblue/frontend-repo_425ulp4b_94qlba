import Spline from "@splinetool/react-spline";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Scene as background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradients and noise overlay that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80 dark:from-neutral-950/70 dark:via-neutral-950/10 dark:to-neutral-950/80" />
        <div className="absolute -top-24 -left-24 h-[40rem] w-[40rem] bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid md:grid-cols-12 items-center gap-10">
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 dark:bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200 shadow-sm">
            <Sparkles className="h-4 w-4 text-purple-500" />
            Next‑gen fintech card
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">
            Elevate your spending with a glass‑morphic 3D card
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-neutral-700 dark:text-neutral-300">
            Manage money, earn rewards, and experience delightful 3D interactions. Built for modern life—fast, secure, and wonderfully simple.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 active:scale-[0.98] transition"
            >
              Get your card
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold border border-neutral-300/70 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur hover:bg-white/80 dark:hover:bg-white/10 transition text-neutral-900 dark:text-white"
            >
              Explore features
            </a>
          </div>
        </div>
        <div className="md:col-span-5" />
      </div>
    </section>
  );
}
