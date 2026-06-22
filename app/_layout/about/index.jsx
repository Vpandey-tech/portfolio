'use client';

import { useEffect, useRef, useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton, ParallaxReveal } from '@/components';

function RotatingGlobe() {
  return (
    <div className='relative mx-auto flex size-40 select-none items-center justify-center md:size-56'>
      <svg
        viewBox='0 0 100 100'
        className='size-full text-foreground opacity-15'
        style={{
          animation: 'spin 18s linear infinite',
        }}
      >
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
        <circle
          cx='50'
          cy='50'
          r='48'
          fill='none'
          stroke='currentColor'
          strokeWidth='0.5'
        />
        <ellipse
          cx='50'
          cy='50'
          rx='48'
          ry='15'
          fill='none'
          stroke='currentColor'
          strokeWidth='0.5'
        />
        <ellipse
          cx='50'
          cy='50'
          rx='48'
          ry='30'
          fill='none'
          stroke='currentColor'
          strokeWidth='0.5'
        />
        <ellipse
          cx='50'
          cy='50'
          rx='15'
          ry='48'
          fill='none'
          stroke='currentColor'
          strokeWidth='0.5'
        />
        <ellipse
          cx='50'
          cy='50'
          rx='30'
          ry='48'
          fill='none'
          stroke='currentColor'
          strokeWidth='0.5'
        />
        <line
          x1='50'
          y1='2'
          x2='50'
          y2='98'
          stroke='currentColor'
          strokeWidth='0.5'
        />
        <line
          x1='2'
          y1='50'
          x2='98'
          y2='50'
          stroke='currentColor'
          strokeWidth='0.5'
        />
      </svg>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='size-3 animate-pulse rounded-full bg-foreground' />
      </div>
    </div>
  );
}

export function AboutHero() {
  const phrase =
    'Building robust full stack platforms and cutting-edge AI systems.';

  return (
    <section className='container relative px-6 pb-20 pt-32 md:px-12 md:pt-48'>
      <div className='grid grid-cols-1 items-start gap-10 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <h1 className='text-[clamp(2.2em,5.5vw,5.5em)] font-medium leading-[1.05] tracking-tight text-foreground'>
            <ParallaxReveal paragraph={phrase} />
          </h1>
        </div>

        <div className='flex flex-col items-center lg:col-span-4 lg:items-start lg:ps-10'>
          <RotatingGlobe />
          <p className='mt-10 text-center text-base font-light leading-relaxed text-muted-foreground md:text-lg lg:text-left'>
            I help companies build and deploy intelligent software. From
            database architectures to real-time LLM-powered systems and seamless
            interactive frontends, I design end-to-end applications that are
            performant and scalable.
          </p>
        </div>
      </div>
    </section>
  );
}

export function AboutExplorer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section
      ref={containerRef}
      className='relative my-16 h-[55vh] w-full overflow-hidden md:my-28 md:h-[75vh]'
    >
      <motion.div className='relative -top-[15%] h-[130%] w-full' style={{ y }}>
        <Image
          src='/images/workspace.png'
          alt='Workspace background image'
          fill
          priority
          className='object-cover brightness-50'
          sizes='100vw'
        />
      </motion.div>
      <div className='absolute inset-0 flex items-center justify-center bg-black/10'>
        <h2 className='select-none text-2xl font-light uppercase tracking-[0.2em] text-background opacity-85 md:text-5xl'>
          Always engineering...
        </h2>
      </div>
    </section>
  );
}

export function AboutServices() {
  const services = [
    {
      num: '01',
      title: 'FULL STACK ARCHITECTURE',
      desc: 'Designing robust systems with clean, modular code. I specialize in the PERN/MERN stack, developing highly performant Node.js/Express backends, real-time WebSocket state synchronizations, and optimized PostgreSQL/MongoDB databases.',
    },
    {
      num: '02',
      title: 'AI & AGENTIC WORKFLOWS',
      desc: 'Building state-of-the-art agentic AI systems, LLM pipelines, and RAG architectures. Proficient in LangChain and LlamaIndex for developing contextual chatbots and autonomous workflow execution agents.',
    },
    {
      num: '03',
      title: 'MACHINE LEARNING SYSTEMS',
      desc: 'Developing and deploying machine learning models to production. Experienced in training hybrid ensembles for security threat detection, computer vision models, and touch-free gesture recognition control systems.',
    },
  ];

  return (
    <section className='container relative border-t border-solid border-muted-foreground/30 px-6 py-20 md:px-12'>
      <div className='mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <h3 className='text-3xl font-light text-foreground md:text-5xl'>
            I can help you with...
          </h3>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-16'>
        {services.map(({ num, title, desc }) => (
          <div
            key={num}
            className='group flex flex-col gap-6 border-t border-solid border-muted-foreground/20 pt-6'
          >
            <span className='font-mono text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground'>
              {num}
            </span>
            <h4 className='text-lg font-medium tracking-wide text-foreground'>
              {title}
            </h4>
            <p className='text-base font-light leading-relaxed text-muted-foreground'>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutAchievements() {
  const achievements = [
    {
      title: 'MSME Hackathon Winner',
      detail:
        'Winner for excellence in Computer Vision and IoT; developed a production-level real-time gesture control system using OpenCV and MediaPipe.',
    },
    {
      title: 'Mumbai Hacks Finalist',
      detail:
        'Shortlisted for Engineering Hub, a full-featured Academic LMS built on the MERN stack with WebRTC and Socket.io for live session streaming.',
    },
    {
      title: 'Aavishkar Research Convention',
      detail:
        'Awarded Certificate of Excellence from Mumbai University for research on scalable web system architecture and technical innovation.',
    },
    {
      title: 'ARMIET B.E. (AI & ML)',
      detail:
        'Graduating top of the class with a CGPA of 9.0/10. Coursework: Data Structures, Algorithms, Machine Learning, and Computer Networks.',
    },
  ];

  return (
    <section className='container relative mb-20 border-t border-solid border-muted-foreground/30 px-6 py-20 md:px-12'>
      <div className='mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <h3 className='text-3xl font-light text-foreground md:text-5xl'>
            Achievements & Awards
          </h3>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16'>
        {achievements.map(({ title, detail }) => (
          <div
            key={title}
            className='group flex flex-col gap-4 border-b border-solid border-muted-foreground/10 pb-8'
          >
            <h4 className='text-xl font-medium text-foreground transition-transform duration-300 group-hover:translate-x-2'>
              {title}
            </h4>
            <p className='text-base font-light leading-relaxed text-muted-foreground'>
              {detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <>
      <AboutHero />
      <AboutExplorer />
      <AboutServices />
      <AboutAchievements />
    </>
  );
}
