import React, { useContext, createContext, useReducer } from "react";

export const statecontext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
  <statecontext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </statecontext.Provider>
);

export const useStatevalue = () => useContext(statecontext);
