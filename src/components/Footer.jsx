import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerStyle}>
      <div className={styles.footerContent}>
        <div className={styles.row}>
          <div className={styles.logoSection}>
            <Image src='/Logo4x.png' className={styles.footerLogo} width={300} height={300} alt="Logo" />
          </div>
       
        </div>
        <column className={styles.column}>
          <div className={styles.columnContent}>
          <p className={styles.contactInfo}>INSTAGRAM</p>
          <p className={styles.contactInfo}>FAQS</p>
            <p className={styles.contactInfo}>CONTACTANOS</p>
            <div>
            <a className={styles.contactEmail} href="mailto:info@tudominio.com">agro.cann.ig@gmail.com</a>
            <Image src='/email.png' className={styles.emailLogo} width={60} height={60} alt="Email Logo" />
            </div>
          </div>
        </column>
      </div>
    </footer>
  );
};

export default Footer;
