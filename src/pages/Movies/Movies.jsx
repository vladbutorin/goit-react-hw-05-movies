import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { fetchSearchByKeyword } from 'services/TmbdApi';
import Loader from 'components/Loader/Loader';
import EditorList from 'pages/EditorList/EditorList';
import Form from 'components/Form/Form';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchMovies = useCallback(queryMovie => {
    setLoading(true);

    fetchSearchByKeyword(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults);
        setNoMoviesText(searchResults.length === 0);
        setSearchParams({ query: queryMovie });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setSearchFilms, setNoMoviesText, setSearchParams]);

  useEffect(() => {
    const initialQuery = searchParams.get('query');
    if (initialQuery) {
      searchMovies(initialQuery);
    }
  }, [searchParams, searchMovies]);

  return (
    <main>
      <Form searchMovies={searchMovies} />
      {loading && <Loader />}
      {noMoviesText && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms && <EditorList films={searchFilms} />}
    </main>
  );
};

export default Movies;