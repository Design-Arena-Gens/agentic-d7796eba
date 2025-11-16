export type Arcana = "majeur" | "mineur";
export type Suit = "bâtons" | "coupes" | "épées" | "deniers";

export type TarotCard = {
  id: string;
  name: string;
  arcana: Arcana;
  suit?: Suit;
  rank: number;
  number?: number;
  keywords: string[];
  description: string;
};

type MajorCard = {
  number: number;
  name: string;
  keywords: string[];
  description: string;
};

const MAJOR_ARCANA: MajorCard[] = [
  {
    number: 0,
    name: "Le Mat",
    keywords: ["élan", "inconnu", "liberté"],
    description:
      "Évoque l'aventure, la spontanéité et la confiance absolue dans le chemin."
  },
  {
    number: 1,
    name: "Le Bateleur",
    keywords: ["initiative", "créativité", "volonté"],
    description:
      "Symbolise un nouveau départ, la concentration des talents et la mise en action."
  },
  {
    number: 2,
    name: "La Papesse",
    keywords: ["intuition", "mystère", "connaissance"],
    description:
      "Reflète la sagesse intérieure, les secrets révélés et la profondeur spirituelle."
  },
  {
    number: 3,
    name: "L’Impératrice",
    keywords: ["fertilité", "expression", "abondance"],
    description:
      "Incarnation de la créativité, de la communication fluide et de l'harmonie."
  },
  {
    number: 4,
    name: "L’Empereur",
    keywords: ["structure", "autorité", "stabilité"],
    description:
      "Exprime la maîtrise, l'organisation et la solidité des fondations."
  },
  {
    number: 5,
    name: "Le Pape",
    keywords: ["tradition", "conseil", "spiritualité"],
    description:
      "Porte la voix des mentors, de la transmission du savoir et de la foi."
  },
  {
    number: 6,
    name: "L’Amoureux",
    keywords: ["choix", "relation", "harmonie"],
    description:
      "Invite aux décisions du cœur, à l'alliance et à la recherche d'équilibre."
  },
  {
    number: 7,
    name: "Le Chariot",
    keywords: ["volonté", "victoire", "direction"],
    description:
      "Parle d’ambition, de contrôle des forces opposées et de mouvement victorieux."
  },
  {
    number: 8,
    name: "La Justice",
    keywords: ["équité", "vérité", "responsabilité"],
    description:
      "Rappelle la rectitude, l’honnêteté et la nécessité d’assumer ses choix."
  },
  {
    number: 9,
    name: "L’Hermite",
    keywords: ["retraite", "sagesse", "recherche"],
    description:
      "Invite à la réflexion, à la lumière intérieure et à la patience."
  },
  {
    number: 10,
    name: "La Roue de Fortune",
    keywords: ["cycles", "destin", "opportunité"],
    description:
      "Évoque le changement, les tournants décisifs et la loi du mouvement."
  },
  {
    number: 11,
    name: "La Force",
    keywords: ["courage", "douceur", "maîtrise"],
    description:
      "Montre la puissance intérieure, l'apaisement par la compassion et la résilience."
  },
  {
    number: 12,
    name: "Le Pendu",
    keywords: ["lâcher-prise", "renversement", "pause"],
    description:
      "Suggère une nouvelle perspective, le sacrifice conscient et l'attente féconde."
  },
  {
    number: 13,
    name: "Arcane sans nom",
    keywords: ["transformation", "renouveau", "mutation"],
    description:
      "Annonce la mue, la fin nécessaire d’un cycle et la possibilité de renaissance."
  },
  {
    number: 14,
    name: "Tempérance",
    keywords: ["équilibre", "fluidité", "soin"],
    description:
      "Symbolise l’alchimie des contraires, la guérison subtile et la patience active."
  },
  {
    number: 15,
    name: "Le Diable",
    keywords: ["désir", "attachement", "pouvoir"],
    description:
      "Met en lumière les séductions, les chaînes volontaires et l’énergie brute."
  },
  {
    number: 16,
    name: "La Maison Dieu",
    keywords: ["révélation", "libération", "choc"],
    description:
      "Parle d’éclat, d’éveil soudain et de libération de structures obsolètes."
  },
  {
    number: 17,
    name: "L’Étoile",
    keywords: ["espoir", "grâce", "inspiration"],
    description:
      "Diffuse la confiance, la protection douce et le rayonnement créatif."
  },
  {
    number: 18,
    name: "La Lune",
    keywords: ["songes", "intuition", "mystère"],
    description:
      "Invite à naviguer dans l'imaginaire, les émotions profondes et les illusions."
  },
  {
    number: 19,
    name: "Le Soleil",
    keywords: ["joie", "clarté", "succès"],
    description:
      "Illumine par la vitalité, la réussite partagée et le bonheur rayonnant."
  },
  {
    number: 20,
    name: "Le Jugement",
    keywords: ["renouveau", "appel", "éveil"],
    description:
      "Évoque la voix intérieure, la résurrection symbolique et la vérité révélée."
  },
  {
    number: 21,
    name: "Le Monde",
    keywords: ["accomplissement", "harmonie", "ouverture"],
    description:
      "Figure la complétude, la danse cosmique et l’accès à une nouvelle dimension."
  }
];

