import { About, Contact, Navbar } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    "Explore Vivek Pandey's interactive portfolio featuring Full Stack and AI projects.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
      <Contact />
    </>
  );
}
