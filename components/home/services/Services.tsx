import React from 'react';
import Servicecard from './Servicecard';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div>
          <h2>Our Services</h2>
          <div>
            We have helped businesses find their voice in online communication
            and thus expand their customer base and earnings. With our extensive
            suite of services, Here’s how we can help
          </div>
        </div>
      </div>

      <div className="container">
        <Servicecard
          img="/imgs/graphics.jpg"
          title="Digital Media"
          bullet1="Graphic Design"
          bullet2="Motion Graphics"
          bullet3="UI/UX Design"
          bullet4="Photography"
          bullet5="Videography"
        />
        <Servicecard
          img="/imgs/branding.jpg"
          title="Branding"
          bullet1="Graphic Design"
          bullet2="Motion Graphics"
          bullet3="UI/UX Design"
          bullet4="Photography"
          bullet5="Videography"
        />

        <Servicecard
          img="/imgs/digital.jpg"
          title="Branding"
          bullet1="Graphic Design"
          bullet2="Motion Graphics"
          bullet3="UI/UX Design"
          bullet4="Photography"
          bullet5="Videography"
        />

        <Servicecard
          img="/imgs/webdesign.jpg"
          title="Branding"
          bullet1="Graphic Design"
          bullet2="Motion Graphics"
          bullet3="UI/UX Design"
          bullet4="Photography"
          bullet5="Videography"
        />
      </div>
    </section>
  );
};

export default Services;
