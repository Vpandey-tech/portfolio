'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';

import { Center } from '@/components';
import { preloaderWords } from '@/data';
import { useDimensions, useTimeOut } from '@/hooks';

import { fade, slideUp } from './variants';

const MotionComponent = motion(Center);

export function Preloader({ isInitial = true, pathname = '/' }) {
  const [index, setIndex] = useState(0);
  const { width, height } = useDimensions();

  useTimeOut({
    callback: () => {
      if (isInitial && index < preloaderWords.length - 1) {
        setIndex(prevIndex => prevIndex + 1);
      }
    },
    duration: index === 0 ? 500 : 250,
    deps: [index, isInitial],
  });

  const getPageName = path => {
    if (!path || path === '/') return 'Home';
    const parts = path.split('/').filter(Boolean);
    const lastPart = parts[parts.length - 1];
    return lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
  };

  const displayText = isInitial
    ? preloaderWords[index] || preloaderWords[preloaderWords.length - 1]
    : getPageName(pathname);

  const textVariants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 0.75,
      transition: {
        duration: isInitial ? 1 : 0.4,
        delay: isInitial ? 0.2 : 0.1,
      },
    },
  };

  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${
    height + 300
  } 0 ${height}  L0 0`;
  const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${
    width / 2
  } ${height} 0 ${height}  L0 0`;

  /** @type {import('framer-motion').Variants} */
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  const slideUpCustom = {
    initial: {
      top: isInitial ? 0 : '100vh',
    },
    enter: {
      top: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      top: '-100vh',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <MotionComponent
      className='fixed z-50 h-screen w-screen cursor-wait bg-foreground'
      variants={slideUpCustom}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      {width > 0 ? (
        <>
          <MotionComponent
            className='text-3xl text-background md:text-4xl'
            variants={textVariants}
            initial='initial'
            animate='enter'
          >
            <Dot size={48} className='me-3' />
            <p>{displayText}</p>
          </MotionComponent>
          <motion.svg className='absolute top-0 -z-10 h-[calc(100%+300px)] w-full'>
            <motion.path
              className='fill-foreground'
              variants={curve}
              initial='initial'
              exit='exit'
            />
          </motion.svg>
        </>
      ) : null}
    </MotionComponent>
  );
}
