import Image from "next/image";
import Banner from "./component/Banner";
import PopularProducts from "./component/home/PopularProducts";

export default function Home() {
  return (
    <>
      <Banner/>
      <PopularProducts/>
    </>
  );
}
