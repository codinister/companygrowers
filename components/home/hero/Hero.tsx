'use';

import Readmore from '@/components/Readmore';
import Nav from '@/components/nav/Nav';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <div>
          <h1>Digital Marketing Agency</h1>
          <h6>Using Digital Tools For State-Of-The-Art Marketing Advantage</h6>
          <h4>Grow your business now!</h4>
          <Readmore name="Read more">Get Started</Readmore>
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default Hero;
