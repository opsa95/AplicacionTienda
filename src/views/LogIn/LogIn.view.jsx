import "./LogIn.view.scss";

import { useSelector, useDispatch } from "react-redux";
import { gestionSesion } from "../../redux/actions";
import { useHistory } from "react-router-dom";

import StorePage from "../../pages/Store/Store.page";
import LogInComponent from "../../components/LogIn/LogIn.component";

export default function LogIn() {

  const allReducers = useSelector((state) => state);
     
  const history = useHistory();
  const dispatch = useDispatch();

  let logIn = ({email, password}) => {  
    let usuariologeado = {
      email:email, 
      password:password
    }
    var pass = localStorage.getItem(usuariologeado.email)
    if(pass != null){
      if(pass === usuariologeado.password){
        dispatch(gestionSesion(usuariologeado));      
        history.push({
          pathname: "/store/"      
        });
      }else{
        alert("Contraseña errónea");
        history.push({
          pathname: "/"     
        });
      }      
    }else{
      alert("Usuario no registrado");    
      history.push({
        pathname: "/"
      });
    }    
  };

  return (  
    <div className="LogInView">           
      { allReducers.isLogged ? <StorePage></StorePage> : <LogInComponent loggedIn = {allReducers.isLogged} clickSesion = {logIn}></LogInComponent> }      
    </div>    
  );
}