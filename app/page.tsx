'use client';

import Hero from '@/components/home/hero/Hero';
import Introduction from '@/components/home/introduction/Introdution';
import Services from '@/components/home/services/Services';
import Successsection from '@/components/home/successsection/Successsection';

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Services />
      <Successsection />
    </>
  );
}
