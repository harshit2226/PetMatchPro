export default function ProfileCard() {

  return (

    <div className="bg-white p-8 rounded-3xl shadow-lg">

      <div className="flex items-center gap-4">

        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="w-20 h-20 rounded-full"
        />

        <div>

          <h2 className="text-2xl font-bold">
            Harshit
          </h2>

          <p className="text-gray-500">
            Pet Lover 🐶
          </p>

        </div>

      </div>

    </div>

  );
}