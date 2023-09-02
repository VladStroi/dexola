import { SectionsTitle } from "../../components/sections-title/sections-title";
import styles from "./join-us.module.css";
import { RegistrationForm } from "./registration-form";

export const JoinUs = () => {
  return (
    <>
      <section className={styles.blockJoinUs}>
        <SectionsTitle title="Join Us" number={"03"} />
        <article className={styles.description}>
          <h2>Experience the Power of StarRunner</h2>
          <p>
            Join Our Community and Embark on a Journey of Opportunities.
            Discover the full range of our services that cater to your needs.
            We've got you covered with top-notch solutions.
          </p>
        </article>
        <RegistrationForm />
      </section>
    </>
  );
};
