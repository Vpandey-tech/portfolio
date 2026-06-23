'use client';

import { motion } from 'framer-motion';
import { Globe, MoveDownRight } from 'lucide-react';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <Image
        src='/images/vivek-hero-underwater-v3.png'
        className='object-cover'
        style={{ objectPosition: 'center center' }}
        fill={true}
        priority={true}
        sizes='100vw'
        alt='Vivek Pandey Personal Picture'
      />

      {/* Location Pill */}
      <div className='group absolute left-0 top-[38%] z-20 flex select-none items-center gap-6 rounded-r-full bg-[#1c1d20] py-4 pl-6 pr-4 text-white shadow-2xl transition-all duration-300 hover:pr-8 md:top-[42%] md:py-6 md:pl-9 md:pr-6'>
        <div className='text-left font-sans text-[10px] font-normal uppercase leading-relaxed tracking-[0.2em] md:text-[11px]'>
          <span className='block text-white/50'>Located</span>
          <span className='block text-white/50'>in</span>
          <span className='mt-0.5 block font-semibold text-white'>Mumbai</span>
        </div>
        <div className='relative flex size-12 items-center justify-center overflow-hidden rounded-full bg-white/10 transition-all duration-500 group-hover:bg-primary md:size-16'>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className='flex items-center justify-center text-white'
          >
            <Globe className='size-6 md:size-8' strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Vivek Pandey
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>Full Stack</span>
              <span className='block'>&amp; AI Engineer</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
