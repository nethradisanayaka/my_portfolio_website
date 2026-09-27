export type SkillCategory = "technical" | "professional";

export interface SkillItem {
  name: string;
  evidence: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  category: SkillCategory;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "computer-science",
    title: "Computer science",
    description: "Course-based evidence from the undergraduate transcript",
    category: "technical",
    items: [
      {
        name: "Programming foundations",
        evidence: "Introduction to Computer Programming; Object Oriented Programming; Computer Programming Laboratory",
      },
      {
        name: "Algorithms and data structures",
        evidence: "Data Structures and Algorithms I",
      },
      {
        name: "Software engineering",
        evidence: "Software Engineering I and Software Engineering II",
      },
      {
        name: "Systems and architecture",
        evidence: "Computer System Organization; Computer System Architecture; Operating Systems",
      },
      {
        name: "Data and knowledge representation",
        evidence: "Database Management Systems; Knowledge Representation",
      },
      {
        name: "Computer graphics",
        evidence: "Computer Graphics",
      },
    ],
  },
  {
    id: "quantitative",
    title: "Quantitative foundation",
    description: "Mathematical and physical reasoning documented by coursework",
    category: "technical",
    items: [
      {
        name: "Logic and abstraction",
        evidence: "Fundamentals of Logic and Set Theory; Real Analysis I",
      },
      {
        name: "Modelling and computation",
        evidence: "Differential Equations; Partial Differential Equations; Numerical Methods",
      },
      {
        name: "Linear algebra",
        evidence: "Linear Algebra I and Linear Algebra II",
      },
      {
        name: "Experimental and physical science",
        evidence: "Mechanics; Electricity and Magnetism; practical and electronics coursework",
      },
    ],
  },
  {
    id: "transferable",
    title: "Professional and transferable",
    description: "Capabilities evidenced by the academic record, not self-rated scores",
    category: "professional",
    items: [
      {
        name: "Analytical reasoning",
        evidence: "Logic, analysis, linear algebra, numerical methods, and modelling courses",
      },
      {
        name: "Problem solving",
        evidence: "Algorithms, data structures, differential equations, and partial differential equations",
      },
      {
        name: "Interdisciplinary thinking",
        evidence: "Combined Mathematics, Physics, and Computer Science foundation",
      },
      {
        name: "Consistent study and follow-through",
        evidence: "37 recorded courses, 60 credits, and an overall GPA of 3.3419",
      },
      {
        name: "Deliberate decision-making",
        evidence: "Selected Computer Science after the interdisciplinary foundation",
      },
    ],
  },
];

export const skillCategoryLabels: Record<SkillCategory, string> = {
  technical: "Technical and academic",
  professional: "Professional and transferable",
};
