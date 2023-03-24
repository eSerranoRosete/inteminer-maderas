import React from "react";
import { type IFRequestBody } from "../pages/api/mail";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from "../lib/computeResult";

interface IFProps {
  resultData: IFRequestBody;
  onClose?: () => void;
}
export default function Result({ resultData, onClose }: IFProps) {
  return (
    <div className="h-full w-full bg-white" onClick={onClose}>
      <XCircleIcon className="absolute right-2 top-2 h-6 w-6 cursor-pointer hover:scale-125" />
      <div className="m-auto w-full max-w-xl p-6 pt-10">
        <img
          src="https://cotizador.inteminer.com/static/images/logo-color.svg"
          className="m-auto mb-5 w-60"
        />
        <h3 className="text-center text-xl font-semibold">
          Detalles de la cotización:
        </h3>
        <p className="mb-10 text-center text-sm">
          Los precios se muestran en pesos mexicanos
        </p>
        <div className="text-sm">
          <p className="mb-5">
            <b className="mr-2">Desarrollo:</b>
            {resultData.inputs.community}
          </p>
          <p>
            <b className="mr-2">Superficie:</b>
            <span className="float-right">{resultData.inputs.area} m2</span>
          </p>
          <p>
            <b className="mr-2">Plazo de financiamiento:</b>
            <span className="float-right">{resultData.inputs.term} años</span>
          </p>
          <p>
            <b className="mr-2">Porcentaje de enganche:</b>
            <span className="float-right">{resultData.inputs.payment}%</span>
          </p>
          <p>
            <b className="mr-2">Precio total del terreno:</b>
            <span className="float-right">
              {formatCurrency(resultData.resultData.lockedLandPrice)}
            </span>
          </p>
          <p>
            <b className="mr-2">Enganche de:</b>
            <span className="float-right">
              {formatCurrency(resultData.resultData.payment)}
            </span>
          </p>
          <p>
            <b className="mr-2">Saldo inicial:</b>
            <span className="float-right">
              {formatCurrency(resultData.resultData.initialDebt)}
            </span>
          </p>
          <hr className="my-5" />
          <p>
            <b className="mr-2">
              {resultData.resultData.period1.term} meses de
              <span className="text-xs">*</span>:
            </b>
            <span className="float-right">
              {formatCurrency(resultData.resultData.period1.amount)}
            </span>
          </p>
          {resultData.resultData?.period2 && (
            <p>
              <b className="mr-2">
                {resultData.resultData.period2.term} meses de
                <span className="text-xs">**</span>:
              </b>
              <span className="float-right">
                {resultData.resultData.period2.amount &&
                  formatCurrency(resultData.resultData.period2.amount)}
              </span>
            </p>
          )}
          {resultData.resultData?.period3 && (
            <p>
              <b className="mr-2">
                {resultData.resultData.period3.term} meses de
                <span className="text-xs">***</span>:
              </b>
              <span className="float-right">
                {resultData.resultData.period3.amount &&
                  formatCurrency(resultData.resultData.period3.amount)}
              </span>
            </p>
          )}
          <hr className="my-5" />
          <p className="text-xs">
            * Los meses sin intereses pueden variar dependiendo la etapa en la
            que compres.
          </p>
          <p className="text-xs">** Con un 1% de interés aplicable</p>
          <p className="text-xs">*** Con un 1.25% de interés aplicable</p>
          <br />
          <p className="text-xs">
            Puedes realizar aportaciones a capital sin penalización para que el
            monto de tus mensualidades disminuya.
          </p>
          <hr className="my-5" />

          <button
            type="button"
            className="btn-primary btn-block btn-md btn gap-2 text-xs text-white"
          >
            Realizar otra cotización
          </button>
        </div>
      </div>
    </div>
  );
}
