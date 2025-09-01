export interface Student {
  id: string;
  name: string;
  email: string;
  currentLevel: number;
  progress: number;
  completedLessons: string[];
  achievements: Achievement[];
}

export interface Level {
  id: number;
  name: string;
  description: string;
  color: string;
  lessons: Lesson[];
  requiredScore: number;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'vocabulary' | 'grammar' | 'listening' | 'speaking' | 'reading';
  content: LessonContent;
  exercises: Exercise[];
  audioUrl?: string;
}

export interface LessonContent {
  text: string;
  vocabulary?: VocabularyItem[];
  grammar?: GrammarRule[];
  examples?: string[];
}

export interface VocabularyItem {
  word: string;
  translation: string;
  pronunciation: string;
  example: string;
  imageUrl?: string;
}

export interface GrammarRule {
  rule: string;
  explanation: string;
  examples: string[];
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'pronunciation' | 'matching';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  feedback: string;
  points?: number;
}

export interface ModuleQuiz {
  id: string;
  moduleId: number;
  title: string;
  description: string;
  questions: QuizQuestion[];
  passingScore: number;
  totalPoints: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'fill-blank' | 'matching';
  options?: string[];
  correctAnswer: string | string[];
  points: number;
  feedback: string;
}

export interface LessonScore {
  lessonId: string;
  score: number;
  maxScore: number;
  completedAt: Date;
}

export interface ModuleScore {
  moduleId: number;
  score: number;
  maxScore: number;
  quizScore?: number;
  quizMaxScore?: number;
  completedAt?: Date;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: Date;
}