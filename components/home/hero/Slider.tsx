'use client';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

type SliderType = {
  SLIDER_HEIGHT: string;
  data: {
    img: string;
  }[];
};

const Slider = ({ data, SLIDER_HEIGHT }: SliderType) => {
  const images = [
    {
      url: data[0]?.img,
    },
    {
      url: data[1]?.img,
    },
    {
      url: data[2]?.img,
    },
  ];

  // function getWindowDimensions() {
  //   const { innerWidth: width, innerHeight: height } = window;
  //   return {
  //     width,
  //     height,
  //   };
  // }

  // const [windowDimensions, setWindowDimensions] = useState(
  //   getWindowDimensions()
  // );

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowDimensions(getWindowDimensions());
  //   }

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <div className="slide-container">
      <Slide

      // autoplay={false}
      // onChange={function noRefCheck(){}}
      // onStartChange={function noRefCheck(){}}
      >
        {images.map((fadeImage, index) => (
          <div
            className="each-slide-effect"
            key={index}
            style={{
              backgroundImage: `url(${fadeImage.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: `${SLIDER_HEIGHT}`,
              width:'100%'
            }}
          ></div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
