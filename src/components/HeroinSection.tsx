import styles from "./styles/HeroinSection.module.css";

function HeroinSection() {
  return (
    <>
      <main className={styles.MainBanner}>
        <section className={styles.sectionBanner}>
          <div className={styles.boxBanner}>
            <h1 className={styles.textBanner}>
              <span className={styles.spanBanner}>Full Stack Developer</span>
              <span className={styles.spanBanner}>David Vasquez</span>
            </h1>
          </div>
        </section>
      </main>
    </>
  );
}

export default HeroinSection;
