import * as React from "react";
import Context from "./context";
import reducer, { initState } from "./reducer";

export interface IProviderProps {}

export default function Provider({ children }: any) {
  const [state, dispatch] = React.useReducer<any>(reducer, initState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
