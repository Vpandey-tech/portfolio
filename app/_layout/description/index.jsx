'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

const phrase =
  'Building high-performance full-stack architectures and agentic AI systems that actually scale. Turning complex problems into clean, high-performance digital solutions.';

export function Description() {
  return (
    <article className='container relative'>
      <Wrapper>
        <div className='basis-full lg:basis-5/12'>
          <Title>
            <ParallaxReveal paragraph={phrase} />
          </Title>
        </div>

        <div className='flex basis-full flex-col justify-between gap-8 lg:basis-6/12'>
          <div className='w-full'>
            <ParallaxFade>
              <Balancer as='p' className='mt-2 text-base lg:text-lg'>
                As the Tech Lead at{' '}
                <a
                  href='https://technewity.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary'
                >
                  Technewity Labs
                </a>
                —which I built from the ground up—I combine system design,
                optimized code, and ML to ship systems that don&apos;t just run,
                but dominate. I live where clean architecture meets cutting-edge
                AI. Every detail is an opportunity to elevate the web
                experience.
              </Balancer>
            </ParallaxFade>
          </div>

          <motion.div
            initial={{ y: '25%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            className='relative flex w-full justify-start pt-8 lg:mt-auto lg:justify-end'
          >
            <Link href='/about' passHref>
              <MagneticButton variant='ghost' size='xl'>
                About me
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </Wrapper>
    </article>
  );
}
