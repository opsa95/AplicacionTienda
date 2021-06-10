import { fork, put, takeLatest, call} from "@redux-saga/core/effects";
import { GET } from "../../services/http.service";
import { PRODUCTS_ACTIONS } from "../actions";


// El saga quedará a la escucha de la ultima acción ejecutada
// del tipo LOAD_PROODUCTS, gracias al método takeLatest, y ejecutará
// la función indicada como segundo argumento cuando detecte esa acción.
function* productSaga() {
    yield takeLatest(PRODUCTS_ACTIONS.LOAD_PRODUCTS, loadProducts);
}

function setProducts() {
  
  // La función setProductos actúa de wrapper o envoltura para el
  // thunk, la siguiente función anónima que retornaremos, y que
  // hará la llamada al método GET para obtener los productos.
  return () => {
    return GET('/products');
  };
}

// También como generadora, esta función obtendrá el listado de productos
// utilizando axios, y luego lanzará una nueva acción para actualizar el
// listado, en lugar de con dispatch, utilizando el método propio put.
function* loadProducts() {
    const products = yield call(() => GET('products/'));
    yield put(setProducts(products));
}

export function* rootSaga() {
    yield fork(productSaga);
}