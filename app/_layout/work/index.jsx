'use client';

import { useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Grid, List } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Center, ParallaxReveal } from '@/components';
import { useFollowPointer } from '@/hooks';
import { randomId } from '@/utils';

// Framer motion animation configs
const scaleUp = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.35, ease: [0.32, 0, 0.67, 0] },
  },
};

const fadeTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const allProjects = [
  {
    title: 'DameChess.com',
    category: 'Full Stack',
    services: 'PERN Stack & WebSockets',
    location: 'Mumbai, IN',
    year: '2024',
    image: '/images/damechess.png',
    href: 'https://damechess.com',
  },
  {
    title: 'AI Quoting Platform',
    category: 'AI & GenAI',
    services: 'FastAPI & LLM Pipelines',
    location: 'Remote',
    year: '2024-25',
    image: '/images/ai-quoting.png',
    href: 'https://accu-design-quoting.onrender.com/',
  },
  {
    title: 'ACCU Bot RAG',
    category: 'AI & GenAI',
    services: 'LangChain & Vector Stores',
    location: 'Remote',
    year: '2024-25',
    image: '/images/accu-bot.png',
    href: 'https://chat.accudesign.in',
  },
  {
    title: 'DDoS Live Detect',
    category: 'Machine Learning',
    services: 'Ensemble ML & Streamlit',
    location: 'Mumbai, IN',
    year: '2025',
    image: '/images/ddos-detect.png',
    href: 'https://huggingface.co/spaces/sanketDamre/DDOS-ATTACK-PREVENTION',
  },
  {
    title: 'Engineering Hub LMS',
    category: 'Full Stack',
    services: 'MERN Stack & WebRTC',
    location: 'Mumbai, IN',
    year: '2024',
    image: '/images/engineering-hub.png',
    href: 'https://www.youtube.com/watch?v=zziJyVeCPno&t=3s',
  },
  {
    title: 'Misinfo Classifier',
    category: 'AI & GenAI',
    services: 'NLP & Chrome Extension',
    location: 'Mumbai Hacks',
    year: '2024',
    image: '/images/misinfo-classifier.png',
    href: 'https://github.com/Vpandey-tech/HUbGuard',
  },
  {
    title: 'Gesture Control System',
    category: 'Machine Learning',
    services: 'OpenCV & MediaPipe',
    location: 'MSME Winner',
    year: '2024',
    image: '/images/gesture-control.png',
    href: 'https://www.youtube.com/watch?v=xkvCu0HUFfQ',
  },
];

