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
    <div className="flex flex-wrap gap-3">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setSelected(item)}
          className={`
            px-6
            py-3
            rounded-2xl
            font-semibold
            transition-all
            duration-300
            border
            ${
              selected === item
                ? `
                  bg-gradient-to-r
                  from-orange-500
                  to-amber-400
                  text-white
                  border-transparent
                  shadow-lg
                  scale-105
                `
                : `
                  bg-white
                  text-slate-800
                  border-slate-200
                  hover:border-orange-300
                  hover:text-orange-500
                  hover:shadow-md
                `
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
}