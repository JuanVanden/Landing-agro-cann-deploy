// src/components/NavBar.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const NavBar = () => {
  return (
    <header className={styles.Nav}>
      <div className={styles['navbar-buttons']}>
        <Link href="/">
          <a className={styles['nav-button1']}>Home</a>
        </Link>
        <Link href="/ComoTeAyudamos">
          <a className={styles['nav-button2']}>Como te ayudamos</a>
        </Link>
        <Link href="/Reprocann">
          <a className={styles['nav-button3']}>Reprocann</a>
        </Link>
        <Link href="/ClubCannabico">
          <a className={styles['nav-button4']}>Club Cannabico</a>
        </Link>
        <Link href="/Nosotros">
          <a className={styles['nav-button5']}>Nosotros</a>
        </Link>
        <Link href="/Contacto">
          <a className={styles['nav-button6']}>Contacto</a>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
