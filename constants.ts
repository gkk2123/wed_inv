import { WeddingDetails, CalendarDate } from './types';

export const WEDDING_DETAILS: WeddingDetails = {
  groom: {
    name: "윤세훈",
    fatherName: "윤영섭",
    motherName: "정부실",
    babyPhotoUrl: "https://live.staticflickr.com/65535/54605840073_58a42c7b54_m.jpg", 
  },
  bride: {
    name: "좌마야",
    fatherName: "좌동익",
    motherName: "김행강",
    babyPhotoUrl: "https://live.staticflickr.com/65535/54604755322_ce5594480d_w.jpg", 
  },
  date: "2025년 8월 23일", // 직접 한국어로 변경
  time: "오후 6:00", // 한국어로 변경
  dayOfWeek: "토요일", // 한국어로 변경
  venue: {
    name: "Waldorf Astoria Osaka",
    address: "1 Chome-2-1 Umeda, Kita Ward, Osaka, 530-0001, Japan",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Waldorf+Astoria+Osaka",
    directions: "오사카 우메다 중심에 위치해 있습니다.",
  },
  welcomeMessage: {
    title: "초대드립니다",
    body: [
      "초등학교 때 배운 더하기가\n얼마나 따뜻한 건지\n알게 해준 사람을 만났습니다.",
      "서로의 이기심과 자존심을\n조금씩 빼면서\n함께 걸어가려 합니다.",
      "부부라는 이름으로 시작하는\n저희 두 사람이\n늘 곁에서 아껴주셨던\n고마운 분들을 모십니다.",
      "기쁨으로 곱해지고\n사랑으로 나눠지는 자리를\n준비합니다.",
      "함께 자리하여 축복해 주시면\n더없는 기쁨이겠습니다."
    ],
    closing: "사랑을 담아, 세훈 & 마야"
  },
  galleryImages: [
    "https://live.staticflickr.com/65535/54605640981_7d7edca2c4_h.jpg",
    "https://live.staticflickr.com/65535/54605639986_3969a9e421_h.jpg",
    "https://live.staticflickr.com/65535/54605835829_96db675e7e_h.jpg",
    "https://live.staticflickr.com/65535/54605836034_655d12fa23_b.jpg",
    "https://live.staticflickr.com/65535/54605640561_242a9c45f7_b.jpg",
    "https://live.staticflickr.com/65535/54605851583_59760cd20a_b.jpg",
    "https://live.staticflickr.com/65535/54605851503_79a024be24_b.jpg",
    "https://live.staticflickr.com/65535/54605851878_436bb69617_b.jpg",
    "https://live.staticflickr.com/65535/54604765347_646f754185_h.jpg",
    "https://live.staticflickr.com/65535/54605941120_e9748c6f28_b.jpg"
  ], 
  mainImageUrl: "https://live.staticflickr.com/65535/54605874089_458e73a34c_k.jpg",
  musicUrl: [
    "/1.mp3",
    "/2.mp3"
  ],
  rsvpUrl: "YOUR_FORMSPREE_OR_BACKEND_ENDPOINT_HERE"
};

export const WEDDING_CALENDAR_DATE: CalendarDate = {
  year: 2025,
  month: 7, 
  day: 23,
};

export const HEART_ICON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M11.645 20.91a.75.75 0 0 1-1.29 0C8.497 18.337 2.25 12.75 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 4.5-6.247 10.087-8.098 12.66Z" />
</svg>
`;

export const CALENDAR_ICON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-3.75h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
`;

export const LOCATION_ICON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
`;

export const GALLERY_ICON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
`;

export const SPEAKER_LOUD_ICON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.945.945 2.56.276 2.56-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
  <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
</svg>
`;

export const SPEAKER_MUTED_ICON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.945.945 2.56.276 2.56-1.06V4.06Z" />
  <path d="M17.72 17.72a.75.75 0 1 0-1.06-1.06L14.126 14.12l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.061-1.06 1.535 1.534Z"/>
  <path d="M16.66 7.343a.75.75 0 0 0-1.06 1.06l1.06 1.06-1.533 1.533a.75.75 0 0 0 1.06 1.06l1.533-1.533 1.06 1.06a.75.75 0 0 0 1.06-1.06l-1.06-1.06L20.28 8.403a.75.75 0 0 0-1.06-1.06L17.72 8.88l-1.06-1.537Z"/>
</svg>
`;

export const RSVP_ICON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
`;