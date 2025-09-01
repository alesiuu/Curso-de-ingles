import React from 'react';

interface ProgressBarProps {
  progress: number;
  total: number;
  className?: string;
  showLabel?: boolean;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  total,
  className = '',
  showLabel = true,
  color = 'bg-blue-500'
}) => {
  const percentage = Math.min((progress / total) * 100, 100);

  return (
    <div className={`space-y-2 ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-sm font-medium">
          <span className="text-gray-700">Progress</span>
          <span className="text-gray-900">{progress}/{total}</span>
        </div>
      )}
      
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${color}`}
          style={{ width: `${percentage}%` }}
        >
          <div className="h-full bg-gradient-to-r from-transparent to-white/20 rounded-full" />
        </div>
      </div>
      
      {showLabel && (
        <div className="text-right text-xs text-gray-500">
          {percentage.toFixed(0)}% complete
        </div>
      )}
    </div>
  );
};