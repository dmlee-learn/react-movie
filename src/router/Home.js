import {useState, useEffect} from "react";
import ItemMovie from "../component/item/ItemMovie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {    
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {getMovies()}, []);
  //console.log(movies);
  return (
      <div>
        <h1>Movies</h1>
          {loading ? <h1>Loading</h1>:(
            <div>
              {movies.map((data) => (
                <ItemMovie 
                  key={data.id} 
                  title={data.title} 
                  rating={data.rating} 
                  cover={data.small_cover_image} 
                  summary={data.summary} 
                  genres={data.genres} />
              )
            )}
          </div>)
          }            
      </div>
  );
}

export default Home;
