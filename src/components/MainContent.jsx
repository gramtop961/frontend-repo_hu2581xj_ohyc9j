export default function MainContent() {
  return (
    <main className="relative py-16 bg-white">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-fuchsia-100/60 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Why BuddyBudget?
          </h2>
          <p className="mt-3 text-gray-600">
            Keep money convos light. Share expenses without awkwardness and cheer each other on toward goals.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            title="Fair by default"
            desc="Automatically split any bill with custom ratios or percentages in a tap."
            color="from-violet-500 to-fuchsia-500"
          />
          <InfoCard
            title="Settle up fast"
            desc="See who owes what at a glance and settle with clear, friendly summaries."
            color="from-cyan-500 to-blue-500"
          />
          <InfoCard
            title="Goals together"
            desc="Create shared savings goals and unlock playful celebrations for milestones."
            color="from-amber-500 to-pink-500"
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="#download"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 text-white font-semibold shadow hover:shadow-md"
          >
            Get started free
          </a>
          <p className="mt-2 text-sm text-gray-500">No ads. Cancel anytime.</p>
        </div>
      </div>
    </main>
  );
}

function InfoCard({ title, desc, color }) {
  return (
    <div className="relative rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className={`absolute -top-4 -right-4 h-16 w-16 rounded-full blur-2xl opacity-50 bg-gradient-to-tr ${color}`} />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
