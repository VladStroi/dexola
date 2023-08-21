import styles from "./header.module.css";
import logo from "./logo.png";
import arrow from "./arrow.png";

export const Header = () => {
  return (
    <header className={styles.header} style={{padding: "15px 120px"}}>
      <div className="">
        <a href="https://dexola.com/" target="_blank">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="">
        <button >
          <img className={styles.arrowImg} src={arrow} alt="logo" />
          <span className={styles.buttonName}>
          Join Now
          </span>
        </button>
      </div>
    </header>
  );
};
