import styles from "./animation.module.css";

export const Animation = () => {
  
  return (
    <section className={styles.animation}>
      <div className={styles.gadient}></div>
      <div className={styles.content}>
        <h2 className={styles.fadeIn}>Explore Cyberpunk Space Adventures in</h2>
        <h1 className={styles.fadeIn}>StarRunner ecosystem</h1>
      </div>
      
      <div className={styles.ellipse1}></div>
      <div className={styles.ellipse2}></div>
      <div className={styles.ellipse3}></div>
      <div className={styles.ellipse4}></div>
      <div className={styles.ellipse5}></div>
      <div className={styles.ellipse6}></div>
    </section>
  );
};
