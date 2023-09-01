import "./App.css";
import { Header } from "./components/header and footer/header/header";
import { HeroSection } from "./sections/hero-page/hero";
import { Features } from "./sections/features-page/features";
import { Footer } from "./components/header and footer/footer/footer";
import { TopNFTs } from "./sections/top-nfts-page/nfts";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features/>
      <TopNFTs/>
      <Footer/>
    </>
  );
}

export default App;
