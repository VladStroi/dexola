import arrow from "./../../../components/header and footer/header/arrow.png";
import styles from "./card.module.css";

type CardData = {
  id: string;
  img: string;
  name: string;
  description: string;
};

export const Card = (props: CardData) => {
  return (
    <div className={styles.card} key={props.id}>
      <div className={styles.image}>
        <img src={props.img} alt="Card Image" />
      </div>
      <div className={styles.content}>
        <div className={styles.nameCard}>
          <h3>{props.id}</h3>
          <h2>{props.name}</h2>
        </div>
        <p>{props.description}</p>
      </div>
      <div className={styles.buttonContainer}>
      <button className={styles.button}>
        <img className={styles.arrowImg} src={arrow} alt="logo" />
        <span className={styles.buttonName}>DISCOVER NOW</span>
      </button>
    </div>
    </div>
  );
};
