import { useEffect, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [elementRef, setElementRef] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    observer.observe(elementRef);

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [elementRef, hasIntersected, options]);

  return [setElementRef, isIntersecting, hasIntersected];
};

export const useScrollAnimation = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  return {
    ref,
    isVisible: hasIntersected,
    isInView: isIntersecting,
  };
};