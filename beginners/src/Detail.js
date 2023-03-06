import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MOVIE_KEY = process.env.REACT_APP_MOVIE_KEY;

function Detail() {
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${MOVIE_KEY}&movieCd=${id}`
      )
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>detail</h1>
    </div>
  );
}

export default Detail;
