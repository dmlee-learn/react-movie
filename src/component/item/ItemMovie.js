import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function ItemMovie({key, title, summary, rating, cover, genres}) {
  return (
    <div key={key}>
        <h2><Link to={"/detail"}>{title}({rating})</Link></h2>
        <img src={cover} alt={title}/>
        <p>{summary}</p>
        <ul>
          {genres.map((gener) => 
            <li key={gener}>{gener}</li> 
          )}                     
        </ul>
    </div>
  )
}

ItemMovie.propTypes = {
  key: PropTypes.number.isRequired
  , title: PropTypes.string.isRequired
  , summary: PropTypes.string.isRequired
  , rating: PropTypes.number.isRequired
  , cover: PropTypes.string.isRequired
  , genres: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default ItemMovie;