import PropTypes from "prop-types";

function Movie({ title, rank, attendance }) {
  return (
    <div>
      <h2>
        {rank}위 {title}
      </h2>
      <p>관객수: {attendance}</p>
    </div>
  );
}

Movie.propTypes = {
  rank: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  attendance: PropTypes.string.isRequired,
};

export default Movie;
