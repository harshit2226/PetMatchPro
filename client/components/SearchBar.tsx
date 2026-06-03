interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">
      <svg
        className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <input
        type="text"
        placeholder="Search pets by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          pl-14
          pr-5
          py-4
          rounded-2xl
          bg-white
          border
          border-slate-200
          text-black
          text-lg
          placeholder:text-slate-500
          outline-none
          shadow-sm
          transition-all
          duration-300
          focus:border-orange-500
          focus:ring-4
          focus:ring-orange-100
        "
      />
    </div>
  );
}