import styles from './styles/home.module.css';

const Home = () => (
  <>
    <p className={styles.greeting}>
      Welcome to Math Magician!!
    </p>
    <p className={styles.description}>
      The excitement is yet to come buddy ;)
      <br />
      First of all, this is
      a single page application built with React and it is intended for
      anyone who enjoys working with numbers and calculations.
      I also featured a quote page that generates a random quote every time
      the page reloads.
      <br />
      <br />
      <span className={styles.start}>Let get started 3...2..1</span>
    </p>
  </>
);

export default Home;
