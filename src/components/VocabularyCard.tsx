import React, { useState } from 'react';
import { RotateCcw, Eye, EyeOff } from 'lucide-react';
import { VocabularyItem } from '../types';
import { VoiceButton } from './VoiceButton';

interface VocabularyCardProps {
  item: VocabularyItem;
  showTranslation?: boolean;
}

export const VocabularyCard: React.FC<VocabularyCardProps> = ({ 
  item, 
  showTranslation = false 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [translationVisible, setTranslationVisible] = useState(showTranslation);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const toggleTranslation = () => {
    setTranslationVisible(!translationVisible);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className={`
        relative w-full h-48 transition-transform duration-700 transform-style-preserve-3d
        ${isFlipped ? 'rotate-y-180' : ''}
      `}>
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{item.word}</h3>
              <VoiceButton text={item.word} size="md" />
            </div>
            
            <div className="text-sm text-gray-500 mb-2">
              {item.pronunciation}
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              {item.imageUrl && (
                <img 
                  src={item.imageUrl} 
                  alt={item.word}
                  className="max-w-full max-h-20 object-contain rounded"
                />
              )}
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={toggleTranslation}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
              >
                {translationVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {translationVisible ? 'Hide' : 'Show'} translation
              </button>
              
              <button
                onClick={handleFlip}
                className="flex items-center gap-1 text-gray-600 hover:text-gray-700 text-sm"
              >
                <RotateCcw className="w-4 h-4" />
                Flip
              </button>
            </div>
            
            {translationVisible && (
              <div className="mt-2 p-2 bg-blue-50 rounded text-center text-blue-800 font-medium">
                {item.translation}
              </div>
            )}
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg text-white p-6">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Example</h3>
              <button
                onClick={handleFlip}
                className="text-white hover:text-blue-200"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 flex items-center justify-center text-center">
              <div>
                <p className="text-lg mb-3 italic">"{item.example}"</p>
                <VoiceButton 
                  text={item.example} 
                  className="bg-white/20 text-white hover:bg-white/30" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};