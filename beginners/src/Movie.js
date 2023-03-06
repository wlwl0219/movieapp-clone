import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, rank, attendance }) {
  return (
    <div>
      <h2>
        <Link to={`/detail/${id}`}>{title}</Link>
      </h2>
      <p>관객수: {attendance}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  attendance: PropTypes.string.isRequired,
};

export default Movie;
