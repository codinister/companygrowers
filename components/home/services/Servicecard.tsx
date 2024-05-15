import React from 'react';

type ServicecardType = {
  img: string;
  title: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  bullet4: string;
  bullet5: string;
};

const Servicecard = ({
  img,
  title,
  bullet1,
  bullet2,
  bullet3,
  bullet4,
  bullet5,
}: ServicecardType) => {
  return (
    <div
      className="servicecard"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
      <h4>{title}</h4>
        <ul>
          <li>{bullet1}</li>
          <li>{bullet2}</li>
          <li>{bullet3}</li>
          <li>{bullet4}</li>
          <li>{bullet5}</li>
        </ul>
      </div>


    </div>
  );
};

export default Servicecard;
