import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./pages/Navbar";
import Movies from "./pages/MoviesList";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShowMovie from "./pages/ShowMovie";
// import Mail from "./pages/mail";




function App() {
  return (
    <>
    
    <Router> 
      <NavBar /> 
      <Switch> 
        <Route path="/" component={Movies} exact/>
        <Route path="/myfav" component={Favorites} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/showmovie/:id" component={ShowMovie} exact />

      </Switch>
    </Router>



    </>

  );
}

export default App;
