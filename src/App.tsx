import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LessonView } from './components/LessonView';
import { ModuleQuizView } from './components/ModuleQuizView';
import { levels } from './data/levels';
import { moduleQuizzes } from './data/moduleQuizzes';
import { Lesson, LessonScore, ModuleScore, ModuleQuiz } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'lesson' | 'quiz'>('dashboard');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<ModuleQuiz | null>(null);
  const [lessonScores, setLessonScores] = useState<LessonScore[]>([]);
  const [moduleScores, setModuleScores] = useState<ModuleScore[]>([]);
  const [currentLevel, setCurrentLevel] = useState(1);

  // Helper functions
  const getCompletedLessons = () => {
    return lessonScores.filter(score => score.score === score.maxScore).map(score => score.lessonId);
  };

  const getLessonScore = (lessonId: string) => {
    return lessonScores.find(score => score.lessonId === lessonId);
  };

  const getModuleProgress = (moduleId: number) => {
    const moduleLevel = levels.find(l => l.id === moduleId);
    if (!moduleLevel) return 0;
    
    const moduleLessonIds = moduleLevel.lessons.map(l => l.id);
    const completedModuleLessons = lessonScores.filter(score => 
      moduleLessonIds.includes(score.lessonId) && score.score === score.maxScore
    ).length;
    
    return Math.round((completedModuleLessons / moduleLevel.lessons.length) * 100);
  };

  const isLessonUnlocked = (lessonId: string, moduleId: number) => {
    const moduleLevel = levels.find(l => l.id === moduleId);
    if (!moduleLevel) return false;
    
    const lessonIndex = moduleLevel.lessons.findIndex(l => l.id === lessonId);
    if (lessonIndex === 0) return true; // First lesson is always unlocked
    
    // Check if previous lesson is completed
    const previousLesson = moduleLevel.lessons[lessonIndex - 1];
    const previousScore = getLessonScore(previousLesson.id);
    return previousScore && previousScore.score === previousScore.maxScore;
  };

  const isModuleQuizUnlocked = (moduleId: number) => {
    const moduleLevel = levels.find(l => l.id === moduleId);
    if (!moduleLevel) return false;
    
    // All lessons in module must be completed
    const moduleLessonIds = moduleLevel.lessons.map(l => l.id);
    const completedModuleLessons = lessonScores.filter(score => 
      moduleLessonIds.includes(score.lessonId) && score.score === score.maxScore
    ).length;
    
    return completedModuleLessons === moduleLevel.lessons.length;
  };

  const handleStartLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setCurrentView('lesson');
  };

  const handleStartQuiz = (quiz: ModuleQuiz) => {
    setSelectedQuiz(quiz);
    setCurrentView('quiz');
  };

  const handleLessonComplete = (score: number, maxScore: number) => {
    if (!selectedLesson) return;
    
    const newScore: LessonScore = {
      lessonId: selectedLesson.id,
      score,
      maxScore,
      completedAt: new Date()
    };
    
    // Update or add lesson score
    setLessonScores(prev => {
      const existing = prev.findIndex(s => s.lessonId === selectedLesson.id);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = newScore;
        return updated;
      }
      return [...prev, newScore];
    });
    
    setCurrentView('dashboard');
  };

  const handleQuizComplete = (score: number, maxScore: number) => {
    if (!selectedQuiz) return;
    
    const moduleScore: ModuleScore = {
      moduleId: selectedQuiz.moduleId,
      score: 0, // Will be calculated
      maxScore: 0, // Will be calculated
      quizScore: score,
      quizMaxScore: maxScore,
      completedAt: new Date()
    };
    
    // Calculate total module score (lessons + quiz)
    const moduleLevel = levels.find(l => l.id === selectedQuiz.moduleId);
    if (moduleLevel) {
      const moduleLessonIds = moduleLevel.lessons.map(l => l.id);
      const moduleLessonScores = lessonScores.filter(s => moduleLessonIds.includes(s.lessonId));
      
      const totalLessonScore = moduleLessonScores.reduce((sum, s) => sum + s.score, 0);
      const totalLessonMaxScore = moduleLessonScores.reduce((sum, s) => sum + s.maxScore, 0);
      
      moduleScore.score = totalLessonScore + score;
      moduleScore.maxScore = totalLessonMaxScore + maxScore;
    }
    
    // Update module scores
    setModuleScores(prev => {
      const existing = prev.findIndex(s => s.moduleId === selectedQuiz.moduleId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = moduleScore;
        return updated;
      }
      return [...prev, moduleScore];
    });
    
    // Check if next level should be unlocked
    const moduleProgress = getModuleProgress(selectedQuiz.moduleId);
    if (moduleProgress === 100 && currentLevel < levels.length) {
      setCurrentLevel(currentLevel + 1);
    }
    
    setCurrentView('dashboard');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  if (currentView === 'quiz' && selectedQuiz) {
    return (
      <ModuleQuizView
        quiz={selectedQuiz}
        onComplete={handleQuizComplete}
        onBack={handleBackToDashboard}
      />
    );
  }

  if (currentView === 'lesson' && selectedLesson) {
    return (
      <LessonView
        lesson={selectedLesson}
        onComplete={handleLessonComplete}
        onBack={handleBackToDashboard}
      />
    );
  }

  return (
    <Dashboard 
      onStartLesson={handleStartLesson}
      onStartQuiz={handleStartQuiz}
      lessonScores={lessonScores}
      moduleScores={moduleScores}
      currentLevel={currentLevel}
      getCompletedLessons={getCompletedLessons}
      getLessonScore={getLessonScore}
      getModuleProgress={getModuleProgress}
      isLessonUnlocked={isLessonUnlocked}
      isModuleQuizUnlocked={isModuleQuizUnlocked}
    />
  );
}

export default App;