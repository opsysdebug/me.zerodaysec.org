import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  delay?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  delay = 1500,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    let timeout: number;

    if (isPause) {
      timeout = window.setTimeout(() => {
        setIsPause(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    const fullText = texts[currentTextIndex];
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        timeout = window.setTimeout(() => {}, delay);
      } else {
        timeout = window.setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (currentText === fullText) {
        setIsPause(true);
      } else {
        timeout = window.setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isPause, texts, typingSpeed, deletingSpeed, delay, pauseTime]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="inline-block w-1 h-5 ml-1 bg-cyan-500 animate-pulse" />
    </span>
  );
};

export default Typewriter;