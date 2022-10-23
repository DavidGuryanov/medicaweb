import React, { useState } from 'react';
import {
  SlideImage,
  SlidesControlls,
  SlidesWrapper,
  SlideText,
} from './styles';
import Stepper from '../Stepper';
import firstImg from './img/first.png';
import secondImg from './img/second.png';
import thirdImg from './img/third.png';
// import UniversalButtons from '../../../../components/UniversalButtons';

const slidesData = [
  {
    text: 'Thousands of doctors & experts to help your health!',
    src: firstImg,
  },
  {
    text: 'Health checks & consultations easily anywhere anytime',
    src: secondImg,
  },
  {
    text: 'Let`s start living healthy and well with us right now!',
    src: thirdImg,
  },
];

function Slides() {
  const [slide, setSlide] = useState(0);
  return (
    <SlidesWrapper>
      <SlideImage src={slidesData[slide].src} alt={slidesData[slide].text} />
      <SlidesControlls>
        <SlideText>{slidesData[slide].text}</SlideText>
        <Stepper steps={3} current={slide} onChange={setSlide} />
        <button
          type="button"
          style={{
            background: '#246BFD',
            width: '100%',
            border: 'none',
            height: '58px',
            borderRadius: '50px',
          }}
          onClick={() => {
            if (slide < slidesData.length - 1) {
              setSlide(slide + 1);
            } else {
              setSlide(0);
            }
          }}
        >
          Next
        </button>
      </SlidesControlls>
    </SlidesWrapper>
  );
}

export default Slides;
