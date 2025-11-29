"use strict";
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Designer Yogita
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pre-wedding">Pre-Wedding</Link>
          </li>
          <li>
            <Link href="/maternity">Maternity</Link>
          </li>
          <li>
            <Link href="/baby-gowns">Baby Gowns</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
