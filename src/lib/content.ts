import { images } from "./images";

export const navLinks = [
  { label: "Notre mission", href: "#mission" },
  { label: "Nos actions", href: "#actions" },
  { label: "Impact", href: "#impact" },
  { label: "Transparence", href: "#transparence" },
  { label: "Actualités", href: "#actualites" },
] as const;

export const actions = [
  {
    number: "01",
    title: "Cours d'alphabétisation",
    description:
      "Des espaces d'apprentissage pour les enfants privés d'école, avec un accompagnement patient et adapté.",
    image: images.mission,
    alt: "Enfants concentrés sur leurs cahiers lors d'un cours d'alphabétisation",
  },
  {
    number: "02",
    title: "Ateliers de couture",
    description:
      "Des formations professionnelles pour les jeunes filles, alliant compétences techniques et autonomie.",
    image: images.tailoringClass,
    alt: "Jeunes femmes en formation de couture autour d'une table",
  },
  {
    number: "03",
    title: "Formation informatique",
    description:
      "L'accès aux outils numériques comme levier d'insertion et d'ouverture vers de nouvelles opportunités.",
    image: images.classroomWide,
    alt: "Salle de classe avec enfants en apprentissage",
  },
  {
    number: "04",
    title: "Éducation des jeunes filles",
    description:
      "Un engagement prioritaire pour garantir à chaque fille le droit d'apprendre, grandir et choisir son avenir.",
    image: images.hero,
    alt: "Jeunes filles en classe, attentives à leur travail",
  },
  {
    number: "05",
    title: "Soutien scolaire",
    description:
      "Un accompagnement régulier pour consolider les acquis et maintenir la motivation des élèves.",
    image: images.classroomGroup,
    alt: "Groupe d'enfants réunis pour une session de soutien scolaire",
  },
  {
    number: "06",
    title: "Distribution de fournitures",
    description:
      "Cahiers, stylos, manuels : le matériel essentiel pour que l'école redevienne une réalité concrète.",
    image: images.childrenJoy,
    alt: "Enfants tenant leurs cahiers avec enthousiasme",
  },
] as const;

export const stories = [
  {
    category: "Éducation",
    title: "Quand l'école reprend vie dans une pièce du quartier",
    description:
      "Sans bâtiment scolaire, l'apprentissage se fait sur un tapis, autour de feuilles blanches et de stylos. Chaque matin, des enfants arrivent avec la même envie : apprendre à lire, écrire, compter.",
    image: images.classroomWide,
    alt: "Grande salle de classe avec enfants assis au sol sur un tapis",
  },
  {
    category: "Autonomie",
    title: "La couture comme chemin vers l'indépendance",
    description:
      "Pour de nombreuses jeunes filles, une formation professionnelle ouvre des perspectives concrètes. Les ateliers deviennent un espace de confiance, de compétence et de dignité.",
    image: images.tailoringClass,
    alt: "Formation professionnelle en couture pour jeunes femmes",
  },
  {
    category: "Communauté",
    title: "L'apprentissage, un acte collectif",
    description:
      "Derrière chaque enfant qui écrit, il y a une communauté qui croit en l'avenir. Parents, bénévoles, enseignants : tous contribuent à tenir la porte de l'école ouverte.",
    image: images.classroomBehind,
    alt: "Vue depuis l'arrière d'une classe communautaire",
  },
  {
    category: "Espoir",
    title: "La joie d'apprendre, malgré tout",
    description:
      "Dans des contextes difficiles, la curiosité des enfants reste intacte. Un cahier neuf, un sourire, un mot lu pour la première fois : autant de victoires qui comptent.",
    image: images.childrenJoy,
    alt: "Enfants souriants montrant leurs cahiers en classe",
  },
] as const;

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
    label: "Engagement",
    description: "Toute notre énergie est dédiée à l'éducation et à l'autonomie des jeunes.",
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
