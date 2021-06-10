import './../LogIn/LogIn.component.scss';
import { Formik } from "formik";
import * as Yup from "yup";
import Button from 'react-bootstrap/Button';

export default function LogIn(state) {
 
 //PARA EL FORM
 const validaciones = Yup.object().shape({    
    email: Yup.string()
      .required("Por favor, escribe tu email.")
      .email("Formato de email incorrecto."),
      password: Yup.string()
      .required("Por favor, incluye tu contraseña")
      .min(5, "Mínimo 5 carácteres.")    
  });

  let initialValues = { email: "", password: "" };

  let manejarEnvioUsuario = (values, { setSubmitting }) => {
    setTimeout(() => {      
      state.clickSesion(values);
      setSubmitting(false);
    }, 1000);
  };

  return (     
    <Formik initialValues={initialValues} onSubmit={manejarEnvioUsuario}
    validationSchema={validaciones}>
    {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
      <form onSubmit={handleSubmit} >        
         {errors.asunto ? (<b>{errors.asunto}</b>) : null} 
        <input
          className="form-control"
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        {errors.email ? (<b>{errors.email}</b>) : null}
        <br/> 
        <input
          className="form-control"          
          placeholder="Contraseña"
          type="text"
          name="password"
          onChange={handleChange}
          value={values.password}
        /> 
        {errors.password ? (<b stlye = "color : green ">{errors.password}</b>) : null}
        <br/>          
        <Button className="btn btn-success" type="submit" disabled={isSubmitting} >{state.loggedIn ? 'Finalizar sesión' : 'Iniciar sesión'}</Button>        
      </form>         
    )}
  </Formik>  
  );  
}