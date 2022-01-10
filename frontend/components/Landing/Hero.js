import React from 'react';
import styles from '@/styles/Hero.module.scss';
export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.topContainer}>
          <h1>Living Italian</h1>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.description}>
            <p>
              Adore Remo is offering fabously fresh, modern, authentic italian
              cooking. Fast and light lunches.
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Book a table</button>

            <span>&#8594;</span>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src="/images/hero.png" alt="chef cooking" />
      </div>
    </div>
  );
}