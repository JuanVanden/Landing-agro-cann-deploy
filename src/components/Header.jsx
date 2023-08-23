// src/components/Header.jsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/header.module.css'; // Ajusta la ruta según la ubicación de tu archivo header.module.css

const Header = () => {
  return (
    <header className={styles.Header}>
      {/* Coloca los logos en un contenedor flex */}
      <div className={styles.logoContainer}>
        <Image src="/logo-final-white.png" className={styles.logo} width={200} height={200} />

        {/* Agrega una separación entre las imágenes */}
        <div className={styles.separator} />

        {/* Centra el título */}
        <div className={styles.centeredTitle}>
          <Image src="/Titulo500px.png" className={styles.logo} width={640} height={140} />
        </div>
      </div>
    </header>
  );
};

export default Header;
