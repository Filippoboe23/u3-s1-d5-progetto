import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";

const MovieGallery = ({ title, query }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&type=movie&apikey=c775c35a`);
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        } else {
          console.error("No movies found");
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <Container className="my-4 text-white mx-3 ">
      <h2>{title}</h2>
      {loading ? (
        <Spinner animation="border" role="status" className="my-3">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div className="scrollable-row-wrapper">
          <div className="scrollable-row text-white">
            {movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="movie-card"
                style={{
                  backgroundImage: `url(${movie.Poster})`
                }}
              >
                <div className="movie-card-overlay">
                  <h5 className="movie-title text-truncate">{movie.Title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default MovieGallery;
