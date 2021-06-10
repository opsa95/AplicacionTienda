import { ACTIONS_SESION, PRODUCTS_ACTIONS } from "../actions";

const initialState = {
  isLogged: false,
  esDeDia: true,
  products: [],
};

export const isLogged = (state = initialState.isLogged, action) => {
  switch (action.type) {
    case ACTIONS_SESION.LOGIN:
      state = !state;
      return state;
    default:
      return state;
  }
};
export const esDeDia = (state = initialState.esDeDia, action) => {
  switch (action.type) {
    case ACTIONS_SESION.DIA:
      state = !state;
      return state;
    default:
      return state;
  }
};

export const products = (state = initialState.products, action) => {
  switch (action.type) {
    case PRODUCTS_ACTIONS.LOAD_PRODUCTS:
      return state;
    case PRODUCTS_ACTIONS.SET_PRODUCTS:
      return state;
    case PRODUCTS_ACTIONS.DELETE_PRODUCTS:
      return state;
    default:
      return [...state];
  }
};

export default isLogged;
