import Image from "next/image";
import Banner from "./components/Banner";
import PopularProducts from "./components/home/PopularProducts";
import Container from "./components/Container";

export default function Home() {
  return (
    <>

      <Banner />

      <Container>
        <PopularProducts />

      </Container>
    </>
  );
}
