import { CreditCard } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-neutral-900/70 border-b border-white/20 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 grid place-content-center text-white shadow-lg shadow-purple-500/30">
            <CreditCard className="h-5 w-5" />
          </span>
          <span className="text-neutral-900 dark:text-white">Glasmint</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700 dark:text-neutral-200">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#cards" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Cards</a>
          <a href="#cta" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Get Started</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-lg border border-neutral-300/60 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/5 transition-colors"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="inline-flex text-sm font-semibold px-4 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 active:scale-[0.98] transition"
          >
            Open account
          </a>
        </div>
      </div>
    </header>
  );
}
