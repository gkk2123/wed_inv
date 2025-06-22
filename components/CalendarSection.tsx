
import React from 'react';
import { Section } from './Section';
import { CalendarDate } from '../types';
import { CALENDAR_ICON_SVG, HEART_ICON_SVG } from '../constants';

interface CalendarSectionProps {
  date: CalendarDate;
  weddingDayInfo: string;
}

const daysInMonth = (year: number, month: number): number => new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = (year: number, month: number): number => new Date(year, month, 1).getDay(); // 0 for Sunday, 6 for Saturday

export const CalendarSection: React.FC<CalendarSectionProps> = ({ date, weddingDayInfo }) => {
  const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]; // 한국어 월 이름
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"]; // 한국어 요일 이름

  const numDays = daysInMonth(date.year, date.month);
  const firstDay = firstDayOfMonth(date.year, date.month);

  const calendarDays: (number | null)[] = Array(firstDay).fill(null);
  for (let i = 1; i <= numDays; i++) {
    calendarDays.push(i);
  }

  return (
    <Section title="소중한 날, 함께해주세요" icon={CALENDAR_ICON_SVG}> {/* 제목 한국어로 변경 */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-serif text-amber-700 mb-4 text-center">
          {date.year}년 {monthNames[date.month]} {/* 한국어 날짜 형식으로 변경 */}
        </h3>
        <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-600 mb-2">
          {dayNames.map(day => <div key={day} className="font-medium">{day}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`p-2 rounded-full aspect-square flex items-center justify-center
                ${day === null ? 'bg-transparent' : 'bg-gray-100'}
                ${day === date.day ? 'bg-amber-500 text-red-700 font-extrabold relative ring-2 ring-amber-300 ring-offset-2' : ''}
              `}
            >
              {day}
              {day === date.day && (
                <span className="absolute -top-1 -right-1 text-red-500 text-xs" dangerouslySetInnerHTML={{ __html: HEART_ICON_SVG.replace('w-6 h-6', 'w-4 h-4') }}></span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-lg text-amber-600 font-medium">
          우리의 특별한 날: {date.year}년 {monthNames[date.month]} {date.day}일 {/* 한국어 날짜 형식으로 변경 */}
        </p>
        <p className="mt-1 text-center text-md text-gray-500">
          {weddingDayInfo} {/* App.tsx에서 한국어로 조합된 값 전달받음 */}
        </p>
      </div>
    </Section>
  );
};