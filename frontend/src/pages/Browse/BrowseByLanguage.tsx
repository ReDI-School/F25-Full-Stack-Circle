import type { MovieCardData } from '../../components/MovieCards/MovieCards.types';

const mockMovies: MovieCardData[] = [
  { id: '1', title: 'The Matrix', language: 'English', thumbnail: '/posters/matrix.jpg' },
  { id: '2', title: 'Amélie', language: 'French', thumbnail: '/posters/amelie.jpg' },
  { id: '3', title: 'Spirited Away', language: 'Japanese', thumbnail: '/posters/spiritedaway.jpg' },
  { id: '4', title: 'Roma', language: 'Spanish', thumbnail: '/posters/roma.jpg' },
  { id: '5', title: 'Parasite', language: 'Korean', thumbnail: '/posters/parasite.jpg' },
  { id: '6', title: 'The Matrix2', language: 'English', thumbnail: '/posters/matrix.jpg' },
];

const mockCategories = ['Original Language', 'Dubbing', 'Subtitles'];
const mockLanguages = ['English', 'Arabic', 'Japanese', 'Spanish', 'Korean'];
const mockSortOptions = ['Suggestions For You', 'Year Released', 'A-Z', 'Z-A'];

const LanguagePage = () => {};

export default LanguagePage;
