import { BanknotesIcon } from "@heroicons/react/24/outline";
import { type ChangeEvent, type FormEventHandler } from "react";

import { IFLocation } from "../lib/locations";

interface IFProps {
  locations: IFLocation[];
  displayName: string;
  currentArea: number;
  currentTerm: number;
  currentLocation: string;

  leadFieldsRequired?: boolean;

  onSubmit: FormEventHandler<HTMLFormElement>;
  onLocationChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onAreaChange: (area: string) => void;
  onTermChange: (term: string) => void;
  onPaymentChange: (payment: string) => void;

  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
}

export const Form = ({
  locations,
  displayName,
  currentArea,
  currentTerm,
  currentLocation,
  leadFieldsRequired,
  onSubmit,
  onLocationChange,
  onAreaChange,
  onTermChange,
  onPaymentChange,
  setName,
  setEmail,
  setPhone,
}: IFProps) => {
  return (
    <div className="flex min-h-screen p-3 text-black">
      <div className="m-auto w-full max-w-xl p-6">
        <img
          src="https://cotizador.inteminer.com/static/images/logo-color.svg"
          className="m-auto mb-5 w-60"
        />
        <div className="mb-8 text-center">
          <h2>Bienvenido, soy tu asesor</h2>
          <h3 className="mb-6 text-2xl font-bold">{displayName}</h3>
          <p>Para cotizar tu terreno, sigue los siguientes pasos:</p>
        </div>
        <form className="space-y-5" onSubmit={onSubmit}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Desarrollo:</span>
            </label>
            <select
              className="select-bordered select"
              onChange={(e) => onLocationChange(e)}
            >
              {locations.map((locations, i) => (
                <option
                  key={i}
                  value={locations.name}
                  label={locations.name}
                  data-lp={locations.landPrice}
                />
              ))}
            </select>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">
                Metros cuadrados:{" "}
                <span className="rounded-md bg-slate-200 py-1 px-2 font-semibold text-primary">
                  {currentArea} m2
                </span>
              </span>
            </label>
            <input
              type="range"
              min="112"
              max="300"
              value={currentArea}
              step="1"
              onChange={(e) => onAreaChange(e.target.value)}
              className="range range-primary range-xs"
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">
                Plazo de adquisisión:{" "}
                <span className="rounded-md bg-slate-200 py-1 px-2 font-semibold text-primary">
                  {currentTerm} años
                </span>
              </span>
            </label>
            <input
              type="range"
              min="3"
              max="20"
              value={currentTerm}
              step="1"
              onChange={(e) => onTermChange(e.target.value)}
              className="range range-primary range-xs"
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Porcentaje de enganche:</span>
            </label>
            <select
              className="select-bordered select"
              onChange={(e) => onPaymentChange(e.target.value)}
            >
              {locations
                .find((community) => community.name === currentLocation)
                ?.options.map((option, i) => (
                  <option key={i} value={option} label={option + "%"}></option>
                ))}
            </select>
          </div>

          <hr />

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Nombre:</span>
            </label>
            <input
              type="text"
              className="input-bordered input w-full"
              onBlur={(e) => setName(e.target.value)}
              required={leadFieldsRequired}
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Correo electrónico:</span>
            </label>
            <input
              type="email"
              className="input-bordered input w-full"
              onBlur={(e) => setEmail(e.target.value)}
              required={leadFieldsRequired}
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Teléfono:</span>
            </label>
            <input
              type="tel"
              className="input-bordered input w-full"
              onBlur={(e) => setPhone(e.target.value)}
              required={leadFieldsRequired}
            />
          </div>

          <button
            className="btn-primary btn-block btn-md btn gap-2 text-white"
            type="submit"
          >
            <BanknotesIcon className="h-5 w-5" />
            Cotizar
          </button>
        </form>
      </div>
    </div>
  );
};
