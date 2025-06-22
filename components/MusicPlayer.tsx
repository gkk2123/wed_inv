import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SPEAKER_LOUD_ICON_SVG, SPEAKER_MUTED_ICON_SVG } from '../constants';

interface MusicPlayerProps {
  musicUrls: string[];
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ musicUrls }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false); // Default to not muted
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playCurrentTrack = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.warn("Autoplay was prevented. User interaction might be needed to start audio:", error);
        // If autoplay is prevented with sound, try muted autoplay as a fallback.
        // However, the request is for audible autoplay, so we just log the warning.
      });
    }
  }, []);

  const loadTrack = useCallback((trackIndex: number) => {
    if (audioRef.current && musicUrls && musicUrls.length > 0) {
      audioRef.current.src = musicUrls[trackIndex];
      audioRef.current.muted = isMuted; // Ensure muted state is applied before loading/playing
      audioRef.current.load();
      playCurrentTrack();
    }
  }, [musicUrls, isMuted, playCurrentTrack]);

  useEffect(() => {
    if (musicUrls && musicUrls.length > 0) {
      if (!audioRef.current) {
        audioRef.current = new Audio(musicUrls[currentTrackIndex]);
        audioRef.current.muted = isMuted;
         // Attempt to play as soon as the element is created and source is set
        playCurrentTrack();
      } else {
        loadTrack(currentTrackIndex);
      }
    }

    const audioElement = audioRef.current;
    if (audioElement) {
      const handleTrackEnd = () => {
        // Play next track
        const nextIndex = (currentTrackIndex + 1) % (musicUrls?.length || 1);
        setCurrentTrackIndex(nextIndex);
      };
      audioElement.addEventListener('ended', handleTrackEnd);
      return () => {
        audioElement.removeEventListener('ended', handleTrackEnd);
      };
    }
  }, [musicUrls, currentTrackIndex, loadTrack, isMuted, playCurrentTrack]);


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  if (!musicUrls || musicUrls.length === 0) {
    return null;
  }

  // Simplified UI: Single Mute/Unmute Button
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMute}
        className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg focus:outline-none transition-all duration-300 transform hover:scale-110"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? (
          <span dangerouslySetInnerHTML={{ __html: SPEAKER_MUTED_ICON_SVG }} />
        ) : (
          <span dangerouslySetInnerHTML={{ __html: SPEAKER_LOUD_ICON_SVG }} />
        )}
      </button>
    </div>
  );
};