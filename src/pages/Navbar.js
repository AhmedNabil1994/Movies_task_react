
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
function NavBar() {
  const fav = useSelector(state=>state.fav)
  console.log(fav.length)
  return (

  	<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" row collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item col-md-3 col-2 fs-4">
          <Link className="nav-link active " to="/">Movies</Link>
        </li>
        
        <li className="nav-item col-md-3 col-2 fs-4 ">
          <Link className="nav-link" to="/myfav">Favorites</Link>
        </li>
        <span className="btn btn-danger my-3" >{fav.length}</span>        
        <li className="nav-item col-md-3 col-2 offset-2 fs-4">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item col-md-3 col-2 fs-4">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
  
  );
}

export default NavBar;
