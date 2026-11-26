import { Users, Award, Wallet, Globe2 } from "lucide-react";

const stats = [
  { icon: Users, value: "200+", label: "Students Placed" },
  { icon: Award, value: "100%", label: "Visa Success" },
  { icon: Wallet, value: "€8,200", label: "DSU Stipend" },
  { icon: Globe2, value: "10+", label: "Countries" },
];

export default function StatsSection() {
  return (
    <section
      id="impact"
      className="relative border-y border-blue-100 bg-white/85 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-blue-800">
              Our Track Record
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-blue-100">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="mb-2 flex items-center justify-center gap-1.5 text-blue-600">
                <Icon size={18} />
                <span className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
                  {value}
                </span>
              </div>
              <div className="text-xs font-semibold text-blue-600 sm:text-sm">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
