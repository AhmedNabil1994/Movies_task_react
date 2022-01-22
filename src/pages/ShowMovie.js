
// import {useParams} from "react-router-dom";
import {useState, useEffect}  from  "react"
import axios from "axios";



function ShowMovie(props) {

	// const params  = useParams()
	// console.log(params,"params")
	console.log(props.match.params.id,"props")
	const id=props.match.params.id

	const [movieInfo, setInfo] = useState({})


	useEffect(() => {
		
		axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e316ea7fec16ec29e28bee54c7878ae6`)
		.then((result)=> {
			setInfo(result.data)
			console.log(result.data)

		})
		.catch((err) => {
			console.log(err)
		})
	}, [])






  return (
  	<>  
	  
<div className="row justify-content-center ">
<div className="card mb-3 border border-dark shadow" style={{width: "60rem"}}>
  <div className="row g-0">
    <div className="col-md-4">
	<img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}className="card-img-top" alt=""/>
    </div>

    <div className="col-md-8 text-center">
      <div className="card-body">
	  <h5 className="card-title ">Movie details</h5>
	  <p className="text-danger btn btn-secondary ">Language</p>
		<p className="card-text">{`${movieInfo.original_language}`}</p>
		<p className="text-danger btn btn-secondary ">Title</p>
		<p className="card-text">{`${movieInfo.original_title}`}</p>
		<p className="text-danger btn btn-secondary">Overview</p>
		<p className="card-text">{`${movieInfo.overview}`}</p>
      </div>
    </div>
  </div>
</div>
</div>


  	</>

  
  );
}

export default ShowMovie;
