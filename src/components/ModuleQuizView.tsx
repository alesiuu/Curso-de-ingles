import React, { useState } from 'react';
import { ArrowLeft, Clock, Trophy, CheckCircle, XCircle } from 'lucide-react';
import { ModuleQuiz, QuizQuestion } from '../types';
import { VoiceButton } from './VoiceButton';
import { ProgressBar } from './ProgressBar';

interface ModuleQuizViewProps {
  quiz: ModuleQuiz;
  onComplete: (score: number, maxScore: number) => void;
  onBack: () => void;
}

export const ModuleQuizView: React.FC<ModuleQuizViewProps> = ({ quiz, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [timeStarted] = useState(new Date());

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishQuiz = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let score = 0;
    quiz.questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        score += question.points;
      }
    });
    return score;
  };

  const getTimeElapsed = () => {
    const now = new Date();
    const elapsed = Math.floor((now.getTime() - timeStarted.getTime()) / 1000 / 60);
    return elapsed;
  };

  const handleCompleteQuiz = () => {
    const score = calculateScore();
    onComplete(score, quiz.totalPoints);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / quiz.totalPoints) * 100);
    const passed = score >= quiz.passingScore;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
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
              <h1 className="text-xl font-bold text-gray-900">Quiz Results</h1>
              <div></div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
              passed ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {passed ? (
                <Trophy className="w-12 h-12 text-green-600" />
              ) : (
                <XCircle className="w-12 h-12 text-red-600" />
              )}
            </div>

            <h2 className="text-3xl font-bold mb-4">
              {passed ? '¡Felicidades!' : 'Sigue Practicando'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">{score}</div>
                <div className="text-sm text-gray-600">Points Earned</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">{percentage}%</div>
                <div className="text-sm text-gray-600">Final Score</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600">{getTimeElapsed()}</div>
                <div className="text-sm text-gray-600">Minutes</div>
              </div>
            </div>

            <div className="mb-8">
              <ProgressBar
                progress={score}
                total={quiz.totalPoints}
                color={passed ? 'bg-green-500' : 'bg-red-500'}
                showLabel={false}
              />
            </div>

            <div className="space-y-4 mb-8">
              {quiz.questions.map((question, index) => {
                const userAnswer = answers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className={`
                    p-4 rounded-lg border-l-4 text-left
                    ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}
                  `}>
                    <div className="flex items-center gap-2 mb-2">
                      {isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                      <span className="font-medium">Question {index + 1}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{question.question}</p>
                    <div className="text-xs">
                      <span className="text-gray-600">Your answer: </span>
                      <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                        {userAnswer || 'No answer'}
                      </span>
                      {!isCorrect && (
                        <>
                          <br />
                          <span className="text-gray-600">Correct answer: </span>
                          <span className="text-green-600">{question.correctAnswer}</span>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleCompleteQuiz}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Continue to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
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
              <h1 className="text-xl font-bold text-gray-900">{quiz.title}</h1>
              <p className="text-sm text-gray-600">{quiz.description}</p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{getTimeElapsed()} min</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <ProgressBar
            progress={currentQuestion + 1}
            total={quiz.questions.length}
            color="bg-gradient-to-r from-purple-500 to-blue-600"
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                  Question {currentQuestion + 1} of {quiz.questions.length}
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {question.points} points
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {question.question}
              </h2>
            </div>
            <VoiceButton text={question.question} className="ml-4" />
          </div>

          {question.type === 'multiple-choice' && question.options && (
            <div className="space-y-3 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(question.id, option)}
                  className={`
                    w-full p-4 text-left rounded-lg border-2 transition-all duration-200
                    ${answers[question.id] === option
                      ? 'border-purple-500 bg-purple-50 text-purple-800'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {answers[question.id] === option && (
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}

          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <button
              onClick={nextQuestion}
              disabled={!answers[question.id]}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};