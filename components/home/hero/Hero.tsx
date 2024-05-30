'use';

import Readmore from '@/components/Readmore';
import Nav from '@/components/nav/Nav';
import Image from 'next/image';
import React from 'react';
import Slider from './Slider';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const obj = [
    { img: '/slider/slider1.jpg' },
    { img: '/slider/slider2.jpg' },
    { img: '/slider/slider3.jpg' },
  ];
  const route = useRouter();

  return (
    <div className="hero">
      <Slider data={obj} SLIDER_HEIGHT="100vh" />
      
      <div>
        <div>
          <h1>Digital Marketing Agency</h1>
          <h6>Using Digital Tools For State-Of-The-Art Marketing Advantage</h6>
          <h4>Grow your business now!</h4>
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default Hero;
