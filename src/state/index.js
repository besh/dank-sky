import React, { createContext, useContext, useReducer } from "react";

export { default as initializeState } from "./initialize-state";
export { default as reducers } from "./reducers";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStore = () => useContext(StateContext);
