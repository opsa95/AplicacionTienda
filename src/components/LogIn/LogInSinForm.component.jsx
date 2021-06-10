import './../LogIn/LogInSinForm.component.scss';
import Button from 'react-bootstrap/Button';

export default function LogInSinForm(state) {
  return (
    <div className="Nav-link"> 
        <Button className="btn btn-success" title = "Iniciar/Finalizar Sesión" onClick={() => {state.clickSesion()}}>
            {state.loggedIn ? 'Finalizar sesión' : 'Iniciar sesión'}
        </Button>
    </div>       
  );
}