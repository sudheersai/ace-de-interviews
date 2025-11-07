export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  difficulty: 'easy' | 'medium' | 'hard';
  skill: string;
  category: string;
}

export interface QuizLevel {
  level: number;
  questions: QuizQuestion[];
  timePerQuestion: number; // in seconds
  totalTime: number; // in seconds
  requiredScore: number; // to pass to next level
}

export interface QuizState {
  currentLevel: number;
  currentQuestionIndex: number;
  score: number;
  answers: (number | null)[];
  timeRemaining: number;
  isCompleted: boolean;
}
