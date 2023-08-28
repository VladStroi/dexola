import styles from './sections-title.module.css'

export const SectionsTitle = ({ title, number }: { title: string; number: string }) => {
    return (
      <section className={styles.sectionTitle}>
        <h1>{title}</h1>
        <h2>{number}</h2>
      </section>
    );
  }
  
  
  