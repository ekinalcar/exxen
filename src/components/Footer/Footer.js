import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';

const Footer = ({ isMobile }) => (
  <footer className={`${styles.footer} ${isMobile ? styles.mobile : ''}`}>
    <a
      className={styles.link}
      href="https://www.youtube.com/Exxen"
      aria-label="Youtube"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a>
    <a
      className={styles.link}
      href="https://twitter.com/Exxentr"
      aria-label="Twitter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a
      className={styles.link}
      href="https://www.instagram.com/exxen/"
      aria-label="Instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a
      className={styles.link}
      href="https://www.facebook.com/exxen"
      aria-label="Facebook"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a
      className={styles.link}
      href="https://www.tiktok.com/@exxen"
      aria-label="TikTok"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faTiktok} size="2x" />
    </a>
  </footer>
);

export default Footer;
