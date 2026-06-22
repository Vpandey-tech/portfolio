import { Contact, Navbar, Work } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work',
  description:
    "Explore Vivek Pandey's interactive portfolio featuring Full Stack and AI projects.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <Work />
      </main>
      <Contact />
    </>
  );
}
