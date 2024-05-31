import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.id && item.size === action.size
      );
      if (existingItemIndex !== -1) {
        return state.map((item, index) =>
          index === existingItemIndex
            ? {
                id: action.id,
                name: action.name,
                quantity: action.quantity,
                size: action.size,
                price: action.price,
              }
            : item
        );
      } else {
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            quantity: action.quantity,
            size: action.size,
            price: action.price,
          },
        ];
      }
    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
