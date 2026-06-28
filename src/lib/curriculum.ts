import {
  Atom,
  BookOpen,
  Brain,
  Calculator,
  GraduationCap,
  Orbit,
  Shapes,
  Sigma,
  Sparkles
} from "lucide-react";

export type LevelCode =
  | "L00"
  | "L01"
  | "L02"
  | "L03"
  | "L04"
  | "L05"
  | "L06"
  | "L07"
  | "L08"
  | "L09"
  | "L10";

export type LearnerLevel = {
  code: LevelCode;
  title: string;
  audience: string;
  mode: string;
  summary: string;
  icon: typeof Sparkles;
};

export const learnerLevels: LearnerLevel[] = [
  {
    code: "L00",
    title: "Nursery",
    audience: "Pre-reading learners",
    mode: "Audio, pictures, tap",
    summary: "Counting, shapes, patterns, and comparison through one-screen activities.",
    icon: Sparkles
  },
  {
    code: "L01",
    title: "Primary Foundations",
    audience: "Early school learners",
    mode: "Guided visual lessons",
    summary: "Numbers, arithmetic, time, money, measurement, and simple problem solving.",
    icon: Shapes
  },
  {
    code: "L03",
    title: "Middle School",
    audience: "Growing independent learners",
    mode: "Step-by-step lessons",
    summary: "Fractions, ratios, expressions, equations, geometry, probability, and data.",
    icon: Calculator
  },
  {
    code: "L04",
    title: "High School",
    audience: "Exam and concept builders",
    mode: "Worked examples",
    summary: "Algebra, functions, trigonometry, geometry, statistics, and exam practice.",
    icon: BookOpen
  },
  {
    code: "L07",
    title: "Undergraduate",
    audience: "University learners",
    mode: "Formal concepts",
    summary: "Calculus, linear algebra, discrete math, probability, and mathematical modeling.",
    icon: GraduationCap
  },
  {
    code: "L10",
    title: "Research Math",
    audience: "Researchers and specialists",
    mode: "Models and derivations",
    summary: "Optimization, control, simulation, aerospace math, and research foundations.",
    icon: Orbit
  }
];

export const topicGroups = [
  {
    title: "Early Numeracy",
    description: "Counting, shapes, matching, ordering, and patterns.",
    level: "L00-L01",
    icon: Shapes
  },
  {
    title: "Arithmetic",
    description: "Addition, subtraction, multiplication, division, fractions, and decimals.",
    level: "L01-L03",
    icon: Calculator
  },
  {
    title: "Algebra",
    description: "Expressions, equations, functions, graphs, and symbolic reasoning.",
    level: "L03-L06",
    icon: Sigma
  },
  {
    title: "Advanced and Applied",
    description: "Calculus, linear algebra, modeling, optimization, and scientific computing.",
    level: "L07-L10",
    icon: Atom
  }
];

export const nurseryActivity = {
  title: "Count the Stars",
  prompt: "Tap the group with three stars.",
  caregiverNote:
    "Read the prompt aloud or use the speaker button. Let the child count by touching each star.",
  choices: [
    { id: "two", label: "2", marks: ["*", "*"], correct: false },
    { id: "three", label: "3", marks: ["*", "*", "*"], correct: true },
    { id: "four", label: "4", marks: ["*", "*", "*", "*"], correct: false }
  ]
};

export const pedagogyModes = [
  "Nursery: listen, look, tap.",
  "School: read, watch, practice.",
  "University: define, derive, prove.",
  "Research: model, compute, validate."
];

