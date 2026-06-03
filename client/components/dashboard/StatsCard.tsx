interface Props {
  title: string;
  value: string;
  color?: string;
}

export default function StatsCard({
  title,
  value,
  color = "from-orange-500 to-amber-400",
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

      {/* Background Glow */}
      <div
        className={`absolute top-0 right-0 h-32 w-32 bg-gradient-to-br ${color} opacity-10 rounded-full blur-3xl`}
      />

      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center text-white text-2xl shadow-lg`}
      >
        📊
      </div>

      {/* Content */}
      <div className="mt-6">
        <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">
          {title}
        </p>

        <h2 className="text-5xl font-black text-slate-900 mt-3">
          {value}
        </h2>
      </div>

      {/* Bottom Accent */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${color}`}
      />
    </div>
  );
}