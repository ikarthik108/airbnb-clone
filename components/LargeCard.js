import Image from "next/legacy/image";

function LargeCard({ img, desc, title, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{desc}</p>
        <button className="bg-gray-900 text-white text-sm rounded-lg px-4 py-2 mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
