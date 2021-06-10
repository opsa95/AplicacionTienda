import "./LogIn.page.scss";
import LogInView from '../../views/LogIn/LogIn.view';
import { useSelector } from "react-redux";

export default function LogInPage() {
  const allReducers = useSelector((state) => state);   
  return (
    <div className="LogInPage">
      {allReducers.isLogged ? null: <div className = "LogInPublico">Usuario Admin: admin@email.com pass:12345</div> }      
       <LogInView></LogInView>
    </div>    
  );
}
