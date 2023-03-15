import React from "react";
import { IFRequestBody } from "../pages/api/mail";

interface IFProps {
  resultData?: IFRequestBody;
}
export default function Result({ resultData }: IFProps) {
  return (
    <div className="absolute h-full w-full bg-white">
      <div className="m-auto w-full max-w-xl p-6">
        <h3 className="text-xl font-semibold">Detalles de la cotización:</h3>
      </div>
    </div>
  );
}
