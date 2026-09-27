export interface InterestItem {
  id: string;
  label: string;
  description: string;
  evidence: string;
}

export const interests: InterestItem[] = [
  {
    id: "computer-science",
    label: "Computer science",
    description:
      "My current special-degree focus, supported by study of programming, software engineering, algorithms, systems, databases, and graphics.",
    evidence: "Degree choice and Computer Science coursework in the CV",
  },
  {
    id: "mathematical-foundations",
    label: "Mathematical foundations",
    description:
      "Logic, analysis, linear algebra, numerical methods, and differential equations provide a quantitative basis for technical problem solving.",
    evidence: "Mathematics coursework and recorded grades in the CV",
  },
  {
    id: "interdisciplinary-problem-solving",
    label: "Interdisciplinary problem solving",
    description:
      "The Mathematics, Physics, and Computer Science combination offers different perspectives for modelling and understanding a problem.",
    evidence: "Interdisciplinary degree foundation recorded in the CV",
  },
];

export const interestsNote =
  "These are current study interests grounded in the academic record, not claims of a confirmed research specialism. Replace them with specific research interests when those are available.";