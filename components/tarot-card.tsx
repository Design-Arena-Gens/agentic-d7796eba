"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import styles from "./tarot-card.module.css";
import type { TarotCard } from "@/lib/tarotDeck";
import type { ReadingSlot } from "@/lib/readingTypes";

type TarotCardProps = {
  card: TarotCard;
  slot: ReadingSlot;
  index: number;
  revealed: boolean;
};

const containerVariants = {
  initial: (index: number) => ({
    opacity: 0,
    scale: 0.9,
    y: 30,
    rotate: -6 + index * 1.4
  }),
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0
  }
};

export function TarotCardDisplay({
  card,
  slot,
  index,
  revealed
}: TarotCardProps) {
  return (
    <motion.div
      className={styles.slot}
      style={{
        left: `${slot.x}%`,
        top: `${slot.y}%`
      }}
      custom={index}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={{ delay: index * 0.15, type: "spring", stiffness: 160 }}
    >
      <div className={styles.slotLabel}>
        <span>{slot.label}</span>
        {slot.helper ? <small>{slot.helper}</small> : null}
      </div>
      <motion.div
        className={clsx(styles.cardWrapper, {
          [styles.revealed]: revealed,
          [styles.landscape]: Math.abs(slot.rotation ?? 0) > 45
        })}
        style={{
          rotate: `${slot.rotation ?? 0}deg`
        }}
        animate={{
          scale: revealed ? 1 : 0.96
        }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          className={styles.card}
          animate={{
            rotateY: revealed ? 0 : 180
          }}
          transition={{
            duration: 0.9,
            delay: index * 0.15,
            ease: [0.19, 1, 0.22, 1]
          }}
        >
          <div
            className={clsx(
              styles.face,
              styles.front,
              card.arcana === "majeur"
                ? styles.major
                : styles[getSuitClassName(card.suit)]
            )}
          >
            <div className={styles.corner}>
              <span className={styles.cornerTitle}>{card.name}</span>
              {card.arcana === "mineur" && card.suit ? (
                <span className={styles.cornerSubtitle}>{card.suit}</span>
              ) : (
                <span className={styles.cornerSubtitle}>Arcane majeur</span>
              )}
            </div>
            <div className={styles.symbolic}>
              <span>{card.arcana === "mineur" ? getSuitGlyph(card.suit) : "✶"}</span>
            </div>
            <div className={styles.keywords}>
              {card.keywords.map((kw) => (
                <span key={kw}>{kw}</span>
              ))}
            </div>
            <p className={styles.description}>{card.description}</p>
          </div>
          <div className={clsx(styles.face, styles.back)}>
            <div className={styles.backPattern} />
            <div className={styles.backSigil}>☽☉</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function getSuitGlyph(suit?: TarotCard["suit"]) {
  switch (suit) {
    case "bâtons":
      return "♣";
    case "coupes":
      return "♥";
    case "épées":
      return "♠";
    case "deniers":
      return "♦";
    default:
      return "✶";
  }
}

function getSuitClassName(suit?: TarotCard["suit"]) {
  switch (suit) {
    case "bâtons":
      return "suit-batons";
    case "coupes":
      return "suit-coupes";
    case "épées":
      return "suit-epees";
    case "deniers":
      return "suit-deniers";
    default:
      return "suit-generic";
  }
}
