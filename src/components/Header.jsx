export default function Header() {
  return (
    <header className="w-full sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-pink-500 via-violet-500 to-cyan-500 text-white font-bold shadow-md">
              BB
            </span>
            <span className="font-semibold text-lg tracking-tight text-gray-900 group-hover:text-violet-700 transition-colors">
              BuddyBudget
            </span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700" aria-label="Primary">
            <a href="#features" className="hover:text-violet-600 transition-colors">Features</a>
            <a href="#screens" className="hover:text-violet-600 transition-colors">Screenshots</a>
            <a href="#download" className="hover:text-violet-600 transition-colors">Download</a>
          </nav>
          <a
            href="#download"
            className="inline-flex items-center rounded-full bg-gray-900 text-white text-sm font-semibold px-4 py-2 shadow hover:bg-gray-800"
          >
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
}
