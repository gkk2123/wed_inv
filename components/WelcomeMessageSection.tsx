
import React from 'react';
import { Section } from './Section';
import { WeddingDetails } from '../types';

interface WelcomeMessageSectionProps {
  message: WeddingDetails['welcomeMessage'];
}

export const WelcomeMessageSection: React.FC<WelcomeMessageSectionProps> = ({ message }) => {
  return (
    <Section 
      title={message.title}
    >
      <div className="max-w-xl mx-auto text-center space-y-4 text-gray-700">
        {message.body.map((paragraph, index) => (
          <p key={index} className="text-lg leading-relaxed whitespace-pre-line">
            {paragraph}
          </p>
        ))}
        <p className="mt-6 text-xl font-serif italic text-amber-700">
          {message.closing}
        </p>
      </div>
    </Section>
  );
};