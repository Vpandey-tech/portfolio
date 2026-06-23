'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

import { useLenis } from '@/hooks';

import { Preloader } from './preloader';

/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isInitialRef = useRef(true);
  const [isLoading, setLoading] = useState(true);
  const [targetPath, setTargetPath] = useState(pathname);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useLenis();

  // If pathname changes, set loading instantly during the render phase.
  // This prevents the new page from rendering for even a single frame.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setTargetPath(pathname);
    setLoading(false);
    window.scrollTo(0, 0);
  }

  // Sync displayChildren when not loading
  useEffect(() => {
    if (!isLoading) {
      setDisplayChildren(children);
    }
  }, [children, isLoading]);

  // Global link click interceptor
  useEffect(() => {
    const handleLinkClick = e => {
      const target = e.target.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const targetAttr = target.getAttribute('target');

      // Check if it's an internal link
      if (
        href &&
        href.startsWith('/') &&
        !href.startsWith('/#') &&
        targetAttr !== '_blank' &&
        !e.defaultPrevented
      ) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        // If clicking the current path or already loading, do nothing
        if (href === pathname || isLoading) return;

        // Start loading transition (curtain slides up)
        setTargetPath(href);
        setLoading(true);

        // Wait 800ms for curtain to fully cover the screen, then navigate programmatically
        setTimeout(() => {
          router.push(href);
        }, 800);
      }
    };

    document.addEventListener('click', handleLinkClick, { capture: true });
    return () =>
      document.removeEventListener('click', handleLinkClick, { capture: true });
  }, [router, pathname, isLoading]);

  // Initial load timer
  useEffect(() => {
    if (isInitialRef.current) {
      const timeout = setTimeout(() => {
        setLoading(false);
        isInitialRef.current = false;
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <Preloader isInitial={isInitialRef.current} pathname={targetPath} />
        ) : null}
      </AnimatePresence>
      {displayChildren}
    </div>
  );
}
