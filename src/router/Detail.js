import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import DetailMovie from "../component/item/DetailMovie";
function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const {id} = useParams();

    const getMovie = async () => {    
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setLoading(false);
        console.log(movie);
    };

    useEffect(() => {getMovie()}, []);
    //console.log(movie);
    return (
        <div>
            <h1>Movie</h1>
            {loading ? <h1>Loading</h1>:(
                <div>
                    {
                        <DetailMovie 
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        year={movie.year}
                        like_count={movie.like_count}
                        rating={movie.rating} 
                        cover={movie.medium_cover_image} 
                        description={movie.description_intro} 
                        genres={movie.genres} />
                    }
                </div>)
            }
        </div>
    );
}

export default Detail