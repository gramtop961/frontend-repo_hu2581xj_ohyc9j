export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-100 via-white to-cyan-100 opacity-70" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-200">
              Split. Save. Smile.
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Split expenses and hit goals together — the fun way
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              BuddyBudget makes it effortless for roommates and couples to track shared costs,
              settle up instantly, and cheer each other on to reach savings goals.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3" id="download">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-gray-800"
              >
                Download on the App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-semibold ring-1 ring-gray-300 hover:bg-gray-50"
              >
                Get it on Google Play
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Free to try • No ads • Private by design
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-8 h-56 w-56 rounded-full bg-pink-300/40 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-cyan-300/40 blur-3xl" />
            <div className="relative mx-auto max-w-md">
              <div className="aspect-[9/19] w-full rounded-[2rem] border border-black/10 shadow-xl bg-white overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop"
                  alt="BuddyBudget dashboard showing shared expenses and charts"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="-mt-6 ml-6 aspect-[9/19] w-40 sm:w-48 rounded-[1.5rem] border border-black/10 shadow-lg bg-white overflow-hidden rotate-6">
                <img
                  src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1200&auto=format&fit=crop"
                  alt="Quick add expense screen"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
