import React, { useState, useEffect, useCallback } from 'react';

import Header from './Header';
import Title from './Title';
import Carousel from './Carousel';
import Footer from './Footer';

import Hero from '../containers/Hero';

import { sliderData } from '../utils/data';

const App = () => {
  const [width, setUserWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = useCallback(() => {
    setUserWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);
  const isMobile = width <= 980;

  return (
    <>
      <main className="container">
        <Header />
        <Hero>
          <Title isMobile={isMobile} />
          <Carousel sliderData={sliderData} />
        </Hero>
      </main>
      {isMobile && <Footer isMobile={isMobile} />}
    </>
  );
};

export default App;
