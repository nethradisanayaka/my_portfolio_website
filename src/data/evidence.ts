export interface EvidenceItem {
  id: string;
  category: string;
  title: string;
  period: string;
  role: string;
  activity: string;
  outcome: string;
  lesson: string;
  relevance: string;
}

export const evidenceItems: EvidenceItem[] = [
  {
    id: "interdisciplinary-foundation",
    category: "University study",
    title: "Interdisciplinary academic foundation",
    period: "June 2023 – May 2026",
    role: "Undergraduate",
    activity: "Followed the Mathematics, Physics, and Computer Science subject combination.",
    outcome: "Qualified to pursue a special degree in any of the three disciplines and chose Computer Science.",
    lesson: "Broad preparation can support a deliberate decision about specialization.",
    relevance: "This is a foundation for connecting technical work with quantitative and physical perspectives.",
  },
  {
    id: "undergraduate-coursework",
    category: "Academic work",
    title: "Broad undergraduate course record",
    period: "April 2023 – Present",
    role: "Student",
    activity: "Studied 37 recorded courses across Computer Science, Mathematics, and Physics.",
    outcome: "The CV records 60 credits and an overall GPA of 3.3419.",
    lesson: "Sustained study across varied subjects builds a transferable base for future technical work.",
    relevance: "The record provides evidence for analytical learning, follow-through, and continued learning.",
  },
  {
    id: "advanced-level",
    category: "Academic preparation",
    title: "Advanced Level mathematics stream",
    period: "2018 – 2020",
    role: "Student",
    activity: "Studied Combined Mathematics, Chemistry, and Physics for the G.C.E. Advanced Level Examination.",
    outcome: "Received 3 C passes with a Z-score of 1.069 in August 2020.",
    lesson: "A challenging examination result can be part of a longer academic development story.",
    relevance: "It shows an earlier foundation in quantitative and science subjects before university study.",
  },
  {
    id: "scholarship-examination",
    category: "Academic recognition",
    title: "Fifth Grade Scholarship Examination",
    period: "August 2011",
    role: "Student",
    activity: "Participated in the Fifth Grade Scholarship Examination.",
    outcome: "Passed with a score of 141.",
    lesson: "Academic development can be traced across different stages of education.",
    relevance: "It adds context to a long-term record of academic participation and progression.",
  },
];

export const evidenceNote =
  "The supplied record contains academic experiences and results, not documented clubs, internships, volunteering, leadership, or research activities. Those categories are not invented here.";
