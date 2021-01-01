import React from 'react';
import Footer from '../Footer';

import styles from './Title.module.scss';

const Title = ({ isMobile }) => (
  <div className={styles.titleContainer}>
    <h1 className={styles.title}>
      Exxen, Turkiye'nin Dijital Platformu
      <div className={styles.special}>1 Ocak'ta Yayinda</div>
    </h1>
    <p className={styles.paragraph}>
      Exxen TV içerisinde dizilerin ve çeşitli programların yer aldığı bir
      dijital platform olarak adlandırılabilir. Yani aslında bir televizyon
      kanalı değil bir dijital platform. 1 Ocak 2021 itibariyle yayın hayatına
      başlayan Exxen platformunda birçok farklı proje bulunuyor.
    </p>
    {!isMobile && <Footer />}
  </div>
);

export default Title;
