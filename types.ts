
export interface WeddingDetails {
  groom: {
    name: string;
    fatherName?: string;
    motherName?: string;
    fatherDeceased?: boolean;
    motherDeceased?: boolean;
    babyPhotoUrl?: string; // 아기 사진 URL 추가
  };
  bride: {
    name: string;
    fatherName?: string;
    motherName?: string;
    fatherDeceased?: boolean;
    motherDeceased?: boolean;
    babyPhotoUrl?: string; // 아기 사진 URL 추가
  };
  date: string;
  time: string;
  dayOfWeek: string;
  venue: {
    name: string;
    address: string;
    mapUrl: string;
    directions?: string;
  };
  welcomeMessage: {
    title: string;
    body: string[];
    closing: string;
  };
  galleryImages: string[];
  mainImageUrl: string;
  musicUrl?: string[]; // Changed to string[] to support multiple music tracks
  rsvpUrl?: string; // RSVP 제출 URL
}

// AccountInfo interface removed

export interface CalendarDate {
  year: number;
  month: number; // 0-indexed (0 for January, 11 for December)
  day: number;
}

// RSVP 폼 데이터 구조 변경: 'attending' 필드 제거
export interface RsvpFormData {
  totalAttending: number; // 본인 포함 총 참석 인원
  guestNames: string[];   // 각 참석자 이름 배열 (영문)
  allergyInfo?: string; // 알러지 정보 필드 추가
}