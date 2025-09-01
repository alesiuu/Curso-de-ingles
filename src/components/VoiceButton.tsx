import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSpeech } from '../hooks/useSpeech';

interface VoiceButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({ 
  text, 
  className = '', 
  size = 'md' 
}) => {
  const { speak, stop, isSpeaking, isSupported } = useSpeech();

  const handleClick = () => {
    if (isSpeaking) {
      stop();
    } else {
      speak(text);
    }
  };

  const sizeClasses = {
    sm: 'w-6 h-6 p-1',
    md: 'w-8 h-8 p-1.5',
    lg: 'w-10 h-10 p-2'
  };

  if (!isSupported) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className={`
        inline-flex items-center justify-center rounded-full
        transition-all duration-200 hover:scale-110
        ${isSpeaking 
          ? 'bg-red-100 text-red-600 hover:bg-red-200' 
          : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
        }
        ${sizeClasses[size]}
        ${className}
      `}
      title={isSpeaking ? 'Stop speaking' : 'Listen to pronunciation'}
    >
      {isSpeaking ? (
        <VolumeX className="w-full h-full" />
      ) : (
        <Volume2 className="w-full h-full" />
      )}
    </button>
  );
};