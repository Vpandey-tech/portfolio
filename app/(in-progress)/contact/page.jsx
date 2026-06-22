import { ContactPage, Navbar, SocialInfo } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    "Explore Vivek Pandey's interactive portfolio featuring Full Stack and AI projects.",
};

export default function ContactRoute() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <footer className='mt-20 border-t border-solid border-muted-foreground/10 bg-foreground text-background'>
        <SocialInfo />
      </footer>
    </>
  );
}
