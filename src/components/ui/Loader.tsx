"use client";

import React, { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000); // Loader fades out slightly before the 2.2s provider trigger
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderContent}>
        <div className={styles.orbitContainer}>
          <div className={styles.ring1}></div>
          <div className={styles.ring2}></div>
          <div className={styles.ring3}></div>
          <div className={styles.centerDot}></div>
        </div>
        <h1 className={styles.brandText}>MIREX</h1>
        <div className={styles.progressBar}>
          <div className={styles.progressFill}></div>
        </div>
        <p className={styles.loadingSubtitle}>Building Digital Ecosystems...</p>
      </div>
    </div>
  );
}
