import { IFLocation } from "../lib/locations";

export interface IFState {
  community: string;
  area: number;
  term: number;
  payment: number;
  name?: string;
  email?: string;
  phone?: string;
  landPrice: number;
}

export type ACTION_TYPE =
  | { type: "SET_COMMUNITY"; community: string }
  | { type: "SET_AREA"; area: number }
  | { type: "SET_TERM"; term: number }
  | { type: "SET_PAYMENT"; payment: number }
  | { type: "SET_NAME"; name: string }
  | { type: "SET_EMAIL"; email: string }
  | { type: "SET_PHONE"; phone: string }
  | { type: "SET_LAND_PRICE"; landPrice: number };

export const createInitialState = (locations: IFLocation[]) => {
  const firstLocation = locations[0];

  return {
    community: firstLocation?.name as string,
    area: 112,
    term: 20,
    payment: firstLocation?.options[0] as number,
    landPrice: firstLocation?.landPrice as number,
  };
};

export const reducer = (state: IFState, action: ACTION_TYPE): IFState => {
  switch (action.type) {
    case "SET_COMMUNITY":
      return {
        ...state,
        community: action.community,
      };
    case "SET_AREA":
      return {
        ...state,
        area: action.area,
      };
    case "SET_TERM":
      return {
        ...state,
        term: action.term,
      };
    case "SET_PAYMENT":
      const int = parseInt(action.payment.toString());

      return {
        ...state,
        payment: int,
      };

    case "SET_NAME":
      return {
        ...state,
        name: action.name,
      };

    case "SET_EMAIL":
      return {
        ...state,
        email: action.email,
      };

    case "SET_PHONE":
      return {
        ...state,
        phone: action.phone,
      };

    case "SET_LAND_PRICE":
      return {
        ...state,
        landPrice: action.landPrice,
      };
    default:
      return state;
  }
};
