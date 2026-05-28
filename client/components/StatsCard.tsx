interface Props {
  title: string;
  value: string;
  color: string;
}

export default function StatsCard({
  title,
  value,
  color,
}: Props) {

  return (

    <div className="bg-white p-8 rounded-3xl shadow-lg">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className={`text-5xl font-extrabold mt-5 ${color}`}>
        {value}
      </p>

    </div>

  );
}