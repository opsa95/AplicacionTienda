import "./Nav.components.scss";
import { Link } from "react-router-dom";
import LogInSinForm from "../../components/LogIn/LogInSinForm.component";
import { useSelector, useDispatch } from "react-redux";
import { gestionSesion } from "../../redux/actions";


export default function Nav() {
  const allReducers = useSelector((state) => state);
  const dispatch = useDispatch();
  let logIn = () => {
    dispatch(gestionSesion());
  };
 
  return (    
    <header className="row align-items-center p-2">
                 
     <nav className= { allReducers.esDeDia ? "navbar navbar-expand-lg navbar-light bg-light" : "navbar navbar-expand-lg navbar-dark bg-dark"}>
     <div className="container-fluid">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        {allReducers.isLogged ? (
          <Link className="Nav-link" to="/">
            Store
          </Link>
        ) : null}
        </li>       
        <li className="nav-item">
        {allReducers.isLogged ? (
          <Link className="Nav-link" to="/about">
            About
          </Link>
        ) : null}
        </li>
        <li className="nav-item ml-auto">
        {allReducers.isLogged ? (
          <LogInSinForm
            loggedIn={allReducers.isLogged}
            clickSesion={logIn}
          ></LogInSinForm>
        ) : null} 
        </li>
      </ul>    
        
        
       
        </div>       
      </nav>    
    </header>
  );
}
