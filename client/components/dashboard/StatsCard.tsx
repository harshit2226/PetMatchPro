interface Props {
  title: string;
  value: string;
}

export default function StatsCard({
  title,
  value,
}: Props) {

  return (

    <div className="bg-white p-8 rounded-3xl shadow-lg">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="text-5xl font-extrabold text-blue-600 mt-5">
        {value}
      </p>

    </div>

  );
}