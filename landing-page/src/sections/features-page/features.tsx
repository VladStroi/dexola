import { SectionsTitle } from "../../components/sections-title/sections-title";
import styles from "./features.module.css";

export const Features = () => {
  return (
    <section className={styles.blockFeatures}>
      <SectionsTitle title="Features" number={"01"} />
      <div className={styles.discription}>
        <h3>About StarRunner</h3>
        <p>
          The StarRunner Blockchain Ecosystem isn't a mere playground; it's a
          living, evolving entity that adapts to the desires and creativity of
          its players.
        </p>
      </div>
    </section>
  );
};
