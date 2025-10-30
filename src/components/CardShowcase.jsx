import { motion, useMotionValue, useTransform } from "framer-motion";

function GlassCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [ -100, 100 ], [ 12, -12 ]);
  const rotateY = useTransform(x, [ -100, 100 ], [ -12, 12 ]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx);
    y.set(dy);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className="relative h-56 w-96 max-w-full rounded-3xl p-[2px] bg-gradient-to-br from-white/60 to-white/10 backdrop-blur-lg border border-white/40 dark:border-white/10 shadow-2xl"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/25 via-purple-500/20 to-pink-500/25 blur-2xl" />
      <div className="relative z-10 h-full w-full rounded-3xl bg-white/30 dark:bg-neutral-900/30 backdrop-blur-xl overflow-hidden">
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 0, transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.2) 0, transparent 40%)" }} />
        <div className="relative p-6 h-full flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-white/90">
            <span className="px-2 py-1 rounded-md bg-white/20 backdrop-blur border border-white/30">Glasmint</span>
            <span className="tracking-widest">VISA</span>
          </div>
          <div>
            <div className="text-white/90 text-xl tracking-widest">5243  5678  9012  3456</div>
            <div className="mt-2 text-white/70 text-xs">VALID THRU 12/28</div>
          </div>
          <div className="flex items-center justify-between text-white/90">
            <div>
              <div className="text-xs opacity-70">CARDHOLDER</div>
              <div className="font-semibold">ALEX MORGAN</div>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CardShowcase() {
  return (
    <section id="cards" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              A card that feels alive
            </h3>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              Glide through daily spending with tactile, responsive 3D motion. A glass‑morphic design that looks premium and responds to your touch.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition"
              >
                Apply in minutes
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold border border-neutral-300/70 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur hover:bg-white/80 dark:hover:bg-white/10 transition text-neutral-900 dark:text-white"
              >
                See how it works
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-8 -z-0 pointer-events-none">
                <div className="h-full w-full rounded-[2rem] bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 blur-3xl" />
              </div>
              <GlassCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
