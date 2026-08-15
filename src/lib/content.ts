import { images, type SiteImage } from "./images";

export const navLinks = [
  { label: "Notre mission", href: "#mission" },
  { label: "Nos actions", href: "#actions" },
  { label: "Impact", href: "#impact" },
  { label: "Transparence", href: "#transparence" },
  { label: "Actualités", href: "#actualites" },
] as const;

type ActionItem = {
  number: string;
  title: string;
  description: string;
  image: SiteImage;
};

export const actions: ActionItem[] = [
  {
    number: "01",
    title: "Cours d'alphabétisation",
    description:
      "Des espaces d'apprentissage pour les enfants privés d'école, avec un accompagnement patient et adapté.",
    image: images.literacyWriting,
  },
  {
    number: "02",
    title: "Ateliers de couture",
    description:
      "Des formations professionnelles pour les jeunes filles, alliant compétences techniques et autonomie.",
    image: images.vocationalSewing,
  },
  {
    number: "03",
    title: "Formation informatique",
    description:
      "L'accès aux outils numériques comme levier d'insertion et d'ouverture vers de nouvelles opportunités.",
    image: images.classroomTealWide,
  },
  {
    number: "04",
    title: "Éducation des jeunes filles",
    description:
      "Un engagement prioritaire pour garantir à chaque fille le droit d'apprendre, grandir et choisir son avenir.",
    image: images.communityClassroom,
  },
  {
    number: "05",
    title: "Soutien scolaire",
    description:
      "Un accompagnement régulier pour consolider les acquis et maintenir la motivation des élèves.",
    image: images.classroomTealGroup,
  },
  {
    number: "06",
    title: "Distribution de fournitures",
    description:
      "Cahiers, stylos, manuels : le matériel essentiel pour que l'école redevienne une réalité concrète.",
    image: images.roadSafetyBooks,
  },
];

type StoryItem = {
  category: string;
  title: string;
  description: string;
  image: SiteImage;
};

export const stories: StoryItem[] = [
  {
    category: "Éducation",
    title: "Quand l'école reprend vie dans une pièce du quartier",
    description:
      "Sans bâtiment scolaire, l'apprentissage se fait sur un tapis, autour de feuilles blanches et de stylos. Chaque matin, des enfants arrivent avec la même envie : apprendre à lire, écrire, compter.",
    image: images.classroomTealGroup,
  },
  {
    category: "Autonomie",
    title: "La couture comme chemin vers l'indépendance",
    description:
      "Pour de nombreuses jeunes filles, une formation professionnelle ouvre des perspectives concrètes. Les ateliers deviennent un espace de confiance, de compétence et de dignité.",
    image: images.vocationalSewing,
  },
  {
    category: "Communauté",
    title: "L'apprentissage, un acte collectif",
    description:
      "Derrière chaque enfant qui écrit, il y a une communauté qui croit en l'avenir. Parents, bénévoles, enseignants : tous contribuent à tenir la porte de l'école ouverte.",
    image: images.classroomTealWide,
  },
  {
    category: "Espoir",
    title: "La joie d'apprendre, malgré tout",
    description:
      "Dans des contextes difficiles, la curiosité des enfants reste intacte. Un cahier neuf, un sourire, un mot lu pour la première fois : autant de victoires qui comptent.",
    image: images.literacyWriting,
  },
];

export const impactStats = [
  {
    value: 2026,
    suffix: "",
    label: "Année de fondation",
    description: "Une association née de l'urgence éducative en Afghanistan.",
  },
  {
    value: 6,
    suffix: "",
    label: "Programmes",
    description: "Des initiatives concrètes sur le terrain, de l'alphabétisation à la formation.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Dédiés à l'éducation",
    description: "Toute notre énergie est consacrée à l'éducation et à l'autonomie des jeunes.",
  },
] as const;

export const transparencyItems = [
  {
    amount: "10 €",
    description: "Un cahier et des crayons pour un enfant",
  },
  {
    amount: "30 €",
    description: "Un kit scolaire complet",
  },
  {
    amount: "100 €",
    description: "Une classe équipée de fournitures essentielles",
  },
] as const;

export const donationTiers = [
  {
    amount: "20 €",
    period: "/ mois",
    description:
      "1 mois d'école pour une fille : cahiers, stylos, place en classe et accès à un enseignement.",
  },
  {
    amount: "30 €",
    period: "/ mois",
    description:
      "École + kit hygiène et eau potable pour la famille de l'enfant.",
  },
] as const;

export const newsItems = [
  {
    date: "Mai 2026",
    title: "Création de l'association École Libre",
    excerpt:
      "L'association est officiellement créée avec pour mission de faciliter l'accès à l'éducation des enfants défavorisés en Afghanistan.",
  },
  {
    date: "À venir",
    title: "Premiers programmes éducatifs sur le terrain",
    excerpt:
      "Nos équipes préparent le lancement des premières actions éducatives et humanitaires. Plus d'informations prochainement.",
  },
] as const;
