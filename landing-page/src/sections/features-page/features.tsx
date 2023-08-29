import { SectionsTitle } from "../../components/sections-title/sections-title";
import { Card } from "./card/card";
import { mockData } from "./fetch mock/mock-data";
import styles from "./features.module.css";

type CardData = {
  id: string;
  img: string;
  name: string;
  description: string;
}

export const Features = () => {
  return (
    <section className={styles.blockFeatures}>
      <SectionsTitle title="Features" number={"01"} />
      <div className={styles.description}>
        <h3>About StarRunner</h3>
        <p>
          The StarRunner Blockchain Ecosystem isn't a mere playground; it's a
          living, evolving entity that adapts to the desires and creativity of
          its players.
        </p>
      </div>
      <section className={styles.cards}>
        {mockData.map((cards: CardData) => (
          <Card id={cards.id} img={cards.img} name={cards.name} description={cards.description}/>
          ))}
      </section>
    </section>
  );
};
