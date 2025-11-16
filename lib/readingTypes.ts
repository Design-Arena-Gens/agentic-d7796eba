export type ReadingIdentifier =
  | "solo"
  | "croix"
  | "trois_cartes"
  | "grand_tirage";

export type ReadingSlot = {
  id: string;
  label: string;
  helper?: string;
  x: number;
  y: number;
  rotation?: number;
};

export type ReadingType = {
  id: ReadingIdentifier;
  name: string;
  description: string;
  cardCount: number;
  slots: ReadingSlot[];
};

export const READING_TYPES: ReadingType[] = [
  {
    id: "solo",
    name: "Tirage à une carte",
    description:
      "Un aperçu concentré du climat du moment ou de l'énergie dominante.",
    cardCount: 1,
    slots: [
      {
        id: "insight",
        label: "Message",
        x: 50,
        y: 50
      }
    ]
  },
  {
    id: "croix",
    name: "Tirage en croix",
    description:
      "Lecture traditionnelle en cinq cartes pour éclairer les enjeux d'une situation.",
    cardCount: 5,
    slots: [
      { id: "present", label: "Cœur", x: 50, y: 50 },
      { id: "challenge", label: "Défi", x: 20, y: 50, rotation: -12 },
      { id: "resource", label: "Ressource", x: 80, y: 50, rotation: 12 },
      { id: "unconscious", label: "Fondation", x: 50, y: 20 },
      { id: "outcome", label: "Synthèse", x: 50, y: 80 }
    ]
  },
  {
    id: "trois_cartes",
    name: "Tirage linéaire",
    description:
      "Passé, présent, futur : une frise dynamique pour suivre l'évolution d'une question.",
    cardCount: 3,
    slots: [
      { id: "past", label: "Passé", x: 25, y: 55, rotation: -6 },
      { id: "present", label: "Présent", x: 50, y: 45 },
      { id: "future", label: "Futur", x: 75, y: 55, rotation: 6 }
    ]
  },
  {
    id: "grand_tirage",
    name: "Grand tirage",
    description:
      "Dix cartes pour un panorama complet de votre chemin, inspiré du tirage en croix celtique.",
    cardCount: 10,
    slots: [
      { id: "self", label: "Vous", x: 45, y: 48 },
      { id: "influence", label: "Influence", x: 55, y: 52, rotation: 90 },
      { id: "foundation", label: "Base", x: 45, y: 25 },
      { id: "recent_past", label: "Passé", x: 25, y: 48, rotation: -8 },
      { id: "potential", label: "Potentiel", x: 65, y: 30, rotation: 8 },
      { id: "near_future", label: "Avenir proche", x: 45, y: 72 },
      { id: "self_position", label: "Position", x: 78, y: 22 },
      { id: "environment", label: "Environnement", x: 78, y: 38 },
      { id: "hopes", label: "Espoirs", x: 78, y: 54 },
      { id: "overall", label: "Synthèse", x: 78, y: 70 }
    ]
  }
];
