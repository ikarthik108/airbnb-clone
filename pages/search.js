import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "@/components/InfoCard";

function Search({ searchData }) {
  const router = useRouter();
  const { location, noOfGuests, startDate, endDate, noOfDays } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const interval = `${formattedStartDate} - ${formattedEndDate}`;
  console.log("s data", searchData);

  return (
    <div>
      <Header placeHolder={`${location}|${interval}|${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {searchData.length} stays -{interval} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="cursor-pointer px-4 py-2 border rounded-full hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Cancellation Flexibility
            </p>
            <p className="cursor-pointer px-4 py-2 border rounded-full hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Type Of Place
            </p>
            <p className="cursor-pointer px-4 py-2 border rounded-full hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Price
            </p>
            <p className="cursor-pointer px-4 py-2 border rounded-full hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Rooms & Beds
            </p>
            <p className="cursor-pointer px-4 py-2 border rounded-full hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              More filters
            </p>
          </div>
          <div>
            {searchData.map(
              ({ url, address, name, type, rating, price, images }) => (
                <InfoCard
                  img={images[0]}
                  location={address}
                  title={name}
                  description={type}
                  star={rating}
                  price={price.rate}
                  total={price.total}
                  noOfDays={noOfDays}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  //https://mocki.io/v1/51e32c16-f7c6-48e2-8373-cab8ce1a403d
  // const options = {
  //   method: "GET",
  //   // headers: {
  //   //   "X-RapidAPI-Key": "0dfbd70528msha3ccc736fcbd2dcp16cf3ejsn94b419125a09",
  //   //   "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
  //   // },
  // };
  const searchData = await fetch(
    "https://mocki.io/v1/34d475dc-e637-496e-8f89-07c960f242ee"
  ).then((res) => res.json());

  return {
    props: {
      searchData: searchData,
    },
  };
}

export default Search;
