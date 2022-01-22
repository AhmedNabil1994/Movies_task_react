
import axios from "axios";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addFav,remFav } from "../redux/action";

function Movies() {

		const [movies, setMovies] = useState([])

		useEffect(() => {
			axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e316ea7fec16ec29e28bee54c7878ae6")
			.then((result)=> {
				setMovies(result.data.results)
				console.log(result.data.results)


			})
			.catch((err) => {
				console.log(err)
			})
		},[])

		const dispatch = useDispatch()
		const fav = useSelector(state=>state.fav)


  return (
		<>
  			


			<h1 className="text-center"> Movies </h1>
			
			<div className="row justify-content-center">
			
			{movies.map((movie) => {
				return (  
					<div className="card text-center col-md-3 col-sm-5 ">
						<div className="card "style={{width: "18rem"}}>
							<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}className="card-img-top" alt=""/>
							<div className="card-body">
							<Link  key={movie.id} to={`/showmovie/${movie.id}`}> 
							<h5 className="card-title">{movie.original_title}</h5>
							</Link>
							</div>
						</div>
						<button onClick={()=>fav.indexOf(movie.id)==-1 && dispatch(addFav(movie.id))} className="btn btn-primary">Add to favorites</button>
						<button onClick={()=>dispatch(remFav(movie.id))} className="btn btn-danger">Remove from favorites</button>

					</div>
					
						
						)
					})}
						
					</div>  			

  		</>

  
  );
}

export default Movies;
