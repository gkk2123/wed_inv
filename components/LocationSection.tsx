import React from 'react';
import { Section } from './Section';
import { WeddingDetails } from '../types';
import { LOCATION_ICON_SVG } from '../constants';

interface LocationSectionProps {
  venue: WeddingDetails['venue'];
}

export const LocationSection: React.FC<LocationSectionProps> = ({ venue }) => {
  const apiKey = "AIzaSyCF7IEz_ciqv2w0CF5BegbA4pwlYsrcjE0"; // User-provided API Key

  const embedMapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(venue.address)}`;

  return (
    <Section title="오시는 길" icon={LOCATION_ICON_SVG}>
      <div className="text-center">
        <h3 className="text-2xl font-serif text-amber-700 mb-2">{venue.name}</h3>
        <p className="text-lg text-gray-600 mb-4">{venue.address}</p>
        {venue.directions && <p className="text-md text-gray-500 mb-6">{venue.directions}</p>}

        <a
          href={venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors duration-300 shadow-md"
        >
          View on Google Maps
        </a>
        <div className="mt-8">
          <iframe
            src={embedMapUrl}
            width="100%"
            height="450"
            style={{ border:0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Location"
            className="w-full max-w-lg mx-auto rounded-lg shadow-lg h-[300px] md:h-[450px]"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};