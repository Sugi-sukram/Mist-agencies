"use client";
import React, { ChangeEvent, KeyboardEvent, useRef, useState } from "react";

const OtpInput = () => {
  const length = 6;
  const [otp, setOTP] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number, inputName: string) => {
    const value = e.target.value;
    if (!(/^\d*$/.test(value))) return; // Only allow numbers
    if (e.target.value.length > 1) return;

    const updatedOTP = [...otp];
    updatedOTP[index] = e.target.value;
    setOTP(updatedOTP);

    if (e.target.value !== '' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>, index: number, inputName: string) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, inputName: string) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain');
    const numbersOnly = pasteData.replace(/\D/g, ''); // Extract only numbers
    const newData = numbersOnly.slice(0, length).split('');

    const updatedOTP = newData.concat(Array(length - newData.length).fill(''));
    setOTP(updatedOTP);
    
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex items-center">
        {otp.map((digit, index) => (
          <React.Fragment key={index}>
            <input
              type="text"
              value={digit}
              autoFocus={index === 0}
              maxLength={1}
              onChange={(e) => handleChange(e, index, "otp")}
              onKeyDown={(e) => handleKeyPress(e, index, "otp")}
              onPaste={(e) => handlePaste(e, "otp")}
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
              className="w-12 h-12 border-2 border-gray-300 rounded-lg text-xl text-center mx-1 focus:outline-none focus:border-blue-500"
            />
            {index < length - 1 && (
              <span className="text-xl mx-2">-</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default OtpInput;