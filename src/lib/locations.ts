export interface IFLocation {
  name: string;
  options: number[];
  landPrice: number;
}

export const locations: IFLocation[] = [
  {
    name: "Ciudad Maderas Hacienda Norte",
    options: [10, 5, 1],
    landPrice: 4900,
  },
  {
    name: "Ciudad Maderas Hacienda Sur",
    options: [10, 5, 1],
    landPrice: 5650,
  },
  {
    name: "Ciudad Maderas Caribe",
    options: [10, 5, 1],
    landPrice: 4060,
  },
  {
    name: "Ciudad Maderas Norte Leon",
    options: [10, 5, 1],
    landPrice: 3940,
  },
  {
    name: "Ciudad Maderas Sierra",
    options: [10, 5, 1],
    landPrice: 5000,
  },
  {
    name: "Ciudad Maderas Privada Peninsula",
    options: [10, 5, 1],
    landPrice: 4900,
  },
  {
    name: "Ciudad Maderas San Juan del Río",
    options: [10, 5, 1],
    landPrice: 4700,
  },
];
