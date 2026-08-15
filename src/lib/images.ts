import { assetPath } from "./asset-path";

/**
 * Image inventory — internal reference for art direction
 *
 * hero/education-classroom-focus
 *   Content: Sunlit classroom, girl in headscarf looking toward camera, children writing on red carpet
 *   Primary: Hero (cinematic full-screen)
 *   Crop: 16:9 / 100svh, object-position center 40%
 *
 * education/literacy-writing-session
 *   Content: Four children writing on green patterned carpet, close intimate angle
 *   Primary: Mission section editorial
 *   Secondary: Action 01 (alphabétisation), Story 4 (espoir)
 *
 * education/classroom-teal-wide
 *   Content: Wide classroom, many children writing on teal carpet, natural light
 *   Primary: Story section full-bleed editorial
 *   Secondary: Action 03 (formation — general classroom), Story 3 (communauté)
 *
 * education/classroom-teal-group
 *   Content: Large group on teal carpet, girl in foreground looking at camera
 *   Primary: Stories #1 (éducation)
 *   Secondary: Action 05 (soutien scolaire)
 *
 * projects/vocational-sewing-class
 *   Content: Young women at table watching instructor draw garment pattern on whiteboard
 *   Primary: Story #2 (autonomie)
 *   Secondary: Action 02 (ateliers de couture)
 *
 * projects/road-safety-books
 *   Content: Boys in classroom celebrating, holding educational books and notebooks
 *   Primary: Book section (code de la route)
 *   Secondary: Action 06 (distribution de fournitures)
 *
 * stories/community-classroom-behind
 *   Content: View from behind students, girls in colorful headscarves on red carpet
 *   Primary: Community CTA
 *   Secondary: Action 04 (éducation des jeunes filles)
 */

export type SiteImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export const images = {
  hero: {
    src: assetPath("/images/hero/education-classroom-focus.png"),
    alt: "Enfants assis sur un tapis rouge dans une salle de classe éclairée, concentrés sur leur apprentissage",
    objectPosition: "center 42%",
  },
  literacyWriting: {
    src: assetPath("/images/education/literacy-writing-session.png"),
    alt: "Quatre enfants écrivant attentivement sur des feuilles posées sur un tapis vert",
    objectPosition: "center 55%",
  },
  classroomTealWide: {
    src: assetPath("/images/education/classroom-teal-wide.png"),
    alt: "Grande salle de classe avec de nombreux enfants assis sur un tapis bleu-vert, absorbés par leur travail",
    objectPosition: "center 45%",
  },
  classroomTealGroup: {
    src: assetPath("/images/education/classroom-teal-group.png"),
    alt: "Groupe d'enfants en classe sur un tapis bleu-vert, certains écrivant sur des feuilles blanches",
    objectPosition: "55% 50%",
  },
  vocationalSewing: {
    src: assetPath("/images/projects/vocational-sewing-class.png"),
    alt: "Jeunes femmes assises autour d'une table, suivant une formation avec un schéma dessiné au tableau",
    objectPosition: "center center",
  },
  roadSafetyBooks: {
    src: assetPath("/images/projects/road-safety-books.png"),
    alt: "Enfants en classe montrant avec enthousiasme leurs cahiers et livres éducatifs",
    objectPosition: "center 40%",
  },
  communityClassroom: {
    src: assetPath("/images/stories/community-classroom-behind.png"),
    alt: "Vue depuis l'arrière d'une classe où des filles en foulards colorés participent à une session d'apprentissage",
    objectPosition: "center 35%",
  },
} as const satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
