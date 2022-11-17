import PropTypes from "prop-types"

function DetailMovie({id, title, year, like_count, description, rating, cover, genres}) {
  return (
    <div key={id}>
        <div style={{width: '30%',float: 'left'}}>
            <img src={cover} alt={title}/>
        </div>
        <div style={{width: '70%',float: 'left'}}>
            <h2>{title}({rating})</h2>
            <p>year : {year}</p>
            <p>like : {like_count}</p>
            <ul>
            {genres.map((gener) => 
                <li key={gener}>{gener}</li> 
            )}                     
            </ul>
            <p>{description}</p>
        </div>
        
    </div>
  )
}

DetailMovie.propTypes = {
  id: PropTypes.number.isRequired
  , title: PropTypes.string.isRequired
  , description: PropTypes.string.isRequired
  , rating: PropTypes.number.isRequired
  , cover: PropTypes.string.isRequired
  , genres: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default DetailMovie;