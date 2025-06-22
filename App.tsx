
import React, { useState, useEffect, useRef } from 'react';
import { WEDDING_DETAILS, WEDDING_CALENDAR_DATE } from './constants';
import { HeroSection } from './components/HeroSection';
import { WelcomeMessageSection } from './components/WelcomeMessageSection';
import { CalendarSection } from './components/CalendarSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
// GiftInfoSection import removed
import { RsvpSection } from './components/RsvpSection'; // RsvpSection import 추가
import { MusicPlayer } from './components/MusicPlayer';
import { Modal } from './components/Modal';

interface ImageDimensions {
  width: number;
  height: number;
}

const App: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalImageDimensions, setModalImageDimensions] = useState<ImageDimensions | null>(null);

  const openModal = (imageUrl: string) => {
    const img = new Image();
    img.onload = () => {
      const viewportPadding = 40; // 20px on each side for modal within viewport
      const modalContentPadding = 10; // 5px on each side inside the modal content box
      
      const maxWidth = window.innerWidth - viewportPadding - modalContentPadding;
      const maxHeight = window.innerHeight - viewportPadding - modalContentPadding;

      let newWidth = img.naturalWidth;
      let newHeight = img.naturalHeight;

      if (newWidth > maxWidth) {
        newHeight = (maxWidth / newWidth) * newHeight;
        newWidth = maxWidth;
      }

      if (newHeight > maxHeight) {
        newWidth = (maxHeight / newHeight) * newWidth;
        newHeight = maxHeight;
      }
      
      setModalImageDimensions({ width: newWidth, height: newHeight });
      setModalImage(imageUrl);
    };
    img.onerror = () => {
      // Fallback if image fails to load, though unlikely for gallery images already displayed
      setModalImageDimensions({ width: 300, height: 200 }); // Default small size
      setModalImage(imageUrl);
    }
    img.src = imageUrl;
  };

  const closeModal = () => {
    setModalImage(null);
    setModalImageDimensions(null);
  };

  return (
    <div className="min-h-screen bg-gradient-champagne text-gray-800">
      <header className="py-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-amber-700 animate-title-reveal">
          세훈 그리고 마야, 결혼합니다
        </h1>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-16 space-y-16 md:space-y-24">
        <HeroSection details={WEDDING_DETAILS} />
        <WelcomeMessageSection message={WEDDING_DETAILS.welcomeMessage} />
        <CalendarSection date={WEDDING_CALENDAR_DATE} weddingDayInfo={`${WEDDING_DETAILS.dayOfWeek}, ${WEDDING_DETAILS.time}`} />
        <GallerySection images={WEDDING_DETAILS.galleryImages} onImageClick={openModal} />
        <LocationSection venue={WEDDING_DETAILS.venue} />
        {/* GiftInfoSection rendering removed */}
        {WEDDING_DETAILS.rsvpUrl && <RsvpSection rsvpUrl={WEDDING_DETAILS.rsvpUrl} />} {/* RsvpSection 추가 */}
      </main>

      <footer className="text-center py-8 text-sm text-amber-600">
        <p>&copy; {new Date().getFullYear()} {WEDDING_DETAILS.groom.name} & {WEDDING_DETAILS.bride.name}. All rights reserved.</p>
        <p className="mt-2">Crafted with love.</p>
        <p className="mt-2 text-xs text-gray-500">이 청첩장은 신랑신부가 만든것으로, 그 어떠한 상업적, 수익창출을 일으키지않습니다.</p>
      </footer>
      
      {WEDDING_DETAILS.musicUrl && WEDDING_DETAILS.musicUrl.length > 0 && <MusicPlayer musicUrls={WEDDING_DETAILS.musicUrl} />}

      {modalImage && modalImageDimensions && (
        <Modal onClose={closeModal}>
          <img 
            src={modalImage} 
            alt="Enlarged gallery view" 
            style={{ 
              width: `${modalImageDimensions.width}px`, 
              height: `${modalImageDimensions.height}px`,
              display: 'block' 
            }}
            className="rounded-md" // shadow is on the modal container
          />
        </Modal>
      )}
    </div>
  );
};

export default App;
