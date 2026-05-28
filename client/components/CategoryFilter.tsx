const categories = [
  "All",
  "Dog",
  "Cat",
  "Bird",
  "Rabbit",
];

interface Props {
  selected: string;
  setSelected: (value: string) => void;
}

export default function CategoryFilter({
  selected,
  setSelected,
}: Props) {

  return (

    <div className="flex gap-4 flex-wrap">

      {categories.map((item) => (

        <button
          key={item}
          onClick={() => setSelected(item)}
          className={`px-5 py-2 rounded-xl font-semibold ${
            selected === item
              ? "bg-blue-600 text-white"
              : "bg-white border"
          }`}
        >
          {item}
        </button>

      ))}

    </div>

  );
}