import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { Lesson } from '../types';
import { VocabularyCard } from './VocabularyCard';
import { ExerciseCard } from './ExerciseCard';
import { ProgressBar } from './ProgressBar';

interface LessonViewProps {
  lesson: Lesson;
  onComplete: () => void;
  onBack: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({ lesson, onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [showRepetition, setShowRepetition] = useState(false);

  const totalSteps = (lesson.content.vocabulary?.length || 0) + lesson.exercises.length;

  const handleExerciseAnswer = (exerciseId: string, correct: boolean) => {
    if (correct && !completedExercises.includes(exerciseId)) {
      setCompletedExercises([...completedExercises, exerciseId]);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else if (completedExercises.length === lesson.exercises.length) {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleRepetition = () => {
    setShowRepetition(!showRepetition);
  };

  const getCurrentScore = () => {
    return completedExercises.length;
  };

  const maxScore = lesson.exercises.length;

  const isLessonComplete = () => {
    return completedExercises.length === lesson.exercises.length;
  };

  const renderCurrentContent = () => {
    const vocabularyCount = lesson.content.vocabulary?.length || 0;
    
    if (currentStep < vocabularyCount) {
      // Show vocabulary
      const vocabularyItem = lesson.content.vocabulary![currentStep];
      return (
        <div className="flex justify-center">
          <VocabularyCard item={vocabularyItem} showTranslation={showRepetition} />
        </div>
      );
    } else {
      // Show exercises
      const exerciseIndex = currentStep - vocabularyCount;
      const exercise = lesson.exercises[exerciseIndex];
      return (
        <ExerciseCard
          exercise={exercise}
          onAnswer={(correct) => handleExerciseAnswer(exercise.id, correct)}
        />
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </button>
            
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-900">{lesson.title}</h1>
              <p className="text-sm text-gray-600 capitalize">{lesson.type} lesson</p>
            </div>
            
            <button
              onClick={toggleRepetition}
              className={`
                flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
                ${showRepetition 
                  ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              <RotateCcw className="w-4 h-4" />
              Repetition {showRepetition ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress */}
        <div className="mb-8">
          <ProgressBar
            progress={currentStep + 1}
            total={totalSteps}
            color="bg-gradient-to-r from-purple-500 to-blue-600"
          />
        </div>

        {/* Lesson Content */}
        <div className="mb-8">
          {renderCurrentContent()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>
          
          <div className="text-center">
            <div className="text-sm text-gray-600">
              Score: {getCurrentScore()}/{maxScore} ({Math.round((getCurrentScore() / maxScore) * 100)}%)
            </div>
          </div>
          
          <button
            onClick={nextStep}
            disabled={currentStep >= totalSteps - 1 && !isLessonComplete()}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {currentStep === totalSteps - 1 ? 'Finish Lesson' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};