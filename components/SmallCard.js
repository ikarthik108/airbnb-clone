import Image from "next/legacy/image";

function SmallCard({ image, location, distance }) {
  return (
    <div className="flex items-center space-x-4 m-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* Left Side */}
      <div className="relative h-16 w-16">
        <Image src={image} layout="fill" className="rounded-lg" />
      </div>
      {/* Right Side */}
      <div>
        <h3>{location}</h3>
        <h2 className="text-gray-400">{distance}</h2>
      </div>
    </div>
  );
}
export default SmallCard;
