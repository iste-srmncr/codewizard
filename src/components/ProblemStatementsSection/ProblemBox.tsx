import React from 'react';

interface ProblemBoxProps {
  title: string;
  description: string;
  tracks: string[];
  onViewMore: () => void;
}

export function ProblemBox({ title, description, tracks, onViewMore }: ProblemBoxProps) {
  const getShortDescription = (desc: string) => {
    const words = desc.split(' ');
    if (words.length <= 10) return desc;
    return words.slice(0, 7).join(' ') + '...';
  };

  return (
    <div 
      className="problem-box border border-gray-700 rounded-lg p-4 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/70 cursor-pointer"
      style={{backgroundColor: 'rgba(1, 1, 7, 0.5)'}}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
      </div>
      <div className="mt-4">
        <p className="text-gray-400">{getShortDescription(description)}</p>
        <button onClick={(e) => { e.stopPropagation(); onViewMore(); }} className="text-blue-400 underline mt-2">View Full Description</button>
      </div>
    </div>
  );
}