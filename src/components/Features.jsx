import { Shield, Sparkles, Wallet } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Instant splits",
    desc: "Add an expense once and BuddyBudget splits it fairly for everyone. No spreadsheets, no stress.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Shield,
    title: "Private & secure",
    desc: "Your data stays yours. End-to-end best practices and export whenever you want.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Sparkles,
    title: "Goal cheering",
    desc: "Set shared goals and unlock playful confetti when you hit milestones together!",
    color: "from-amber-500 to-pink-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Built for besties, roomies, and duos
        </h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          Keep money talks light and fair with tools that feel friendly and fun.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
