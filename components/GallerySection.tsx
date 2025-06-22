
import React from 'react';
import { Section } from './Section';
import { GALLERY_ICON_SVG } from '../constants';

interface GallerySectionProps {
  images: string[];
  onImageClick: (imageUrl: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ images, onImageClick }) => {
  return (
    <Section title="설렘으로 물든 날" icon={GALLERY_ICON_SVG}>
      <div className="flex overflow-x-auto space-x-4 py-2 scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-amber-200"> {/* Added scrollbar styling for web */}
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-60 w-auto bg-gray-200 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl"
            onClick={() => onImageClick(src)}
            style={{ minWidth: '100px' }} // Ensure a minimum width for very narrow aspect ratio images
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="h-full w-auto block object-cover rounded-md" // object-cover helps maintain aspect ratio within the fixed height
            />
          </div>
        ))}
      </div>
      {/* <p className="mt-6 text-sm text-gray-500">Click on an image to view it larger.</p> // Removed */}
    </Section>
  );
};