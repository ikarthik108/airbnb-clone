import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";

export default function Home(props) {
  const { exploreData } = props;
  return (
    <div>
      <Head>
        <title>Karthiks AirBnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.id}
                image={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 ">
            {exploreData?.map((item) => (
              <MediumCard
                key={item.key}
                image={item.img}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          desc="Wishlists Curated by Airbnb"
          title="The Greatest Outdoors"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://mocki.io/v1/4ab86696-ba66-4acb-a501-9a473f89aeb8"
  ).then((res) => res.json());

  return {
    props: {
      exploreData: exploreData,
    },
  };
}
