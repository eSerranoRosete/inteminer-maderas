import React from "react";

interface IFProps {
  name: string;
  email: string;
  tel: string;
}
export const EmailTemplate = ({ name, email, tel }: IFProps) => {
  return (
    <div>
      <h1>Una nueva persona realizó una cotización</h1>
      <h5>Detalles de la cotización:</h5>
      <div>Nombre: {name}</div>
    </div>
  );
};
