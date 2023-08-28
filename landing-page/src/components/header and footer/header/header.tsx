import styles from "./header.module.css";
import logo from "./logo.png";
import arrow from "./arrow.png";
import { StatusBar } from "./../status-bar/stutus-bar";

export const Header = () => {
  return (
    <>
    <StatusBar/>
    <header className={styles.header}>
      <div >
        <a href="https://dexola.com/" target="_blank">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div>
        <button >
          <img className={styles.arrowImg} src={arrow} alt="logo" />
          <span className={styles.buttonName}>
          Join Now
          </span>
        </button>
      </div>
    </header>
    </>
  );
};
