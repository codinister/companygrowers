import React from 'react';
import { useState } from 'react';

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
  setTitle: Function;
  setImg: Function;
};

const ServBox = ({ img, title,  setTitle, setImg }: ServBoxType) => {

  const handleClick = ()=>{
    setTitle(title)
    setImg(img)
  }

return (
  <div className="servbx" onClick={handleClick}>
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
    <div>{title}</div>
  </div>
);
}

const Servicecard = ({ obj }: ServicecardType) => {
  const [imgdata, setImg] = useState('');
  const [titledata, setTitle] = useState('');

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
          backgroundImage: `url(${imgdata.length > 0? imgdata : mainImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
  
      </div>
      <h5>{titledata.length > 0 ? titledata : title}</h5>
      <div>
        <ServBox title={serv1} img={img1} setTitle={setTitle} setImg={setImg} />
        <ServBox title={serv2} img={img2} setTitle={setTitle} setImg={setImg} />
        <ServBox title={serv3} img={img3} setTitle={setTitle} setImg={setImg} />
        <ServBox title={serv4} img={img4} setTitle={setTitle} setImg={setImg} />
        <ServBox title={serv5} img={img5} setTitle={setTitle} setImg={setImg} />
      </div>
    </div>
  );
};

export default Servicecard;
