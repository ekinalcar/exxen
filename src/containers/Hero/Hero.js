import React from 'react';

import styles from './Hero.module.scss';

const Hero = ({ children }) => <div className={styles.hero}>{children}</div>;

export default Hero;
