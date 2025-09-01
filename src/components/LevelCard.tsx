import React from 'react';
import { Lock, CheckCircle, Play } from 'lucide-react';
import { Level } from '../types';

interface LevelCardProps {
  level: Level;
  isUnlocked: boolean;
  isCompleted: boolean;
  progress: number;
  onClick: () => void;
}

export const LevelCard: React.FC<LevelCardProps> = ({
  level,
  isUnlocked,
  isCompleted,
  progress,
  onClick
}) => {
  return (
    <div
      className={`
        relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer
        transform hover:scale-105 hover:shadow-lg
        ${isUnlocked 
          ? 'border-blue-200 bg-white hover:border-blue-300' 
          : 'border-gray-200 bg-gray-50 cursor-not-allowed'
        }
        ${isCompleted ? 'ring-2 ring-green-300' : ''}
      `}
      onClick={onClick}
    >
      {/* Level indicator */}
      <div className={`
        absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center
        text-white font-bold text-sm ${level.color}
      `}>
        {level.id}
      </div>

      {/* Status icon */}
      <div className="absolute top-4 right-4">
        {isCompleted ? 
          <CheckCircle className="w-6 h-6 text-green-500" />
        ) : isUnlocked ? (
          <Play className="w-6 h-6 text-blue-500" />
        ) : (
          <Lock className="w-6 h-6 text-gray-400" />
        )}
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className={`
          text-lg font-bold mb-2
          ${isUnlocked ? 'text-gray-800' : 'text-gray-400'}
        `}>
          {level.name.split(':')[0]}
        </h3>
        
        <h4 className={`
          text-sm font-medium mb-2
          ${isUnlocked ? 'text-blue-600' : 'text-gray-400'}
        `}>
          {level.name.split(':')[1]}
        </h4>
        
        <p className={`
          text-sm mb-4
          ${isUnlocked ? 'text-gray-600' : 'text-gray-400'}
        `}>
          {level.description}
        </p>
        
        {/* Lesson count */}
        <div className={`
          text-xs mb-3
          ${isUnlocked ? 'text-gray-500' : 'text-gray-400'}
        `}>
          {level.lessons.length} lecciones
        </div>

        {/* Progress bar */}
        {isUnlocked && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="text-gray-800 font-medium">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${level.color}`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};