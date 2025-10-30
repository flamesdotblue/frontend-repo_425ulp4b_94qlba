import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CardShowcase from "./components/CardShowcase";

function CTASection() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur shadow-xl">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 blur-3xl" />
          <div className="p-10 md:p-14 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
              Ready to experience the future of cards?
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              Join thousands moving to a faster, safer, and more beautiful way to pay.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition"
              >
                Open your account
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold border border-neutral-300/70 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur hover:bg-white/80 dark:hover:bg-white/10 transition text-neutral-900 dark:text-white"
              >
                Compare plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/40 dark:border-white/10 py-10 text-center text-sm text-neutral-600 dark:text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Glasmint. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CardShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
