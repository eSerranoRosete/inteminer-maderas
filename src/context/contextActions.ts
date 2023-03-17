import { useMemo, useReducer } from "react";
import { type IFLocation } from "../lib/locations";
import { createInitialState, reducer } from "./reducer";

export const useAppContext = (locations: IFLocation[]) => {
  const [state, dispatch] = useReducer(reducer, createInitialState(locations));

  const actions = useMemo(
    () => ({
      setCommunity: (community: string) => {
        dispatch({ type: "SET_COMMUNITY", community });
      },

      setPayment: (payment: string) => {
        dispatch({ type: "SET_PAYMENT", payment: parseInt(payment) });
      },

      setArea: (area: string) => {
        dispatch({ type: "SET_AREA", area: parseInt(area) });
      },

      setTerm: (term: string) => {
        dispatch({ type: "SET_TERM", term: parseInt(term) });
      },

      setName: (name: string) => {
        dispatch({ type: "SET_NAME", name });
      },

      setEmail: (email: string) => {
        dispatch({ type: "SET_EMAIL", email });
      },

      setPhone: (phone: string) => {
        dispatch({ type: "SET_PHONE", phone });
      },

      setLandPrice: (landPrice: string) => {
        dispatch({ type: "SET_LAND_PRICE", landPrice: parseFloat(landPrice) });
      },
    }),
    []
  );

  return { actions, state };
};
