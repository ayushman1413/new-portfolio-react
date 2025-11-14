import React, { useState, useEffect } from 'react';

function TypedText() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const phrases = [
    'Web Developer',
    'UI/UX Designer',
    'Full Stack Developer',
    'Frontend Specialist',
    'Creative Coder',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const phrase = phrases[currentPhrase];
      
      if (!isDeleting) {
        if (currentIndex < phrase.length) {
          setDisplayText(phrase.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(phrase.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, currentPhrase, phrases]);

  return <span className="typed-text">{displayText}</span>;
}

export default TypedText;
