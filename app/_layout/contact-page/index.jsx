'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    services: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '1130eb6e-d1cc-486a-b018-b06bf1583398',
          name: formData.name,
          email: formData.email,
          org: formData.org,
          services: formData.services,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert(
          `Thank you ${formData.name}! Your message has been sent successfully.`,
        );
        setFormData({
          name: '',
          email: '',
          org: '',
          services: '',
          message: '',
        });
      } else {
        alert('Something went wrong. Please try again or contact me directly.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('An error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='container relative min-h-screen px-6 pb-10 pt-32 text-foreground md:px-12 md:pt-48'>
      <div className='grid grid-cols-1 items-start gap-16 lg:grid-cols-12'>
        {/* Left Column - Form */}
        <div className='flex flex-col gap-10 lg:col-span-8'>
          <h1 className='text-[clamp(2.5em,5.5vw,5.5em)] font-medium leading-[1.05] tracking-tight'>
            Let&apos;s start a<br />
            project together
          </h1>

          <form
            onSubmit={handleSubmit}
            className='mt-6 flex select-none flex-col gap-10'
          >
            {/* Step 1 */}
            <div className='group flex flex-col gap-4 border-b border-solid border-muted-foreground/20 pb-4 transition-all duration-300 focus-within:border-foreground md:flex-row md:items-center'>
              <span className='font-mono text-sm text-muted-foreground/60'>
                01
              </span>
              <label
                htmlFor='name'
                className='min-w-[200px] whitespace-nowrap text-xl font-light'
              >
                What&apos;s your name?
              </label>
              <input
                required
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='John Doe *'
                className='w-full border-none bg-transparent px-2 py-1 text-xl font-light outline-none placeholder:text-muted-foreground/35'
              />
            </div>

            {/* Step 2 */}
            <div className='group flex flex-col gap-4 border-b border-solid border-muted-foreground/20 pb-4 transition-all duration-300 focus-within:border-foreground md:flex-row md:items-center'>
              <span className='font-mono text-sm text-muted-foreground/60'>
                02
              </span>
              <label
                htmlFor='email'
                className='min-w-[200px] whitespace-nowrap text-xl font-light'
              >
                What&apos;s your email?
              </label>
              <input
                required
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='john@doe.com *'
                className='w-full border-none bg-transparent px-2 py-1 text-xl font-light outline-none placeholder:text-muted-foreground/35'
              />
            </div>

            {/* Step 3 */}
            <div className='group flex flex-col gap-4 border-b border-solid border-muted-foreground/20 pb-4 transition-all duration-300 focus-within:border-foreground md:flex-row md:items-center'>
              <span className='font-mono text-sm text-muted-foreground/60'>
                03
              </span>
              <label
                htmlFor='org'
                className='min-w-[200px] whitespace-nowrap text-xl font-light'
              >
                What&apos;s your organization?
              </label>
              <input
                type='text'
                id='org'
                name='org'
                value={formData.org}
                onChange={handleChange}
                placeholder='John & Doe ®'
                className='w-full border-none bg-transparent px-2 py-1 text-xl font-light outline-none placeholder:text-muted-foreground/35'
              />
            </div>

            {/* Step 4 */}
            <div className='group flex flex-col gap-4 border-b border-solid border-muted-foreground/20 pb-4 transition-all duration-300 focus-within:border-foreground md:flex-row md:items-center'>
              <span className='font-mono text-sm text-muted-foreground/60'>
                04
              </span>
              <label
                htmlFor='services'
                className='min-w-[200px] whitespace-nowrap text-xl font-light'
              >
                What services do you need?
              </label>
              <input
                type='text'
                id='services'
                name='services'
                value={formData.services}
                onChange={handleChange}
                placeholder='Web Design, Web Development ...'
                className='w-full border-none bg-transparent px-2 py-1 text-xl font-light outline-none placeholder:text-muted-foreground/35'
              />
            </div>

            {/* Step 5 */}
            <div className='group flex flex-col gap-4 border-b border-solid border-muted-foreground/20 pb-6 transition-all duration-300 focus-within:border-foreground md:flex-row'>
              <span className='pt-1 font-mono text-sm text-muted-foreground/60'>
                05
              </span>
              <label
                htmlFor='message'
                className='min-w-[200px] whitespace-nowrap pt-1 text-xl font-light'
              >
                Your message
              </label>
              <textarea
                required
                rows={3}
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Hello Vivek, can you help me with ... *'
                className='w-full resize-none border-none bg-transparent px-2 py-1 text-xl font-light outline-none placeholder:text-muted-foreground/35'
              />
            </div>

            {/* Circular submit button positioned on bottom-right */}
            <div className='flex justify-end pt-4'>
              <MagneticButton
                type='submit'
                variant='primary'
                size='lg'
                disabled={isSubmitting}
                className={`flex size-36 items-center justify-center rounded-full text-lg font-medium shadow-md transition-all duration-300 ${
                  isSubmitting ? 'scale-95 cursor-not-allowed opacity-50' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </MagneticButton>
            </div>
          </form>
        </div>

        {/* Right Column - Info */}
        <div className='flex flex-col gap-12 lg:col-span-4 lg:ps-16 lg:pt-16'>
          {/* Small circular profile image */}
          <div className='relative size-28 overflow-hidden rounded-full border border-solid border-muted-foreground/20'>
            <Image
              src='/images/vivek-hero.jpg'
              alt='Vivek profile headshot'
              fill
              className='object-cover'
              style={{ objectPosition: '50% 15%' }}
            />
          </div>

          <div className='flex select-none flex-col gap-6'>
            <div>
              <h5 className='mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                Contact Details
              </h5>
              <a
                href='mailto:vp983351@gmail.com'
                className='block text-lg font-light hover:underline'
              >
                vp983351@gmail.com
              </a>
              <a
                href='tel:+917410112631'
                className='mt-1 block text-lg font-light hover:underline'
              >
                +91 74101 12631
              </a>
            </div>

            <div>
              <h5 className='mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                Personal Details
              </h5>
              <p className='text-lg font-light text-foreground'>
                Mumbai, Maharashtra, India
              </p>
              <a
                href='https://vivek.technewity.com'
                target='_blank'
                rel='noreferrer'
                className='mt-1 block text-lg font-light hover:underline'
              >
                vivek.technewity.com
              </a>
            </div>

            <div>
              <h5 className='mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                Socials
              </h5>
              <div className='flex flex-col gap-1'>
                {socialMedias.map(({ href, title }) => (
                  <a
                    key={title}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-max text-lg font-light hover:underline'
                  >
                    {title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
