// src/components/NavBar.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const NavBar = () => {
  const handleButtonClick = (route) => {
    window.location.href = route; // Redirigir a la ruta al hacer clic en el botón
  };

  return (
    <header className={styles.Nav}>
      <div className={styles['navbar-buttons']}>
        <div className={styles['nav-button1']} onClick={() => handleButtonClick('/')}>
          Home
        </div>
        <div className={styles['nav-button2']} onClick={() => handleButtonClick('/ComoTeAyudamos')}>
          Como te ayudamos
        </div>
        <div className={styles['nav-button3']} onClick={() => handleButtonClick('/Reprocann')}>
          Reprocann
        </div>
        <div className={styles['nav-button4']} onClick={() => handleButtonClick('/ClubCannabico')}>
          Club Cannabico
        </div>
        <div className={styles['nav-button5']} onClick={() => handleButtonClick('/Nosotros')}>
          Nosotros
        </div>
        <div className={styles['nav-button6']} onClick={() => handleButtonClick('/Contacto')}>
          Contacto
        </div>
      </div>
    </header>
  );
};

export default NavBar;

