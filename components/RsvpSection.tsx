
import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { RSVP_ICON_SVG } from '../constants';
import { RsvpFormData } from '../types';

interface RsvpSectionProps {
  rsvpUrl: string;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({ rsvpUrl }) => {
  const initialFormData: RsvpFormData = {
    totalAttending: 1,
    guestNames: [''], 
    allergyInfo: '', // 알러지 정보 초기화
  };
  const [formData, setFormData] = useState<RsvpFormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const newTotal = Math.max(1, formData.totalAttending); 
    if (formData.guestNames.length !== newTotal) {
       const newGuestNames = Array(newTotal).fill('').map((_, i) => formData.guestNames[i] || '');
       setFormData(prev => ({ ...prev, guestNames: newGuestNames }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.totalAttending]);
  
  const handleTotalAttendingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newTotal = parseInt(e.target.value, 10);
    if (isNaN(newTotal) || newTotal < 1) {
      newTotal = 1; 
    }
    setFormData(prev => ({
      ...prev,
      totalAttending: newTotal,
    }));
  };

  const handleGuestNameChange = (index: number, value: string) => {
    const newGuestNames = [...formData.guestNames];
    newGuestNames[index] = value;
    setFormData(prev => ({
      ...prev,
      guestNames: newGuestNames,
    }));
  };

  const handleAllergyInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      allergyInfo: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formData.totalAttending < 1) {
      setStatus('error');
      setMessage('총 참석 인원은 1명 이상이어야 합니다.');
      return;
    }
    if (formData.guestNames.some(name => name.trim() === '')) {
      setStatus('error');
      setMessage('모든 참석자의 성함을 입력해주세요.');
      return;
    }
    
    setStatus('loading');
    setMessage('');

    const submissionData = {
      totalAttending: formData.totalAttending,
      guestNames: formData.guestNames,
      allergyInfo: formData.allergyInfo, // 알러지 정보 포함
    };

    try {
      const response = await fetch(rsvpUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('참석 의사를 전달해주셔서 감사합니다!');
        setFormData(initialFormData); 
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus('error');
        setMessage(`응답을 제출하는 중 오류가 발생했습니다. (오류: ${errorData.error || response.statusText || 'Unknown error'}) 다시 시도해주세요.`);
      }
    } catch (error) {
      setStatus('error');
      setMessage('네트워크 오류가 발생했습니다. 인터넷 연결을 확인하고 다시 시도해주세요.');
      console.error('RSVP submission error:', error);
    }
  };

  return (
    <Section title="참석 의사 전달 (RSVP)" icon={RSVP_ICON_SVG}>
      <div className="max-w-md mx-auto text-left">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="totalAttending" className="block text-sm font-medium text-gray-700 mb-1">
              총 참석 인원 (본인 포함)
            </label>
            <input
              type="number"
              name="totalAttending"
              id="totalAttending"
              value={formData.totalAttending}
              onChange={handleTotalAttendingChange}
              min="1"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              placeholder="1"
            />
          </div>

          {formData.guestNames.map((name, index) => (
            <div key={index}>
              <label htmlFor={`guestName-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                참석자 {index + 1} 성함 <span className="text-xs text-gray-500">(영문으로 작성해주세요)</span>
              </label>
              <input
                type="text"
                name={`guestName-${index}`}
                id={`guestName-${index}`}
                value={name}
                onChange={(e) => handleGuestNameChange(index, e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                placeholder="Guest Name (English)"
              />
            </div>
          ))}

          <div>
            <label htmlFor="allergyInfo" className="block text-sm font-medium text-gray-700 mb-1">
              알러지 정보 <span className="text-xs text-gray-500">(있으실 경우 기재해주세요)</span>
            </label>
            <textarea
              name="allergyInfo"
              id="allergyInfo"
              rows={3}
              value={formData.allergyInfo}
              onChange={handleAllergyInfoChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              placeholder="예: 갑각류 알러지가 있습니다."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full md:w-auto inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:bg-gray-400"
            >
              {status === 'loading' ? '제출 중...' : '참석 의사 전달하기'}
            </button>
          </div>
        </form>

        {status !== 'idle' && message && (
          <div className={`mt-4 p-3 rounded-md text-sm ${
            status === 'success' ? 'bg-green-100 text-green-700' : 
            status === 'error' ? 'bg-red-100 text-red-700' : ''
          }`}>
            {message}
          </div>
        )}
        <p className="mt-4 text-xs text-gray-500 text-center">
          참석 여부를 미리 알려주시면 큰 도움이 됩니다.
        </p>
         <p className="mt-2 text-xs text-gray-500 text-center">
          <strong>참고:</strong> 이 RSVP 폼은 현재 데모 상태입니다. <code>constants.ts</code> 파일의 <code>rsvpUrl</code>을 Formspree와 같은 실제 서비스의 엔드포인트 URL로 교체해야 정상적으로 작동합니다.
        </p>
      </div>
    </Section>
  );
};