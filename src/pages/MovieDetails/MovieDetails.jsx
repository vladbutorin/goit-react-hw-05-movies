import React, { useEffect, useState, Suspense } from 'react';
import { useParams, Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { fetchMovieDetails } from 'services/TmbdApi';
import { Button, Container, List, ListInfo, LinkInfo } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetailsFilms = async () => {
      try {
        const detailMovie = await fetchMovieDetails(movieId);
        setMovieInfo(detailMovie);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetailsFilms();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (!movieInfo) {
    return <p>Movie details not found!</p>;
  }

  const { title, release_date, popularity, overview, genres, poster_path, original_title } = movieInfo;

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <Button type="button" onClick={() => navigate(-1)}>
          Go back
        </Button>
      </Link>
      <Container>
        <img
          width="300px"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
          }
          alt={original_title}
        />
        <div>
          <h1>
            {title} ({release_date.slice(0, 4)})
          </h1>
          <p>User score: {popularity}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <List>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </List>
        </div>
      </Container>
      <hr />
      <div>
        <h3>Additional information</h3>
        <ListInfo>
          <li>
            <LinkInfo to={`cast`}>Cast</LinkInfo>
          </li>
          <li>
            <LinkInfo to={`reviews`}>Reviews</LinkInfo>
          </li>
        </ListInfo>
        <hr />
        <Suspense fallback={<Loader />}>
          <Outlet /> {/* Render nested routes */}
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;