import { Shield, Zap, Gift, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Bank‑grade security",
    desc: "Advanced encryption, biometric lock, and instant freeze to protect every transaction.",
  },
  {
    icon: Zap,
    title: "Lightning fast",
    desc: "Real‑time notifications, instant transfers, and smooth 3D interactions throughout.",
  },
  {
    icon: Gift,
    title: "Rewards that matter",
    desc: "Earn cashback on what you actually buy—streaming, travel, and daily essentials.",
  },
  {
    icon: Globe,
    title: "Built for travel",
    desc: "Use your card worldwide with great FX rates and smart spend insights on the go.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Designed for everyday brilliance
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            A minimalist card with powerful features. Everything you need, nothing you don’t.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6 shadow-sm hover:shadow-md hover:shadow-purple-500/10 transition overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl group-hover:scale-110 transition pointer-events-none" />
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white grid place-content-center shadow-md shadow-purple-500/30">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-neutral-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700/90 dark:text-neutral-300/90">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
