import React from "react";
import { type IFRequestBody } from "../../pages/api/mail";
import { formatCurrency } from "../computeResult";

export const EmailTemplate = ({
  lead,
  inputs,
  locationName,
  resultData,
}: IFRequestBody) => {
  return (
    <div>
      <h2>Una nueva persona realizó una cotización</h2>
      <h2>Detalles de la cotización:</h2>
      <div>Nombre: {lead.name}</div>
      <div>Email: {lead.email}</div>
      <div>Teléfono: {lead.phone}</div>
      <br />
      <div>Desarrollo: {locationName}</div>
      <div>
        <b className="mr-2">Superficie:</b>
        <span className="float-right">{inputs.area} m2</span>
      </div>
      <div>
        <b className="mr-2">Plazo de adquisición:</b>
        <span className="float-right">{inputs.term} años</span>
      </div>
      <div>
        <b className="mr-2">Porcentaje de enganche:</b>
        <span className="float-right">{inputs.payment}%</span>
      </div>
      <div>
        <b className="mr-2">Precio total del terreno:</b>
        <span className="float-right">
          {formatCurrency(resultData.lockedLandPrice)}
        </span>
      </div>
      <div>
        <b className="mr-2">Enganche de:</b>
        <span className="float-right">
          {formatCurrency(resultData.payment)}
        </span>
      </div>
      <div>
        <b className="mr-2">Saldo inicial:</b>
        <span className="float-right">
          {formatCurrency(resultData.initialDebt)}
        </span>
      </div>
      <hr className="my-5" />
      <div>
        <b className="mr-2">
          {resultData.period1.term} meses de
          <span className="text-xs">*</span>:
        </b>
        <span className="float-right">
          {formatCurrency(resultData.period1.amount)}
        </span>
      </div>
      {resultData?.period2 && (
        <div>
          <b className="mr-2">
            {resultData.period2.term} meses de
            <span className="text-xs">**</span>:
          </b>
          <span className="float-right">
            {resultData.period2.amount &&
              formatCurrency(resultData.period2.amount)}
          </span>
        </div>
      )}
      {resultData?.period3 && (
        <div>
          <b className="mr-2">
            {resultData.period3.term} meses de
            <span className="text-xs">***</span>:
          </b>
          <span className="float-right">
            {resultData.period3.amount &&
              formatCurrency(resultData.period3.amount)}
          </span>
        </div>
      )}
    </div>
  );
};
