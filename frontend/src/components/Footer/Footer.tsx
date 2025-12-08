import Select from '../../components/Select/Select';
import styles from './Footer.module.css';
import { languagesMap } from '../../constants/languages';

const footerLinks = [
  [
    { label: 'FAQ', href: '#faq' },
    { label: 'Help Center', href: '/help' },
    { label: 'Account', href: '/account' },
    { label: 'Media Center', href: '/media' },
    { label: 'Investor Relations', href: '/investors' },
    { label: 'Jobs', href: '/jobs' },
  ],
  [
    { label: 'Netflix Shop', href: '/shop' },
    { label: 'Redeem Gift Cards', href: '/redeem' },
    { label: 'Buy Gift Cards', href: '/buy' },
    { label: 'Ways to Watch', href: '/ways-to-watch' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Privacy', href: '/privacy' },
  ],
  [
    { label: 'Cookie Preferences', href: '/cookies' },
    { label: 'Corporate Information', href: '/corporate' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Speed Test', href: '/speed-test' },
    { label: 'Legal Notices', href: '/legal' },
    { label: 'Only on Netflix', href: '/only-on-netflix' },
  ],
  [
    { label: 'Do Not Sell or Share Personal Information', href: '/do-not-sell' },
    { label: 'Ad Choices', href: '/ad-choices' },
  ],
];

const selectOptions = Object.entries(languagesMap).map(([value, label]) => ({
  value,
  label,
}));
const defaultLanguage = selectOptions.find((option) => option.value === 'en');

const Footer = () => {
  return (
    <footer className={styles.footer} aria-labelledby="footer-heading">
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.helpText}>
            <span>Questions? Call </span>
            <a className={styles.phoneLink} href="tel:1-844-505-2993">
              1-844-505-2993
            </a>
          </div>
        </div>

        <div className={styles.linksGrid} role="navigation" aria-label="Footer navigation">
          {footerLinks.map((column, colIndex) => (
            <ul key={colIndex} className={styles.linkColumn}>
              {column.map((link) => (
                <li key={link.label} className={styles.linkItem}>
                  <a href={link.href ?? '#'} className={styles.link} target="_blank">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className={styles.controlsRow}>
          <Select id="footer-language" options={selectOptions} selected={defaultLanguage} />
          <div className={styles.copyright}>
            <small>© {new Date().getFullYear()} Rediflix, Inc.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
