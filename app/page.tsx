"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TAROT_DECK, type TarotCard } from "@/lib/tarotDeck";
import {
  READING_TYPES,
  type ReadingType,
  type ReadingSlot
} from "@/lib/readingTypes";
import { shuffleWithSeed } from "@/lib/random";
import { TarotCardDisplay } from "@/components/tarot-card";
import { ThemeToggle } from "@/components/theme-toggle";
import styles from "./page.module.css";

const DEFAULT_SEED = "oraculum";

export default function Home() {
  const [selectedReading, setSelectedReading] = useState<ReadingType["id"]>(
    "trois_cartes"
  );
  const [seedDraft, setSeedDraft] = useState<string>(DEFAULT_SEED);
  const [activeSeed, setActiveSeed] = useState<string>(DEFAULT_SEED);
  const [drawIteration, setDrawIteration] = useState<number>(0);

  const reading = READING_TYPES.find(
    (preset) => preset.id === selectedReading
  )!;

  const deck = useMemo(
    () => shuffleWithSeed(TAROT_DECK, `${activeSeed}::${reading.id}`),
    [activeSeed, reading.id]
  );

  const drawnCards = useMemo<TarotCard[]>(
    () => deck.slice(0, reading.cardCount),
     [deck, reading.cardCount]
  );

  const handleDraw = (seedValue?: string) => {
    const normalizedSeed = (seedValue ?? seedDraft).trim() || DEFAULT_SEED;
    setActiveSeed(normalizedSeed);
    setSeedDraft(normalizedSeed);
    setDrawIteration((iteration) => iteration + 1);
  };

  const handleRandomSeed = () => {
    const randomSeed = generateSeed();
    handleDraw(randomSeed);
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.branding}>
          <motion.span
            className={styles.logo}
            animate={{ rotate: [0, 6, 0], scale: [1, 1.08, 1] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 10,
              ease: "easeInOut"
            }}
          >
            ✶
          </motion.span>
          <div>
            <h1>Oraculum</h1>
            <p>Tirages immersifs du Tarot de Marseille</p>
          </div>
        </div>
        <ThemeToggle />
      </header>

      <section className={styles.controls}>
        <div className={styles.readingSelector}>
          {READING_TYPES.map((type) => (
            <button
              key={type.id}
              type="button"
              className={`${styles.readingButton} ${
                type.id === selectedReading ? styles.readingButtonActive : ""
              }`}
              onClick={() => setSelectedReading(type.id)}
            >
              <span className={styles.readingName}>{type.name}</span>
              <span className={styles.readingDescription}>
                {type.description}
              </span>
            </button>
          ))}
        </div>

        <div className={styles.seedPanel}>
          <label htmlFor="seed" className={styles.seedLabel}>
            Graine du tirage
          </label>
          <div className={styles.seedControls}>
            <input
              id="seed"
              value={seedDraft}
              onChange={(event) => setSeedDraft(event.target.value)}
              className={styles.seedInput}
              spellCheck={false}
              autoCapitalize="none"
            />
            <button
              type="button"
              className={styles.seedAction}
              onClick={() => handleDraw()}
            >
              Régénérer
            </button>
            <button
              type="button"
              className={styles.seedActionSecondary}
              onClick={handleRandomSeed}
            >
              Graine aléatoire
            </button>
          </div>
          <p className={styles.seedInfo}>
            Graine active&nbsp;: <strong>{activeSeed}</strong>
          </p>
        </div>
      </section>

      <section className={`${styles.spreadStage} glass-panel`}>
        <div className={styles.spreadHeader}>
          <div>
            <h2>{reading.name}</h2>
            <p>{reading.description}</p>
          </div>
          <motion.button
            type="button"
            className={styles.drawButton}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleDraw()}
          >
            Tirer les cartes
          </motion.button>
        </div>
        <div className={styles.stageGrid}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${reading.id}-${drawIteration}`}
              className={styles.stageArea}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className={styles.stageBackdrop} />
              {drawnCards.map((card, index) => (
                <TarotCardDisplay
                  key={card.id}
                  card={card}
                  slot={resolveSlot(reading, index)}
                  index={index}
                  revealed
                />
              ))}
            </motion.div>
          </AnimatePresence>
          <aside className={styles.sidePanel}>
            <div className={styles.sideTitle}>
              <h3>Journal de tirage</h3>
              <span>Structure prête pour l’IA</span>
            </div>
            <div className={styles.cardList}>
              {drawnCards.map((card, index) => (
                <div key={card.id} className={styles.cardListItem}>
                  <span className={styles.cardIndex}>
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <div>
                    <p className={styles.cardTitle}>{card.name}</p>
                    <p className={styles.cardMeta}>
                      {card.arcana === "majeur"
                        ? "Arcane majeur"
                        : `Arcane mineur · ${card.suit}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.aiPlaceholder}>
              <h4>Module d’interprétation</h4>
              <p>
                Cette section accueillera prochainement un moteur d’analyse
                assisté par IA. Intégrez votre service ici pour générer des
                interprétations guidées à partir des cartes tirées.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function generateSeed() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  let seed = "";
  for (let i = 0; i < 10; i += 1) {
    seed += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return seed;
}

function resolveSlot(reading: ReadingType, index: number): ReadingSlot {
  const preset = reading.slots[index];
  if (preset) {
    return preset;
  }

  const angle = (index / reading.cardCount) * Math.PI * 2;
  return {
    id: `auto-${index}`,
    label: `Carte ${index + 1}`,
    x: 50 + Math.cos(angle) * 35,
    y: 50 + Math.sin(angle) * 35,
    rotation: (index % 2 === 0 ? -1 : 1) * 6
  };
}
