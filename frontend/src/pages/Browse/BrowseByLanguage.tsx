import { useState, useMemo } from 'react';

import Select from '../../components/Select/Select';
import MovieCards from '../../components/MovieCards/MovieCards';
import type { MovieCardData } from '../../components/MovieCards/MovieCards.types';

import styles from './BrowseByLanguage.module.css';
import { sharedStyles } from '../../shared';

const mockMovies: MovieCardData[] = [
  { id: 1, title: 'The Matrix', language: 'English', thumbnail: '/posters/matrix.jpg' },
  { id: 2, title: 'Amélie', language: 'French', thumbnail: '/posters/amelie.jpg' },
  { id: 3, title: 'Spirited Away', language: 'Japanese', thumbnail: '/posters/spiritedaway.jpg' },
  { id: 4, title: 'Roma', language: 'Spanish', thumbnail: '/posters/roma.jpg' },
  { id: 5, title: 'Parasite', language: 'Korean', thumbnail: '/posters/parasite.jpg' },
  { id: 6, title: 'The Matrix2', language: 'Arabic', thumbnail: '/posters/matrix.jpg' },
];

const mockCategories = ['Original Language', 'Dubbing', 'Subtitles'];
const mockLanguages = ['English', 'Arabic', 'Japanese', 'Spanish', 'Korean'];
const mockSortOptions = ['Suggestions For You', 'Year Released', 'A-Z', 'Z-A'];

const LanguagePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(mockCategories[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(mockLanguages[0]);
  const [selectedSort, setSelectedSort] = useState(mockSortOptions[0]);

  const categoryOptions = mockCategories.map((c) => ({ label: c, value: c }));
  const languageOptions = mockLanguages.map((l) => ({ label: l, value: l }));
  const sortOptions = mockSortOptions.map((s) => ({ label: s, value: s }));

  const filteredMovies = useMemo(() => {
    return mockMovies
      .filter((movie) => movie.language === selectedLanguage)
      .filter((movie) =>
        selectedCategory === 'Original Language'
          ? true
          : selectedCategory === 'Dubbing'
            ? !movie.seasonInfo
            : !!movie.seasonInfo
      )
      .filter((movie) => movie.title?.toLowerCase());
  }, [selectedLanguage, selectedCategory]);

  return (
    <div className={sharedStyles.pageContainer}>
      <div className={styles.languagePage}>
        <div className={styles.filtersBar}>
          <h1 className={styles.languagePageTitle}>Browse by Language</h1>
          <div className={styles.filtersBarContent}>
            <span>Select Your Preferences</span>

            <div className={styles.filtersBarDropdown}>
              <Select
                id="category-select"
                options={categoryOptions}
                selected={categoryOptions.find((o) => o.value === selectedCategory) ?? null}
                onChange={(o) => setSelectedCategory(o.value)}
                placeholder={selectedCategory}
              />
            </div>

            <div className={styles.filtersBarDropdown}>
              <Select
                id="language-select"
                options={languageOptions}
                selected={languageOptions.find((o) => o.value === selectedLanguage) ?? null}
                onChange={(o) => setSelectedLanguage(o.value)}
                placeholder={selectedLanguage}
              />
            </div>

            <span>Sort by</span>
            <div className={styles.filtersBarDropdown}>
              <Select
                id="sort-select"
                options={sortOptions}
                selected={sortOptions.find((o) => o.value === selectedSort) ?? null}
                onChange={(o) => setSelectedSort(o.value)}
                placeholder={selectedSort}
              />
            </div>
          </div>
        </div>

        {filteredMovies.length > 0 ? (
          <MovieCards cards={filteredMovies} />
        ) : (
          <div className={styles.noMovies}>No movies found for selected filters.</div>
        )}
      </div>
    </div>
  );
};

export default LanguagePage;
