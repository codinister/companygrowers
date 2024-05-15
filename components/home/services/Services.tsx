import React from 'react';
import Servicecard from './Servicecard';

const Services = () => {
  const data = [
    {
      title: 'Digital Marketing',
      mainImage: '/digital/digital.jpg',
      img1: '/digital/one.jpg',
      img2: '/digital/two.jpg',
      img3: '/digital/three.png',
      img4: '/digital/four.png',
      img5: '/digital/five.jpg',
      serv1: 'Social Media Marketing',
      serv2: 'Social Campaigns',
      serv3: 'Pay-Per-Click (PPC) Advertising',
      serv4: 'Search Engine Optimization (SEO',
      serv5: 'Content Marketing',
    },

    {
      title: 'Web Design and Development',
      mainImage: '/services/webdesign.jpg',
      img1: '',
      img2: '',
      img3: '',
      img4: '',
      img5: '',
      serv1: 'Custom Web Design',
      serv2: 'Responsive web design',
      serv3: 'Front-end Developmen',
      serv4: 'Back-end Development',
      serv5: 'Website Maintenance and Support',
    },

    {
      title: 'Branding',
      mainImage: '/services/branding.jpg',
      img1: '',
      img2: '',
      img3: '',
      img4: '',
      img5: '',
      serv1: ' Brand Strategy',
      serv2: 'Visual Identity Development',
      serv3: 'Brand Activation',
      serv4: 'Brand Positioning',
      serv5: 'Brand Monitoring and Management',
    },

    {
      title: ' Digital Media',
      mainImage: '/services/graphics.jpg',
      img1: '',
      img2: '',
      img3: '',
      img4: '',
      img5: '',
      serv1: 'Graphic Design',
      serv2: 'Motion Graphics',
      serv3: 'UI/UX Design',
      serv4: 'Photography',
      serv5: 'Videography',
    },
  ];

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
        {data.map((v, k) => {
          const obj = {
            title: v.title,
            mainImage: v.mainImage,
            img1: v.img1,
            img2: v.img2,
            img3: v.img3,
            img4: v.img4,
            img5: v.img5,
            serv1: v.serv1,
            serv2: v.serv2,
            serv3: v.serv3,
            serv4: v.serv4,
            serv5: v.serv5,
          };

          return <Servicecard key={k} obj={obj} />;
        })}
      </div>
    </section>
  );
};

export default Services;
