import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/legacy/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  noOfDays,
}) {
  console.log("img", img);
  console.log("n of days", noOfDays);

  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg hover:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 hover:text-xl hover:rounded-lg transition duration-200 ease-out first:border-t">
      {/* left side */}
      <div className="relative h-24 w-40  md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      {/* right side  */}
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className={`h-7 cursor-pointer`} />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 p-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className=" flex items-center">
            <StarIcon className="h-7 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">
              ${price} / night
            </p>
            <p className="text-right font-extralight">
              ${price * Number(noOfDays)} total
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
