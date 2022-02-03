import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants';
// const initialState = {
//   cardData: [],
// };

export default function cardItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
      break;
    case REMOVE_FROM_CART:
      return [...state.slice(0, state.length - 1)];
      break;
    default:
      return state;
  }
}
