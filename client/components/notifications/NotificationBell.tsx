import { FaBell } from "react-icons/fa";

export default function NotificationBell() {

  return (

    <button className="relative">

      <FaBell className="text-2xl text-gray-700" />

      <span
        className="
          absolute
          -top-2
          -right-2
          bg-red-500
          text-white
          text-xs
          w-5
          h-5
          rounded-full
          flex
          items-center
          justify-center
        "
      >
        3
      </span>

    </button>

  );
}