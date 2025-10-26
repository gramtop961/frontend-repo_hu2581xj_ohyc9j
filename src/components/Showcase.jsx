export default function Showcase() {
  return (
    <section id="screens" className="py-16 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real app screenshots</h2>
            <p className="mt-2 text-gray-600 max-w-xl">
              Peek at the BuddyBudget experience — clean, colorful, and designed for real life.
            </p>
          </div>
          <a
            href="#download"
            className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white px-5 py-2 text-sm font-semibold shadow hover:shadow-md"
          >
            Try BuddyBudget
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <PhoneFrame src="https://images.unsplash.com/photo-1611162618071-b39a2ec2bc98?q=80&w=1200&auto=format&fit=crop" alt="Group expenses list" />
          <PhoneFrame src="https://images.unsplash.com/photo-1551281044-8b89b2a5cfb2?q=80&w=1200&auto=format&fit=crop" alt="Analytics and charts" />
          <PhoneFrame src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&auto=format&fit=crop" alt="Create a shared goal" />
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ src, alt }) {
  return (
    <div className="relative">
      <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-fuchsia-300/40 blur-2xl" />
      <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-cyan-300/40 blur-2xl" />
      <div className="relative aspect-[9/19] w-full rounded-[2rem] border border-black/10 bg-white shadow-xl overflow-hidden">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
