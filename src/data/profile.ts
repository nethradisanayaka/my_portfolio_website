export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface Profile {
  initials: string;
  name: string;
  fullName: string;
  role: string;
  shortIntro: string;
  professionalStatement: string;
  currentFocus: string;
  academicInterests: string[];
  bio: string;
  location: string;
  university: {
    name: string;
    campus: string;
    department: string;
  };
  gpa: number;
  gpaNote: string;
  photo: string;
  cvUrl: string;
  social: SocialLinks;
}

export const profile: Profile = {
  initials: "YD",
  name: "YMND Disanayaka",
  fullName: "Yapa Mudhiyanselage Nethra Dhananjali Disanayaka",
  role: "Computer Science Honours Undergraduate",
  shortIntro:
    "Computer Science Honours undergraduate building a focused technical practice on a foundation in mathematics, physics, and computing.",
  professionalStatement:
    "I am an undergraduate at the University of Sri Jayewardenepura, currently completing a Bachelor’s Honours degree in Computer Science after an interdisciplinary foundation in Mathematics, Physics, and Computer Science.",
  currentFocus:
    "Completing the Computer Science special degree while identifying the research and professional questions I want to pursue next.",
  academicInterests: [
    "Computer science",
    "Mathematical foundations",
    "Quantitative problem solving",
  ],
  bio: "I am an undergraduate pursuing a Bachelor\u2019s Honours degree in Computer Science at the University of Sri Jayewardenepura, Sri Lanka. My academic foundation is interdisciplinary: I followed Mathematics, Physics, and Computer Science between June 2023 and May 2026, after which I qualified to pursue a special degree in any of the three disciplines and ultimately chose to specialize in Computer Science.",
  location: "Sri Lanka",
  university: {
    name: "University of Sri Jayewardenepura",
    campus: "Nugegoda, Colombo, Sri Lanka",
    department: "Department of Computer Science",
  },
  gpa: 3.3419,
  gpaNote: "Overall GPA based on the undergraduate coursework recorded in the academic CV.",
  photo: "assets/profile.jpg",
  cvUrl: "assets/cv.pdf",
  social: {
    github: "https://github.com/nethradisanayaka",
    linkedin: "https://www.linkedin.com/in/nethra-dhananjali/",
    email: "ymndhananjali@gmail.com",
  },
};