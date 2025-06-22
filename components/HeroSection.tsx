import React from 'react';
import { WeddingDetails } from '../types';
import { HEART_ICON_SVG } from '../constants';
import { Section } from './Section'; // Added import for Section component

interface HeroSectionProps {
  details: WeddingDetails;
}

const ParentInfo: React.FC<{ name?: string; deceased?: boolean }> = ({ name, deceased }) => {
  if (!name) return null;
  return (
    <span className={`${deceased ? 'text-gray-500' : ''}`}>
      {deceased && '(故) '}
      {name}
    </span>
  );
};


export const HeroSection: React.FC<HeroSectionProps> = ({ details }) => {
  return (
    <Section className="!pt-8 !pb-8 md:!pt-12 md:!pb-12 bg-white/70 backdrop-blur-lg">
      <div className="text-center">
        <img 
          src={details.mainImageUrl} 
          alt="Wedding" 
          className="w-full max-w-2xl mx-auto h-auto object-cover rounded-lg shadow-lg mb-8"
        />
        
        <div className="mb-6">
          <div className="text-center">
            <p className="text-lg text-gray-600">
              {details.groom.fatherName && <span><ParentInfo name={details.groom.fatherName} deceased={details.groom.fatherDeceased} /> · <ParentInfo name={details.groom.motherName} deceased={details.groom.motherDeceased} />의 아들 </span>}
              <span className="font-semibold text-amber-700">{details.groom.name}</span>
            </p>
            {details.groom.babyPhotoUrl && (
              <img
                src={details.groom.babyPhotoUrl}
                alt={`${details.groom.name} 아기 사진`}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mx-auto mt-2 shadow-md"
              />
            )}
          </div>

          <div className="text-center mt-4">
            <p className="text-lg text-gray-600">
              {details.bride.fatherName && <span><ParentInfo name={details.bride.fatherName} deceased={details.bride.fatherDeceased} /> · <ParentInfo name={details.bride.motherName} deceased={details.bride.motherDeceased} />의 딸 </span>}
              <span className="font-semibold text-amber-700">{details.bride.name}</span>
            </p>
            {details.bride.babyPhotoUrl && (
              <img
                src={details.bride.babyPhotoUrl}
                alt={`${details.bride.name} 아기 사진`}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mx-auto mt-2 shadow-md"
              />
            )}
          </div>
        </div>

        <div className="flex items-center justify-center my-6 text-amber-600">
          <div className="w-10 h-px bg-amber-400"></div>
          <span className="mx-4" dangerouslySetInnerHTML={{ __html: HEART_ICON_SVG }} />
          <div className="w-10 h-px bg-amber-400"></div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-serif text-amber-800 mb-2">
          {details.date} {/* 한국어로 변경된 값 사용 */}
        </h2>
        <p className="text-xl md:text-2xl text-amber-700">
          {details.dayOfWeek}, {details.time} {/* 한국어로 변경된 값 사용 */}
        </p>
        <p className="text-lg md:text-xl text-amber-600 mt-1">
          {details.venue.name}
        </p>
      </div>
    </Section>
  );
};