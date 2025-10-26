export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/5 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {year} BuddyBudget. All rights reserved.</p>
          <nav className="flex items-center gap-5 text-sm text-gray-600" aria-label="Footer">
            <a href="#features" className="hover:text-violet-600 transition-colors">Features</a>
            <a href="#screens" className="hover:text-violet-600 transition-colors">Screenshots</a>
            <a href="#download" className="hover:text-violet-600 transition-colors">Download</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