export function Work() {
  const [filter, setFilter] = useState('All');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

  const modalRef = useRef(null);
  const cursorRef = useRef(null);
  const labelRef = useRef(null);

  const {
    item: { active, index },
    handlePointerEnter,
    handlePointerLeave,
    moveItems,
  } = useFollowPointer({
    modal: modalRef,
    cursor: cursorRef,
    label: labelRef,
  });

  const categories = ['All', 'Full Stack', 'AI & GenAI', 'Machine Learning'];

  const filteredProjects = allProjects.filter(
    p => filter === 'All' || p.category === filter,
  );

  return (
    <section
      className='container relative min-h-screen px-6 pb-20 pt-32 md:px-12 md:pt-48'
      onPointerMove={({ clientX, clientY }) => moveItems(clientX, clientY)}
    >
      {/* Hero Header */}
      <div className='mb-12 md:mb-20'>
        <h1 className='text-[clamp(2.2em,5.5vw,5.5em)] font-medium leading-[1.05] tracking-tight text-foreground'>
          <ParallaxReveal paragraph='Creating next level digital applications.' />
        </h1>
      </div>

      {/* Filter / View Toggles */}
      <div className='mb-10 flex select-none flex-col items-start justify-between gap-6 border-b border-solid border-muted-foreground/20 pb-6 md:flex-row md:items-center'>
        <div className='flex flex-wrap gap-3'>
          {categories.map(cat => {
            const count = allProjects.filter(
              p => cat === 'All' || p.category === cat,
            ).length;
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative rounded-full border border-solid px-4 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-muted-foreground/30 bg-transparent text-foreground hover:border-foreground'
                }`}
              >
                <span className='font-medium capitalize'>{cat}</span>
                <sup className='ms-1 text-[10px] opacity-70'>{count}</sup>
              </button>
            );
          })}
        </div>

        <div className='flex gap-2 self-end md:self-auto'>
          <button
            onClick={() => setViewMode('list')}
            className={`rounded-full border border-solid p-2.5 transition-all ${
              viewMode === 'list'
                ? 'border-foreground bg-foreground text-background'
                : 'border-muted-foreground/30 bg-transparent text-foreground hover:border-foreground'
            }`}
            aria-label='List View'
          >
            <List size={18} />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`rounded-full border border-solid p-2.5 transition-all ${
              viewMode === 'grid'
                ? 'border-foreground bg-foreground text-background'
                : 'border-muted-foreground/30 bg-transparent text-foreground hover:border-foreground'
            }`}
            aria-label='Grid View'
          >
            <Grid size={18} />
          </button>
        </div>
      </div>

      {/* Projects Presentation */}
      <AnimatePresence mode='wait'>
        {viewMode === 'list' ? (
          <motion.div
            key='list-view'
            variants={fadeTransition}
            initial='initial'
            animate='animate'
            exit='exit'
            className='w-full'
          >
            {/* Table Header */}
            <div className='hidden grid-cols-12 gap-4 border-b border-solid border-muted-foreground/15 px-8 pb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground md:grid'>
              <div className='col-span-4'>Project</div>
              <div className='col-span-3'>Location</div>
              <div className='col-span-4'>Services</div>
              <div className='col-span-1 text-right'>Year</div>
            </div>

            <ul className='group/list w-full'>
              {filteredProjects.map((p, idx) => (
                <li
                  key={p.title}
                  onPointerEnter={({ clientX, clientY }) => {
                    handlePointerEnter(idx);
                    moveItems(clientX, clientY);
                  }}
                  onPointerLeave={({ clientX, clientY }) => {
                    handlePointerLeave(idx);
                    moveItems(clientX, clientY);
                  }}
                  className='border-b border-solid border-muted-foreground/15 px-4 py-6 transition-opacity duration-300 hover:!opacity-100 group-hover/list:opacity-35 md:p-8'
                >
                  <Link
                    href={p.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='grid grid-cols-1 items-center gap-2 md:grid-cols-12 md:gap-4'
                  >
                    <h3 className='col-span-4 text-2xl font-light text-foreground md:text-4xl'>
                      {p.title}
                    </h3>
                    <div className='col-span-3 text-sm font-light text-muted-foreground md:text-base'>
                      {p.location}
                    </div>
                    <div className='col-span-4 text-sm font-light text-muted-foreground md:text-base'>
                      {p.services}
                    </div>
                    <div className='col-span-1 text-right font-mono text-sm font-light text-muted-foreground md:text-base'>
                      {p.year}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hover preview modal for list view */}
            <motion.div
              ref={modalRef}
              variants={scaleUp}
              initial='initial'
              animate={active ? 'enter' : 'closed'}
              className='pointer-events-none fixed left-0 top-0 z-40 h-64 w-80 overflow-hidden rounded bg-secondary-foreground'
            >
              <div
                className='relative size-full'
                style={{
                  top: `${index * -100}%`,
                  transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
                }}
              >
                {filteredProjects.map(p => (
                  <Center key={p.title} className='size-full'>
                    <Image
                      src={p.image}
                      width={320}
                      height={240}
                      className='size-full object-cover'
                      alt={`${p.title} preview`}
                    />
                  </Center>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key='grid-view'
            variants={fadeTransition}
            initial='initial'
            animate='animate'
            exit='exit'
            className='grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-16'
          >
            {filteredProjects.map((p, idx) => (
              <Link
                key={p.title}
                href={p.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex cursor-pointer flex-col gap-4 border-b border-solid border-muted-foreground/10 pb-6'
                onPointerEnter={() => handlePointerEnter(idx)}
                onPointerLeave={() => handlePointerLeave(idx)}
              >
                <div className='relative aspect-[4/3] w-full overflow-hidden rounded bg-secondary-foreground'>
                  <Image
                    src={p.image}
                    fill
                    className='object-cover transition-transform duration-500 ease-out group-hover:scale-105'
                    alt={`${p.title} thumbnail`}
                  />
                  {/* Dynamic hovering label */}
                  <AnimatePresence>
                    {active && index === idx && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className='pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20'
                      >
                        <div className='flex size-20 items-center justify-center rounded-full bg-primary text-sm font-medium text-background shadow-lg'>
                          View
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className='flex items-baseline justify-between pt-2'>
                  <h3 className='text-xl font-light text-foreground md:text-2xl'>
                    {p.title}
                  </h3>
                  <span className='rounded-full bg-muted-foreground/10 px-2.5 py-0.5 font-mono text-xs uppercase text-muted-foreground'>
                    {p.category}
                  </span>
                </div>
                <div className='h-px bg-muted-foreground/20' />
                <div className='flex justify-between text-sm font-light text-muted-foreground'>
                  <span>{p.services}</span>
                  <span className='font-mono'>{p.year}</span>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
