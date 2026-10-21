export interface BrandStatement {
  identity: string;
  values: string;
  interests: string;
  direction: string;
}

export interface BrandCharacteristic {
  id: string;
  name: string;
  summary: string;
  experience: string;
  action: string;
  result: string;
  lesson: string;
  relevance: string;
}

export const brandStatement: BrandStatement = {
  identity:
    "I am a Computer Science Honours undergraduate at the University of Sri Jayewardenepura, building a technical practice on a foundation in mathematics, physics, and computing.",
  values:
    "I value clear evidence, steady effort, and the willingness to keep learning when a subject or result requires a different approach.",
  interests:
    "My current academic interests are computer science, mathematical foundations, and the practical use of quantitative methods to understand and solve problems.",
  direction:
    "I am working toward a focused computer science direction that connects technical foundations with research, projects, and professional problem solving.",
};

export const brandCharacteristics: BrandCharacteristic[] = [
  {
    id: "foresighted",
    name: "Foresighted",
    summary: "I connect broad preparation with deliberate specialization.",
    experience:
      "My degree began with a combined Mathematics, Physics, and Computer Science foundation before I selected a special degree.",
    action:
      "I studied across the three disciplines and then chose Computer Science as the area for further specialization.",
    result:
      "The current academic identity is a Computer Science Honours undergraduate with a deliberately broad base.",
    lesson:
      "A wide foundation can help me make a more informed decision about where to deepen my expertise.",
    relevance:
      "This habit supports career planning, technical prioritization, and learning how one area connects to another.",
  },
  {
    id: "resilient",
    name: "Resilient",
    summary: "I treat progress as sustained work across varied subjects.",
    experience:
      "The academic record spans results from C- in Analog and Digital Electronics to A+ in Computer Graphics, Software Engineering II, and Thermodynamics.",
    action:
      "I continued through the recorded course sequence across Computer Science, Mathematics, and Physics.",
    result:
      "The CV records 60 credits and an overall GPA of 3.3419, alongside the current degree programme.",
    lesson:
      "A single result is one data point; returning to fundamentals and continuing are essential parts of technical growth.",
    relevance:
      "This is relevant to iterative problem solving, learning unfamiliar systems, and staying accountable to long-term goals.",
  },
  {
    id: "analytical",
    name: "Analytical",
    summary: "I use mathematical and computational reasoning to structure problems.",
    experience:
      "My coursework includes logic and set theory, real analysis, linear algebra, numerical methods, differential equations, and partial differential equations.",
    action:
      "I engaged with formal and quantitative methods alongside core computer science subjects such as algorithms, databases, and operating systems.",
    result:
      "Several mathematics and computer science courses are recorded with A or A+ grades.",
    lesson:
      "Breaking a problem into explicit assumptions, models, and testable steps makes complex work more manageable.",
    relevance:
      "That approach transfers to research questions, software design, data analysis, and technical decision making.",
  },
  {
    id: "interdisciplinary",
    name: "Interdisciplinary",
    summary: "I can connect computational work with mathematical and physical perspectives.",
    experience:
      "The degree foundation explicitly combines Mathematics, Physics, and Computer Science.",
    action:
      "I studied logic, analysis, physics, electronics, programming, systems, and databases as parts of one academic record.",
    result:
      "The CV shows an interdisciplinary foundation that led to a Computer Science specialization choice.",
    lesson:
      "Different disciplines offer different lenses for understanding a problem.",
    relevance:
      "That perspective is useful in collaborative technical environments where problems do not fit neatly into one discipline.",
  },
  {
    id: "growth-oriented",
    name: "Growth-oriented",
    summary: "I see learning as an ongoing part of professional identity.",
    experience:
      "The academic profile explicitly emphasizes continuous learning, and the CV records 37 courses across three disciplines.",
    action:
      "I built a broad academic base and used it to move toward a focused Computer Science special degree.",
    result:
      "The current position is a continuing undergraduate programme with a recorded GPA of 3.3419.",
    lesson:
      "Development becomes more useful when it is connected to a clear next step rather than treated as a list of completed items.",
    relevance:
      "This mindset supports continuing professional development, staying current with new tools, and approaching unfamiliar challenges constructively.",
  },
];