type MinorTemplate = {
  suit: Suit;
  cards: {
    rank: number;
    name: string;
    keywords: string[];
    description: string;
  }[];
};

const MINOR_ARCANA: MinorTemplate[] = [
  {
    suit: "bâtons",
    cards: [
      {
        rank: 1,
        name: "As de Bâtons",
        keywords: ["élan créatif", "intuition", "étincelle"],
        description:
          "Première impulsion, feu intérieur et opportunité d'initier."
      },
      {
        rank: 2,
        name: "Deux de Bâtons",
        keywords: ["projection", "planification", "décision"],
        description:
          "Ouverture au vaste monde, choix stratégique et vision à long terme."
      },
      {
        rank: 3,
        name: "Trois de Bâtons",
        keywords: ["expansion", "confiance", "progression"],
        description:
          "Mise en route des projets, collaborations naissantes, horizons nouveaux."
      },
      {
        rank: 4,
        name: "Quatre de Bâtons",
        keywords: ["célébration", "ancrage", "communauté"],
        description:
          "Stabilité joyeuse, foyer et ancrage fertile pour la suite."
      },
      {
        rank: 5,
        name: "Cinq de Bâtons",
        keywords: ["défi", "émulation", "confrontation"],
        description:
          "Conflits créatifs, tensions stimulantes et apprentissage via l'autre."
      },
      {
        rank: 6,
        name: "Six de Bâtons",
        keywords: ["victoire", "reconnaissance", "progression"],
        description:
          "Récompense méritée, momentum positif et leadership inspirant."
      },
      {
        rank: 7,
        name: "Sept de Bâtons",
        keywords: ["détermination", "conviction", "résilience"],
        description:
          "Défense de son territoire, persévérance et courage face aux obstacles."
      },
      {
        rank: 8,
        name: "Huit de Bâtons",
        keywords: ["rapidité", "alignement", "flux"],
        description:
          "Accélération des événements, communications fluides et synchronicités."
      },
      {
        rank: 9,
        name: "Neuf de Bâtons",
        keywords: ["veille", "prudence", "persistance"],
        description:
          "Protection, vigilance élevée et dernier effort avant l'aboutissement."
      },
      {
        rank: 10,
        name: "Dix de Bâtons",
        keywords: ["charge", "responsabilité", "persévérance"],
        description:
          "Fardeau assumé, besoin de déléguer et d'alléger la marche."
      },
      {
        rank: 11,
        name: "Valet de Bâtons",
        keywords: ["aventure", "enthousiasme", "messager"],
        description:
          "Curiosité ardente, nouvelles idées et désir d'explorer autrement."
      },
      {
        rank: 12,
        name: "Cavalier de Bâtons",
        keywords: ["audace", "passion", "mouvement"],
        description:
          "Action rapide, conquête fougueuse et nécessité d'orientation claire."
      },
      {
        rank: 13,
        name: "Reine de Bâtons",
        keywords: ["rayonnement", "magnetisme", "créativité"],
        description:
          "Charisme chaleureux, indépendance assumée et vision inspirée."
      },
      {
        rank: 14,
        name: "Roi de Bâtons",
        keywords: ["leadership", "vision", "innovation"],
        description:
          "Autorité enthousiaste, courage d'entreprendre et influence positive."
      }
    ]
  },
  {
    suit: "coupes",
    cards: [
      {
        rank: 1,
        name: "As de Coupes",
        keywords: ["émotion", "compassion", "source"],
        description:
          "Naissance d'un sentiment, ouverture du cœur et abondance sensible."
      },
      {
        rank: 2,
        name: "Deux de Coupes",
        keywords: ["union", "partage", "connivence"],
        description:
          "Rencontre harmonieuse, lien profond et complicité grandissante."
      },
      {
        rank: 3,
        name: "Trois de Coupes",
        keywords: ["joie", "célébration", "sororité"],
        description:
          "Moments festifs, entourage bienveillant et créativité collective."
      },
      {
        rank: 4,
        name: "Quatre de Coupes",
        keywords: ["introspection", "bascule", "désir latent"],
        description:
          "Pause émotionnelle, questionnement des envies et soif de renouveau."
      },
      {
        rank: 5,
        name: "Cinq de Coupes",
        keywords: ["deuil", "regret", "transition"],
        description:
          "Acceptation d'une perte, regard vers le passé et apprentissage du lâcher."
      },
      {
        rank: 6,
        name: "Six de Coupes",
        keywords: ["mémoire", "douceur", "nostalgie"],
        description:
          "Souvenirs bienveillants, simplicité retrouvée et générosité sincère."
      },
      {
        rank: 7,
        name: "Sept de Coupes",
        keywords: ["rêves", "illusions", "choix multiples"],
        description:
          "Imagination foisonnante, opportunités multiples et nécessité d'ancrage."
      },
      {
        rank: 8,
        name: "Huit de Coupes",
        keywords: ["quitter", "quête", "vérité"],
        description:
          "Décision de partir vers plus authentique, élan vers l’inconnu."
      },
      {
        rank: 9,
        name: "Neuf de Coupes",
        keywords: ["satisfaction", "gratitude", "plénitude"],
        description:
          "Vœux exaucés, plaisir du moment présent et rayonnement personnel."
      },
      {
        rank: 10,
        name: "Dix de Coupes",
        keywords: ["harmonie", "famille", "blessings"],
        description:
          "Bonheur partagé, cercle affectif florissant et accomplissement du cœur."
      },
      {
        rank: 11,
        name: "Valet de Coupes",
        keywords: ["sensibilité", "intuition", "message"],
        description:
          "Invitation à ressentir, inspirations délicates et nouvelles émotions."
      },
      {
        rank: 12,
        name: "Cavalier de Coupes",
        keywords: ["quête", "romantisme", "quête intérieure"],
        description:
          "Mouvement guidé par le cœur, voyage artistique et diplomatie."
      },
      {
        rank: 13,
        name: "Reine de Coupes",
        keywords: ["empathie", "guérison", "rêverie"],
        description:
          "Présence consolante, reliance au monde subtil et accueil des émotions."
      },
      {
        rank: 14,
        name: "Roi de Coupes",
        keywords: ["équilibre émotionnel", "sagesse", "diplomatie"],
        description:
          "Maîtrise des sentiments, soutien discret et maturité affective."
      }
    ]
  },
  {
    suit: "épées",
    cards: [
      {
        rank: 1,
        name: "As d’Épées",
        keywords: ["clarité", "justesse", "percée"],
        description:
          "Idée tranchante, discernement accru et victoire de l’esprit."
      },
      {
        rank: 2,
        name: "Deux d’Épées",
        keywords: ["équilibre", "pause", "non-dit"],
        description:
          "Temps de neutralité, protection du cœur et décision en suspens."
      },
      {
        rank: 3,
        name: "Trois d’Épées",
        keywords: ["chagrin", "révélation", "libération"],
        description:
          "Vérité qui blesse, catharsis nécessaire et guérison par la lucidité."
      },
      {
        rank: 4,
        name: "Quatre d’Épées",
        keywords: ["repos", "retour à soi", "intégration"],
        description:
          "Retraite mentale, méditation et consolidation intérieure."
      },
      {
        rank: 5,
        name: "Cinq d’Épées",
        keywords: ["conflit", "gains amers", "limites"],
        description:
          "Tensions intellectuelles, victoire vide et prise de conscience."
      },
      {
        rank: 6,
        name: "Six d’Épées",
        keywords: ["transition", "guidance", "voyage"],
        description:
          "Passage initiatique, évolution mentale et mouvement vers la paix."
      },
      {
        rank: 7,
        name: "Sept d’Épées",
        keywords: ["stratégie", "discrétion", "ingéniosité"],
        description:
          "Plan élaboré, ruse constructive et reprise de liberté."
      },
      {
        rank: 8,
        name: "Huit d’Épées",
        keywords: ["blocage", "peur", "croyances"],
        description:
          "Liaison mentale, perception limitée et possibilité de se délier."
      },
      {
        rank: 9,
        name: "Neuf d’Épées",
        keywords: ["angoisse", "culpabilité", "insomnie"],
        description:
          "Pensées obsédantes, scenario mental pénible et appel à l’apaisement."
      },
      {
        rank: 10,
        name: "Dix d’Épées",
        keywords: ["fin", "libération", "renaissance"],
        description:
          "Clôture radicale d'un cycle, acceptation de l’inévitable et renouveau."
      },
      {
        rank: 11,
        name: "Valet d’Épées",
        keywords: ["veille", "curiosité", "communication"],
        description:
          "Esprit alerte, soif de comprendre et apprentissage rapide."
      },
      {
        rank: 12,
        name: "Cavalier d’Épées",
        keywords: ["impulsion", "engagement", "vérité"],
        description:
          "Action déterminée, combat juste et précision dans la parole."
      },
      {
        rank: 13,
        name: "Reine d’Épées",
        keywords: ["lucidité", "indépendance", "franchise"],
        description:
          "Intelligence structurant les émotions, parole sincère et discernement élevé."
      },
      {
        rank: 14,
        name: "Roi d’Épées",
        keywords: ["autorité", "logique", "justice"],
        description:
          "Esprit rationnel, décision éclairée et rigueur stratégique."
      }
    ]
  },
  {
    suit: "deniers",
    cards: [
      {
        rank: 1,
        name: "As de Deniers",
        keywords: ["manifestation", "prosperité", "opportunité"],
        description:
          "Graine d'abondance, projet concret et ancrage matériel."
      },
      {
        rank: 2,
        name: "Deux de Deniers",
        keywords: ["adaptation", "rythme", "équilibre"],
        description:
          "Souplesse dans la gestion, jonglage des ressources et créativité pratique."
      },
      {
        rank: 3,
        name: "Trois de Deniers",
        keywords: ["collaboration", "artisanat", "maîtrise"],
        description:
          "Travail d'équipe, valorisation des talents et progression tangible."
      },
      {
        rank: 4,
        name: "Quatre de Deniers",
        keywords: ["sécurité", "contrôle", "gestion"],
        description:
          "Besoin de stabilité, protection des acquis et vigilance financière."
      },
      {
        rank: 5,
        name: "Cinq de Deniers",
        keywords: ["manque", "entraide", "résilience"],
        description:
          "Sentiment d'exclusion, mais possibilité d'obtenir du soutien."
      },
      {
        rank: 6,
        name: "Six de Deniers",
        keywords: ["partage", "équilibre", "flux"],
        description:
          "Générosité mesurée, transmissions équitables et circulation des ressources."
      },
      {
        rank: 7,
        name: "Sept de Deniers",
        keywords: ["patience", "bilan", "croissance"],
        description:
          "Temps d'évaluation, récolte à venir et entretien des projets."
      },
      {
        rank: 8,
        name: "Huit de Deniers",
        keywords: ["discipline", "expertise", "apprentissage"],
        description:
          "Perfectionnement, répétition productive et art du détail."
      },
      {
        rank: 9,
        name: "Neuf de Deniers",
        keywords: ["indépendance", "raffinement", "abondance"],
        description:
          "Réussite personnelle, confort mérité et autonomie gratifiante."
      },
      {
        rank: 10,
        name: "Dix de Deniers",
        keywords: ["héritage", "pérennité", "ancrage"],
        description:
          "Transmission positive, sécurité familiale et réussite durable."
      },
      {
        rank: 11,
        name: "Valet de Deniers",
        keywords: ["opportunité", "étude", "matérialisation"],
        description:
          "Nouvelles promesses concrètes, apprentissage sérieux et prudence."
      },
      {
        rank: 12,
        name: "Cavalier de Deniers",
        keywords: ["fiabilité", "constance", "progression"],
        description:
          "Avancée méthodique, rigueur quotidienne et pragmatisme fertile."
      },
      {
        rank: 13,
        name: "Reine de Deniers",
        keywords: ["bienveillance", "gestion", "abondance"],
        description:
          "Protection matérielle, générosité terrienne et sens de la communauté."
      },
      {
        rank: 14,
        name: "Roi de Deniers",
        keywords: ["stabilité", "prospérité", "vision"],
        description:
          "Succès entrepreneurial, responsabilité financière et sécurité assurée."
      }
    ]
  }
];

export const TAROT_DECK: TarotCard[] = [
  ...MAJOR_ARCANA.map<TarotCard>((card) => ({
    id: `major_${card.number}_${card.name
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/\s+/g, "_")
      .toLowerCase()}`,
    arcana: "majeur",
    rank: card.number,
    number: card.number,
    name: card.name,
    keywords: card.keywords,
    description: card.description
  })),
  ...MINOR_ARCANA.flatMap<TarotCard>(({ suit, cards }) =>
    cards.map((card) => ({
      id: `minor_${suit}_${card.rank}`,
      arcana: "mineur",
      rank: card.rank,
      suit,
      name: card.name,
      keywords: card.keywords,
      description: card.description
    }))
  )
];
