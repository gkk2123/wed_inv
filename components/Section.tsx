
import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  icon?: string; // SVG string for icon
  title?: ReactNode; // Changed from string to ReactNode
}

export const Section: React.FC<SectionProps> = ({ children, className = '', icon, title }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust as needed, 0.1 means 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-12 md:py-16 bg-white/50 backdrop-blur-md rounded-xl custom-shadow animate-fade-in ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      <div className="container mx-auto px-6 text-center">
        {title && (
           <div className="flex items-center justify-center mb-8 md:mb-12">
            {icon && <span dangerouslySetInnerHTML={{ __html: icon }} className="mr-3 text-3xl text-amber-600" />}
            {/* Title is now a ReactNode, if it's a string it will be rendered in h2, if it's a component, it will be rendered as is */}
            {typeof title === 'string' ? <h2 className="text-3xl md:text-4xl font-serif text-amber-700">{title}</h2> : title}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};