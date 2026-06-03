export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-4 text-slate-600 font-medium">
        Loading PetMatchPro...
      </p>
    </div>
  );
}