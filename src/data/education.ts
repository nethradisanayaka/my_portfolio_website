export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  period: string;
  title: string;
  points: string[];
  badges?: { label: string; value: string }[];
}

export const education: EducationItem[] = [
  {
    id: "usjp",
    institution: "University of Sri Jayewardenepura",
    location: "Nugegoda, Colombo, Sri Lanka",
    period: "April 2023 \u2013 Present",
    title: "Bachelor\u2019s Honours Degree in Computer Science",
    points: [
      "Followed the subject combination of Mathematics, Physics, and Computer Science.",
      "Duration of the interdisciplinary foundation: June 2023 \u2013 May 2026.",
      "Qualified to pursue a special degree in any of the three disciplines.",
      "Chose to specialize in Computer Science.",
    ],
  },
  {
    id: "bandaranayaka",
    institution: "Bandaranayaka Girls National School",
    location: "Ampara, Sri Lanka",
    period: "2018 \u2013 2020",
    title: "G.C.E. Advanced Level Examination \u00b7 Mathematics Stream",
    points: [
      "Subjects: Combined Mathematics, Chemistry, and Physics.",
      "Examination: August 2020.",
      "Results: 3 C passes.",
      "Z-score: 1.069.",
    ],
  },
  {
    id: "gamini",
    institution: "Gamini National College",
    location: "Ampara, Sri Lanka",
    period: "2008 \u2013 2017",
    title: "Primary & Secondary Education",
    points: [
      "G.C.E. Ordinary Level Examination \u2014 December 2017: Results A7 B1 C1.",
      "Fifth Grade Scholarship Examination \u2014 August 2011: Passed with a score of 141.",
    ],
  },
];