'use client';

import Hero from '@/components/home/hero/Hero';
import Servicessection from '@/components/home/servicessection/Servicessection';
import Successsection from '@/components/home/successsection/Successsection';

export default function Home() {
  return (
    <>
      <Hero />
      <Servicessection />
      <Successsection />
    </>
  );
}
