export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newbasket = [...state.basket];
      const index = state.basket.findIndex((basket) => basket.id === action.id);
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn(`can't find index ${action.id}`);
      }
      return {
        ...state,
        basket: newbasket,
      };
    default:
      return state;
  }
};
export const getbasket = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export default reducer;
