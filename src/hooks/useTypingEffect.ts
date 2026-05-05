import { useState, useEffect } from 'react';

type UseTypingEffectInput = string | string[];

export const useTypingEffect = (
  input: UseTypingEffectInput,
  typingSpeed = 80,
  initialDelay = 0,
  pauseAfterTyped = 1800,
  deletingSpeed = 40
) => {
  const phrases = Array.isArray(input) ? input : [input];
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(initialDelay === 0);

  useEffect(() => {
    if (initialDelay === 0) return;
    const t = setTimeout(() => setHasStarted(true), initialDelay);
    return () => clearTimeout(t);
  }, [initialDelay]);

  useEffect(() => {
    if (!hasStarted) return;

    const current = phrases[phraseIndex] ?? '';
    const isLastPhrase = phrases.length === 1;

    if (!isDeleting && displayText === current) {
      if (isLastPhrase) {
        setIsComplete(true);
        return;
      }
      const t = setTimeout(() => setIsDeleting(true), pauseAfterTyped);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      },
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [
    displayText,
    isDeleting,
    phraseIndex,
    hasStarted,
    phrases,
    typingSpeed,
    pauseAfterTyped,
    deletingSpeed
  ]);

  return { displayText, isComplete };
};
