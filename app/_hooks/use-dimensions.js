'use client';

import { useEffect, useState } from 'react';

/**
 * Handles window dimensions dynamically and triggers state updates on resize.
 */
export function useDimensions() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
}
