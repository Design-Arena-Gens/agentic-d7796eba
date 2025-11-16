"use client";

import { motion } from "framer-motion";
import styles from "./mystic-background.module.css";

export function MysticBackground() {
  return (
    <div className={styles.wrapper} aria-hidden>
      <motion.div
        className={styles.glowOne}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className={styles.glowTwo}
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      />
      <div className={styles.texture} />
    </div>
  );
}
