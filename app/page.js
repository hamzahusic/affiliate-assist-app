import About from "@/components/About";
import AffiliateGame from "@/components/AffiliateGame";
import Benefits from "@/components/Benefits";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Benefits/>
      <AffiliateGame/>
      <About/>
      <Pricing/>
    </>
  );
}
