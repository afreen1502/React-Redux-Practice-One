import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants';

export const addToCart = (data) => {
  return {
    data: data,
    type: ADD_TO_CART,
  };
};

export const removeFromCart = (data) => {
  return {
    data: data,
    type: REMOVE_FROM_CART,
  };
};
