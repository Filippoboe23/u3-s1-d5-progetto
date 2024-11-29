import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NetflixNavbar from "./components/NetflixNavbar";
import TVShows from "./components/TVShows";
import NetflixFooter from "./components/NetflixFooter";
import MovieGallery from "./components/MovieGallery";
import "./App.css";

function App() {
  return (
    <>
      <NetflixNavbar />
      <TVShows />

      <MovieGallery title="Harry Potter" query="Harry Potter" />

      <MovieGallery title="Lord of the Rings" query="Lord of the Rings" />

      <MovieGallery title="Avengers" query="Avengers" />

      <NetflixFooter />
    </>
  );
}

export default App;
