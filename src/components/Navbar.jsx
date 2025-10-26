import { Rocket, Star, Heart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-500 via-violet-500 to-cyan-500 grid place-items-center shadow-md">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-gray-900">BuddyBudget</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-violet-600 transition-colors">Features</a>
          <a href="#screens" className="hover:text-violet-600 transition-colors">Screenshots</a>
          <a href="#download" className="hover:text-violet-600 transition-colors">Download</a>
        </nav>
        <a
          href="#download"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2 text-white text-sm font-semibold shadow hover:shadow-md active:scale-[.99] transition-all"
        >
          <Rocket className="h-4 w-4" /> Get the app
        </a>
      </div>
    </header>
  );
}
