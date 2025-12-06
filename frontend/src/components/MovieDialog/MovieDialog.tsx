import type { MovieDialogProps } from './MovieDialog.types';
// import styles from './MovieDialog.module.css';
import { mockTitles } from './MovieDialog.stories';

const MovieDialog = ({ titleId }: MovieDialogProps) => {
  const movie = mockTitles.find((t) => t.id === titleId);
  if (!movie) return <div>Movie not found</div>;

  return (
    <div>
      <h1>{movie.name}</h1>
      <p>Category: {movie.category.join(', ')}</p>
      <p>Age Rating: {movie.ageRestriction}</p>

      {movie.type === 'SERIES' ? (
        <ul>
          {movie.videos?.map((ep) => (
            <li key={ep.id}>
              {ep.name} - {ep.duration} mins
            </li>
          ))}
        </ul>
      ) : (
        <video controls src={movie.videos?.[0].url}></video>
      )}
    </div>
  );
};

export default MovieDialog;
