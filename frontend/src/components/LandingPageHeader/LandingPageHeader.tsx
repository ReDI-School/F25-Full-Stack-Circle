import styles from './LandingPageHeader.module.css';
import RediflixLogo from '../../assets/images/logo.svg';
import Button from '../Button/Button';
import Select from '../Select/Select';

export const LandingPageHeader = () => {
  const selectOptions = [
    { label: 'Original Language', value: 'placeholder' },
    { label: 'English', value: 'en' },
    { label: 'Deutsch', value: 'de' },
    { label: 'Ukrainian', value: 'uk' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
    { label: 'Italian', value: 'it' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Chinese', value: 'zh' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Hindi', value: 'hi' },
    { label: 'Bengali', value: 'bn' },
    { label: 'Punjabi', value: 'pa' },
    { label: 'Javanese', value: 'jv' },
    { label: 'Turkish', value: 'tr' },
    { label: 'Vietnamese', value: 'vi' },
    { label: 'Polish', value: 'pl' },
    { label: 'Dutch', value: 'nl' },
    { label: 'Swedish', value: 'sv' },
    { label: 'Norwegian', value: 'no' },
    { label: 'Finnish', value: 'fi' },
    { label: 'Danish', value: 'da' },
    { label: 'Czech', value: 'cs' },
    { label: 'Hungarian', value: 'hu' },
    { label: 'Greek', value: 'el' },
    { label: 'Romanian', value: 'ro' },
    { label: 'Bulgarian', value: 'bg' },
    { label: 'Croatian', value: 'hr' },
    { label: 'Serbian', value: 'sr' },
    { label: 'Slovak', value: 'sk' },
    { label: 'Slovenian', value: 'sl' },
  ];

  return (
    <header className={styles.header}>
      <img src={RediflixLogo} alt="Rediflix Logo" className={styles.logo} />
      <div className={styles.selectors}>
        <Select options={selectOptions} placeholder="English" />
        <Button variant="primary" size="medium">
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default LandingPageHeader;
