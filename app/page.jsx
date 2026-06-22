import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Vivek Pandey',
  description:
    "Explore Vivek Pandey's interactive portfolio featuring Full Stack and AI projects.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Thumbnail />
        <Project />
      </main>
      <Contact />
    </>
  );
}
