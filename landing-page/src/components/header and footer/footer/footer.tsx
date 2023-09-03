import styles from "./footer.module.css";
import { fetchIcon } from "./icon/fetch-icon";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.design}>
        <p>Designed by Dexola - 2023</p>
      </section>
      <section className={styles.icons}>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={fetchIcon.instagram} alt="img" />
        </a>
        <a href="https://uk-ua.facebook.com/" target="_blank">
          <img src={fetchIcon.facebook} alt="img" />
        </a>
        <a href="https://discord.com/" target="_blank">
          <img src={fetchIcon.discord} alt="img" />
        </a>
        <a href="https://telegram.org/" target="_blank">
          <img src={fetchIcon.telegram} alt="img" />
        </a>
      </section>
      <section className={styles.copyright}>
        <p>© All rights reserved</p>
      </section>
    </footer>
  );
};
