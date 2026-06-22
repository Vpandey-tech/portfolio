'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { useLenis } from '@/hooks';

import { Preloader } from './preloader';

/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }) {
  const pathname = usePathname();
  const isInitialRef = useRef(true);
  const [isLoading, setLoading] = useState(true);

  useLenis();

  useEffect(() => {
    setLoading(true);

    const isInitial = isInitialRef.current;
    const duration = isInitial ? 2000 : 1300;
    const timeout = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);

      if (isInitialRef.current) {
        isInitialRef.current = false;
      }
    }, duration);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <Preloader isInitial={isInitialRef.current} pathname={pathname} />
        ) : null}
      </AnimatePresence>
      {children}
    </div>
  );
}
