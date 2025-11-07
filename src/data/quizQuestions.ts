import { QuizQuestion } from "@/types/quiz";
import { sqlQuestions } from "./sqlQuestions";

// Generate wrong answers based on the question topic
const generateWrongAnswers = (question: string, correctAnswer: string, category: string): string[] => {
  const wrongAnswers: string[] = [];
  
  // Extract key concept from correct answer (first sentence or key phrase)
  const correctConcept = correctAnswer.split(/[.•\n]/)[0].trim();
  
  // Generic wrong answers based on common patterns
  const genericWrong = [
    "This concept is not applicable in this context",
    "This operation is deprecated and no longer supported",
    "This is a client-side operation only",
    "This requires administrative privileges only"
  ];
  
  // Category-specific wrong answers
  const categoryWrong: { [key: string]: string[] } = {
    "Foundational Concepts": [
      "Used primarily for backup operations",
      "Only available in NoSQL databases",
      "Requires external tools to implement"
    ],
    "Keys and Constraints": [
      "Can have multiple instances per table",
      "Only works with numeric values",
      "Automatically creates indexes"
    ],
    "Joins": [
      "Returns only NULL values",
      "Requires identical schemas",
      "Only works with two tables maximum"
    ],
    "Aggregation and Filtering": [
      "Can only be used with numeric data",
      "Must be used with ORDER BY clause",
      "Requires a GROUP BY for all queries"
    ]
  };
  
  // Combine generic and category-specific wrong answers
  const possibleWrong = [...genericWrong, ...(categoryWrong[category] || [])];
  
  // Select 3 wrong answers
  const shuffled = possibleWrong.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

// Convert existing questions to multiple choice format
export const generateQuizQuestions = (skill: string): QuizQuestion[] => {
  const skillQuestions = sqlQuestions.filter(q => q.skill === skill);
  
  return skillQuestions.map((q, index) => {
    const wrongAnswers = generateWrongAnswers(q.question, q.answer, q.category);
    const correctAnswerText = q.answer.split(/[.•\n]/)[0].trim() + ".";
    
    // Randomly position the correct answer
    const correctIndex = Math.floor(Math.random() * 4);
    const options = [...wrongAnswers];
    options.splice(correctIndex, 0, correctAnswerText);
    
    // Assign difficulty based on question index distribution
    let difficulty: 'easy' | 'medium' | 'hard';
    if (index < skillQuestions.length * 0.4) {
      difficulty = 'easy';
    } else if (index < skillQuestions.length * 0.8) {
      difficulty = 'medium';
    } else {
      difficulty = 'hard';
    }
    
    return {
      id: q.id,
      question: q.question,
      options,
      correctAnswer: correctIndex,
      difficulty,
      skill: q.skill,
      category: q.category
    };
  });
};

export const getQuizLevelQuestions = (skill: string, level: number): QuizQuestion[] => {
  const allQuestions = generateQuizQuestions(skill);
  
  switch (level) {
    case 1:
      return allQuestions.filter(q => q.difficulty === 'easy').slice(0, 10);
    case 2:
      return allQuestions.filter(q => q.difficulty === 'medium').slice(0, 10);
    case 3:
      return allQuestions.filter(q => q.difficulty === 'hard').slice(0, 5);
    default:
      return [];
  }
};
