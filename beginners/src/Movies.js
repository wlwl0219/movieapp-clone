import { useEffect, useState, useCallback } from "react";
import Movie from "./Movie";

const MOVIE_KEY = process.env.REACT_APP_MOVIE_KEY;

function Movies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = useCallback(async () => {
    const json = await (
      await fetch(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${MOVIE_KEY}&targetDt=20230201`
      )
    ).json();

    setMovies(json.boxOfficeResult.weeklyBoxOfficeList);
    setLoading(false);
  }, []);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.movieCd}
              rank={movie.rank}
              title={movie.movieNm}
              attendance={movie.audiAcc}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;
