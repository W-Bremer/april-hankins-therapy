export type Location = {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  distance: string;
  blurb: string;
  neighborhoods: string[];
};

export const LOCATIONS: Location[] = [
  {
    slug: "canal-fulton",
    city: "Canal Fulton",
    metaTitle:
      "Therapist in Canal Fulton, OH | EMDR for Moms | April Hankins, LPCC",
    metaDescription:
      "Looking for a therapist in Canal Fulton, Ohio? April Hankins, LPCC offers EMDR therapy for moms healing trauma — right on Cherry Street. In-person & virtual. Free 15-min consult.",
    distance: "Downtown — 919 Cherry St East, Suite 103",
    intro:
      "April's office is right here in downtown Canal Fulton on Cherry Street — a warm, unhurried space to do brave work close to home.",
    blurb:
      "As a Canal Fulton-based counselor, April offers in-person EMDR therapy for moms and cycle-breakers, plus virtual sessions for the days getting out the door isn't happening.",
    neighborhoods: ["Downtown Canal Fulton", "Lawrence Township", "Milan Township"],
  },
  {
    slug: "massillon",
    city: "Massillon",
    metaTitle:
      "EMDR Therapist Serving Massillon, OH | April Hankins, LPCC",
    metaDescription:
      "EMDR therapy for Massillon, Ohio moms with April Hankins, LPCC — just minutes away in Canal Fulton, plus virtual sessions across Ohio. Heal trauma at the root. Free consult.",
    distance: "About 10 minutes from Canal Fulton",
    intro:
      "Just up the road from Massillon, April helps moms heal childhood, spiritual, and sexual trauma with EMDR.",
    blurb:
      "Massillon clients are a short drive from April's Canal Fulton office — and virtual sessions make weekly support easy to fit around work and kids.",
    neighborhoods: ["Downtown Massillon", "Perry Heights", "Reedurban"],
  },
  {
    slug: "north-canton",
    city: "North Canton",
    metaTitle:
      "Therapist for Moms in North Canton, OH | EMDR | April Hankins, LPCC",
    metaDescription:
      "North Canton moms: heal trauma with EMDR therapy from April Hankins, LPCC. In-person nearby in Canal Fulton or virtual across Ohio. Perinatal, spiritual & childhood trauma. Free consult.",
    distance: "About 20 minutes from Canal Fulton",
    intro:
      "April supports North Canton moms navigating overwhelm, matrescence, and old trauma with warm, root-level EMDR work.",
    blurb:
      "Whether you come to Canal Fulton in person or meet virtually from North Canton, you'll find a collaborative, judgment-free space to break cycles.",
    neighborhoods: ["Downtown North Canton", "Hoover District", "Jackson Township"],
  },
  {
    slug: "canton",
    city: "Canton",
    metaTitle:
      "EMDR Therapy Serving Canton, OH | Trauma Therapist | April Hankins, LPCC",
    metaDescription:
      "Canton, Ohio moms — work with April Hankins, LPCC, an EMDRIA-member trauma therapist in nearby Canal Fulton. In-person & virtual EMDR for childhood, spiritual & perinatal trauma.",
    distance: "About 25 minutes from Canal Fulton",
    intro:
      "For moms across Canton and greater Stark County, April offers EMDR therapy that gets to the root of overwhelm and trauma.",
    blurb:
      "Canton clients can meet in person in Canal Fulton or virtually from home — same warm, honest, collaborative work either way.",
    neighborhoods: ["Downtown Canton", "Plain Township", "Meyers Lake"],
  },
  {
    slug: "akron",
    city: "Akron",
    metaTitle:
      "EMDR Therapist Serving Akron, OH | April Hankins, LPCC",
    metaDescription:
      "Akron-area moms: April Hankins, LPCC offers EMDR therapy for trauma, deconstruction & maternal mental health. Virtual across Ohio or in-person in nearby Canal Fulton. Free 15-min consult.",
    distance: "About 30 minutes from Canal Fulton",
    intro:
      "April welcomes Akron-area moms — virtually across Ohio, or in person at her Canal Fulton office to the south.",
    blurb:
      "From faith deconstruction to postpartum overwhelm, April helps Akron moms heal what the past left behind and reclaim their spark.",
    neighborhoods: ["Downtown Akron", "Highland Square", "Green"],
  },
];

export const getLocation = (slug: string) =>
  LOCATIONS.find((l) => l.slug === slug);
