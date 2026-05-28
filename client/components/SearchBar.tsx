interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {

  return (

    <input
      type="text"
      placeholder="Search pets..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none focus:border-blue-600"
    />

  );
}
