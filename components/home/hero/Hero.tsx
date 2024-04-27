'use';

import Readmore from '@/components/Readmore';
import Nav from '@/components/nav/Nav';
import React from 'react';

const Hero = () => {
  return (
    <div className="hero">


      <div>
        <div>
          <div>
          <h1>Digital Marketing Agency</h1>
          <h6>Using Digital Tools Form Modern Marketing Advantages</h6>
          <h6>Grow your business now!</h6>

          <Readmore name="Read more">Get Started</Readmore>
          </div>
        </div>
        <div>
          <div style={{
            backgroundImage: `url('/laptop.png')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default Hero;
