import React from 'react';

type ServicecardType = {
  obj: {
    title: string;
    mainImage: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
    serv1: string;
    serv2: string;
    serv3: string;
    serv4: string;
    serv5: string;
  };
};

type ServBoxType = {
  img: string;
  title: string;
};

const ServBox = ({ img, title }: ServBoxType) => (
  <div className="servbx">
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
    <div>
    {title}
    </div>
  </div>
);

const Servicecard = ({ obj }: ServicecardType) => {
  const {
    title,
    mainImage,
    img1,
    img2,
    img3,
    img4,
    img5,
    serv1,
    serv2,
    serv3,
    serv4,
    serv5,
  } = obj;

  return (
    <div className="servicecard">
      <div
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h5>{title}</h5>
      </div>

      <div>
        <ServBox title={serv1} img={img1} />
        <ServBox title={serv2} img={img2} />
        <ServBox title={serv3} img={img3} />
        <ServBox title={serv4} img={img4} />
        <ServBox title={serv5} img={img5} />
      </div>
    </div>
  );
};

export default Servicecard;
