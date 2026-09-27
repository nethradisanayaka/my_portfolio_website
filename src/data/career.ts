export type GoalHorizon = "Current" | "Short term" | "Medium term" | "Long term";
export type WorkStatus = "In Progress" | "Completed" | "Planned";

export interface CareerGoal {
  id: string;
  horizon: GoalHorizon;
  title: string;
  description: string;
}

export interface WorkInProgressItem {
  id: string;
  title: string;
  status: WorkStatus;
  description: string;
  role: string;
  methods: string;
  nextMilestone?: string;
}

export interface ProfessionalRecordItem {
  id: string;
  title: string;
  status: string;
  description: string;
}

export const careerGoals: CareerGoal[] = [
  {
    id: "current-degree",
    horizon: "Current",
    title: "Complete the Computer Science special degree",
    description:
      "I am currently an undergraduate in the Computer Science Honours programme at the University of Sri Jayewardenepura, building on my Mathematics, Physics, and Computer Science foundation.",
  },
];

export const workInProgress: WorkInProgressItem[] = [
  {
    id: "degree",
    title: "Bachelor’s Honours Degree in Computer Science",
    status: "In Progress",
    description:
      "Current undergraduate study at the University of Sri Jayewardenepura, following the interdisciplinary Mathematics, Physics, and Computer Science foundation recorded in the academic CV.",
    role: "Undergraduate / student",
    methods: "Coursework in Computer Science, Mathematics, and Physics",
  },
];

export const professionalRecord: ProfessionalRecordItem[] = [
  {
    id: "referees",
    title: "Referees",
    status: "Available on request",
    description: "Academic and professional referees are available upon request.",
  },
];
