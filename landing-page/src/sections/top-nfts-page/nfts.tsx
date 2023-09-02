import { useState, useEffect } from 'react';
import { SectionsTitle } from "../../components/sections-title/sections-title";
import styles from "./nfts.module.css";
import { WebTable } from './tables/web-tablet';
import { MobileTable } from './tables/mobile';

export const TopNFTs = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const componentToRender = windowWidth < 480 ? <MobileTable/> : <WebTable/>;


  return (
    <section className={styles.blockNFTs}>
      <SectionsTitle title="Top NFTs" number={"02"} />
      {componentToRender}
    </section>
  );
};
