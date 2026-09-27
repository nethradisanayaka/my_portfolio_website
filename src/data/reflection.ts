export interface ReflectionEntry {
  title: string;
  body: string;
}

export interface GrowthStory {
  challenge: string;
  action: string;
  result: string;
  lesson: string;
  growth: string;
}

export const selfReflection: ReflectionEntry[] = [
  {
    title: "How I see myself",
    body:
      "I see myself as a developing Computer Science professional who benefits from a broad mathematics and physics foundation. I am still refining my research direction, so I want my future claims to remain grounded in evidence and completed work.",
  },
  {
    title: "How I present myself professionally",
    body:
      "I present myself as a Computer Science Honours undergraduate with an interdisciplinary academic foundation. I distinguish what I have studied from what I plan to study, and I use coursework, projects, and research as evidence before making broader claims.",
  },
];

export const growthStory: GrowthStory = {
  challenge:
    "The academic record is not a straight line: it includes 37 courses across three disciplines and grades ranging from C- to A+.",
  action:
    "I continued through the recorded sequence, completed the interdisciplinary foundation, and selected Computer Science as the special degree.",
  result:
    "The CV records 60 credits, an overall GPA of 3.3419, and an ongoing Computer Science degree.",
  lesson:
    "Progress can be built by treating varied results as information, returning to fundamentals, and keeping a long-term direction.",
  growth:
    "I want to carry this reflective practice into future research, projects, and professional work, where learning will continue beyond the current transcript.",
};
