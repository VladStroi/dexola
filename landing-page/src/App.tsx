import "./App.css";
import { Header } from "./components/header and footer/header/header";
import { HeroSection } from "./sections/hero-page/hero";
import { Features } from "./sections/features-page/features";
import { TopNFTs } from "./sections/top-nfts-page/nfts";
import { JoinUs } from "./sections/join-us-page/join-us";
import { Footer } from "./components/header and footer/footer/footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features/>
      <TopNFTs/>
      <JoinUs/>
      <Footer/>
    </>
  );
}

export default App;
