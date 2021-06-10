/** REDUX STATE */
// ACTIONS - Las instrucciones para modificar el estado.
	
//import { GET } from 'services/http.service.js'

export const gestionSesion = () => {
  return {
    type: ACTIONS_SESION.LOGIN    
  };
};

export const gestionDia = () => {
  return {
    type: ACTIONS_SESION.DIA    
  };
};

export const ACTIONS_SESION = {  
  LOGIN: "GESTION_SESION",
  DIA: "GESTION_DIA"
};

// export const loadProducts = () => {
//   return {
//       type: PRODUCTS_ACTIONS.LOAD_PRODUCTS
//   }
// }

// /* Acción para modificar una lista de productos */
// export const setProducts = (products) => {
//   return {
//     type: PRODUCTS_ACTIONS.SET_PRODUCTS,
//     payload: products
//   }
// }



export const PRODUCTS_ACTIONS = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  DELETE_PRODUCTS: 'DELETE_PRODUCTS',
  LOAD_PRODUCTS: 'LOAD_PRODUCTS'
}




