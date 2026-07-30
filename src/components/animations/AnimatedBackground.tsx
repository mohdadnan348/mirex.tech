"use client";

import React from "react";
import styles from "./AnimatedBackground.module.css";

export default function AnimatedBackground() {
  return (
    <div className={styles.bgContainer}>
      {/* Radial Neon Orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />

      {/* Floating particles grid */}
      <div className={styles.gridOverlay} />

      {/* Lighting highlight line */}
      <div className={styles.lightLine} />
    </div>
  );
}
