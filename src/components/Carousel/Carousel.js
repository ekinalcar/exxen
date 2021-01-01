import React from 'react';
import Slider from 'react-slick';

import Icon from '../Icon/Icon';
import styles from './Carousel.module.scss';

const SampleNextArrow = ({ onClick }) => (
  <div onClick={onClick} className={`${styles.arrow} slick-arrow slick-next`}>
    <Icon name="arrow-next" />
  </div>
);
const SamplePrevArrow = ({ onClick }) => (
  <div onClick={onClick} className={`${styles.arrow} slick-arrow slick-prev`}>
    <Icon name="arrow-prev" />
  </div>
);

const Carousel = ({ sliderData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} className={styles.carousel}>
      {sliderData.map(({ id, src }) => (
        <div key={id}>
          <img src={src} alt="Exxen" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
