import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/navigation.module.css';

const Navigation = () => (
  <>
    <nav className={styles.nav}>
      <div className={styles.logo}>Math Magicians</div>
      <ul>
        <li className={styles.navList}>
          <Link className={styles.link} to="/">Home</Link>
          <Link className={styles.link} to="calculator">Calculator</Link>
          <Link className={styles.link} to="quote">Quote</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default Navigation;
