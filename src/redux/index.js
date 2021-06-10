/* Fichero redux/index.js */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { isLogged, products, esDeDia } from '../redux/reducers/';
import createSagaMiddleware from 'redux-saga';


// Crearemos un saga
const sagaMiddleware = createSagaMiddleware();

/** REDUX STATE */
// STORE - El estado global de la aplicación.
let reducers = combineReducers({    
    isLogged : isLogged,
    esDeDia: esDeDia,
    products : products        
  });

// STORE - El estado global de la aplicación.
export const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()        
  )
);

export default store;