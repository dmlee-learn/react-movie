import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function ItemMovie({id, title, summary, rating, cover, genres}) {
  return (
    <div>
        <h2><Link to={`/movie/${id}`}>{title}({rating})</Link></h2>
        <img src={cover} alt={title}/>
        <p>{summary.length > 255 ? `${summary.slice(0, 255)}...`: summary}</p>
        <ul>
          {genres.map((gener) => 
            <li key={gener}>{gener}</li> 
          )}                     
        </ul>
    </div>
  )
}

ItemMovie.propTypes = {
  id: PropTypes.number.isRequired
  , title: PropTypes.string.isRequired
  , summary: PropTypes.string.isRequired
  , rating: PropTypes.number.isRequired
  , cover: PropTypes.string.isRequired
  , genres: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default ItemMovie;