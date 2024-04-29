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
          <div>
          <h1>Digital Marketing Agency</h1>
          <h6>Using Digital Tools Form Modern Marketing Advantages</h6>
          <h4>Grow your business now!</h4>

          <Readmore name="Read more">Get Started</Readmore>

          <div className="social-btn">
            <a href="https://www.facebook.com" target="_blank">
              <Image src="/facebook.jpg" width="40" height="36" alt="" />
            </a>
            <a href="https://www.instagram.com"  target="_blank">
              <Image src="/instagram.jpg" width="40" height="36" alt="" />
            </a>
            <a href="https://www.twitter.com"  target="_blank">
              <Image src="/x.jpg" width="40" height="36" alt="" />
            </a>
          </div>
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
