import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { Exercise } from '../types';
import { VoiceButton } from './VoiceButton';

interface ExerciseCardProps {
  exercise: Exercise;
  onAnswer: (correct: boolean) => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    const correct = answer === exercise.correctAnswer;
    setIsCorrect(correct);
    onAnswer(correct);
  };

  const resetExercise = () => {
    setSelectedAnswer('');
    setIsAnswered(false);
    setIsCorrect(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex-1">
          {exercise.question}
        </h3>
        <VoiceButton text={exercise.question} className="ml-2" />
      </div>

      {exercise.type === 'multiple-choice' && exercise.options && (
        <div className="space-y-3">
          {exercise.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={isAnswered}
              className={`
                w-full p-3 text-left rounded-lg border-2 transition-all duration-200
                ${isAnswered
                  ? option === exercise.correctAnswer
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : option === selectedAnswer && !isCorrect
                    ? 'border-red-500 bg-red-50 text-red-800'
                    : 'border-gray-200 bg-gray-50 text-gray-600'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }
                ${!isAnswered && 'hover:scale-[1.02]'}
              `}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {isAnswered && option === exercise.correctAnswer && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
                {isAnswered && option === selectedAnswer && !isCorrect && (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {isAnswered && (
        <div className="mt-4 space-y-3">
          <div className={`
            p-3 rounded-lg border-l-4
            ${isCorrect 
              ? 'border-green-500 bg-green-50 text-green-800' 
              : 'border-red-500 bg-red-50 text-red-800'
            }
          `}>
            <div className="flex items-center gap-2 mb-1">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
              <span className="font-medium">
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </span>
              <VoiceButton 
                text={isCorrect ? 'Correct! Well done!' : 'Incorrect. Try again!'} 
                size="sm" 
                className="ml-2"
              />
            </div>
            <p className="text-sm">{exercise.feedback}</p>
            <div className="mt-2">
              <VoiceButton 
                text={exercise.feedback} 
                size="sm"
              />
            </div>
          </div>

          <button
            onClick={resetExercise}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};