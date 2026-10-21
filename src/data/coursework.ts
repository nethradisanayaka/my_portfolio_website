export type CourseCategory = "Computer Science" | "Mathematics" | "Physics";

export interface CourseworkItem {
  code: string;
  credits: number;
  name: string;
  grade: string;
  category: CourseCategory;
}

function categoryOf(code: string): CourseCategory {
  if (code.startsWith("CSC")) return "Computer Science";
  if (code.startsWith("MAT")) return "Mathematics";
  return "Physics";
}

type Row = readonly [code: string, credits: number, name: string, grade: string];

const rows: Row[] = [
  ["CSC 106", 1.5, "Computer System Organization", "A"],
  ["CSC 107", 2.0, "Introduction to Computer Programming", "B-"],
  ["CSC 108", 1.5, "Software Engineering I", "C+"],
  ["MAT 111", 2.0, "Fundamentals of Logic and Set Theory", "B+"],
  ["MAT 113", 1.0, "Complex Numbers and Vectors", "A"],
  ["MAT 112", 2.0, "Differential Equations", "A+"],
  ["PHY 103", 2.0, "Mechanics and Properties of Matter", "A"],
  ["PHY 104", 1.0, "Electricity and Magnetism", "A"],
  ["PHY 105", 1.0, "Waves and Vibrations", "B+"],
  ["CSC 110", 2.0, "Object Oriented Programming", "A-"],
  ["CSC 111", 1.0, "Computer Programming - Laboratory", "B+"],
  ["CSC 112", 2.0, "Software Engineering II", "A+"],
  ["MAT 122", 2.0, "Calculus", "A-"],
  ["MAT 123", 1.0, "Vector Calculus", "A"],
  ["MAT 121", 2.0, "Linear Algebra I", "A"],
  ["PHY 106", 2.0, "Practical (Semester I, II)", "C+"],
  ["PHY 107", 2.0, "Applied Electricity and Basic Electronics", "A"],
  ["PHY 108", 2.0, "Thermodynamics", "A+"],
  ["CSC 201", 2.0, "Data Structures and Algorithms I", "B+"],
  ["CSC 203", 1.5, "Computer System Architecture", "B"],
  ["CSC 207", 1.5, "Knowledge Representation", "B+"],
  ["MAT 213", 2.0, "Numerical Methods", "B"],
  ["MAT 212", 2.0, "Real Analysis I", "B+"],
  ["MAT 211", 1.0, "Linear Algebra II", "B"],
  ["PHY 201", 2.0, "Optics", "C"],
  ["PHY 202", 2.0, "Analog and Digital Electronics", "C-"],
  ["CSC 208", 2.0, "Operating Systems", "C+"],
  ["CSC 209", 2.0, "Database Management Systems", "A"],
  ["CSC 210", 1.0, "Computer Graphics", "A+"],
  ["MAT 223", 1.0, "Basics of Number Theory", "A"],
  ["MAT 222", 2.0, "Partial Differential Equations", "A+"],
  ["MAT 221", 2.0, "Functions of Several Variables", "A"],
  ["PHY 203", 1.0, "Physics Practical (Optics)", "B-"],
  ["PHY 204", 1.0, "Physics Practical (Electronics)", "A"],
  ["PHY 205", 1.0, "Statistical Physics I", "A-"],
  ["PHY 206", 1.0, "Mathematical Physics I", "A"],
  ["PHY 208", 1.0, "Atomic and Nuclear Physics", "A-"],
];

export const coursework: CourseworkItem[] = rows.map(([code, credits, name, grade]) => ({
  code,
  credits,
  name,
  grade,
  category: categoryOf(code),
}));

export const courseCategories: CourseCategory[] = ["Computer Science", "Mathematics", "Physics"];