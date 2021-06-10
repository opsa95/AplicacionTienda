
import { useSelector, useDispatch } from "react-redux";
import { gestionDia } from "../../redux/actions";
	
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';	
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const allReducers = useSelector((state) => state);
    const dispatch = useDispatch();
    
    let setDia = () => {
      dispatch(gestionDia());
    };
    const texto = allReducers.esDeDia ? "Cambiar a modo nocturno  " : "Cambiar a modo diurno  ";
  return (
   
    <button className="btn btn-success" onClick={() => setDia(!allReducers.esDeDia)}>
    {texto}{allReducers.esDeDia ? 
    <FontAwesomeIcon icon={faMoon}/>
   : <FontAwesomeIcon icon={faSun}/> }
  </button>
  );
}
