import { CalculatorIcon } from "@heroicons/react/24/outline";
import { useMemo, type ChangeEvent, type FormEventHandler } from "react";

import { IFLocation } from "../lib/locations";
import { SelectInput } from "./inputs/SelectInput";
import { Input } from "./inputs/Input";
import { RangeInput } from "./inputs/RangeInput";
import { Button } from "./buttons/Button";

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
  const locationOptions = useMemo(
    () =>
      locations.map((location) => ({
        value: location.name,
        label: location.name,
        dataAttr: location.landPrice,
      })),
    []
  );

  const paymentOptions = useMemo(
    () =>
      locations
        .find((community) => community.name === currentLocation)
        ?.options.map((option) => ({
          value: option.toString(),
          label: option + "%",
        }))!,
    [currentLocation]
  );

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
          <SelectInput
            label="Desarrollo:"
            onChange={onLocationChange}
            options={locationOptions}
          />

          <RangeInput
            label="Metros cuadrados:"
            onChange={(e) => onAreaChange(e.target.value)}
            value={currentArea}
            liveLabel={currentArea + " m²"}
            min={112}
            max={300}
            step={1}
          />

          <RangeInput
            label="Plazo de financiamiento:"
            onChange={(e) => onTermChange(e.target.value)}
            value={currentTerm}
            liveLabel={currentTerm + " años"}
            min={3}
            max={20}
            step={1}
          />

          <SelectInput
            label="Porcentaje de enganche:"
            onChange={(e) => onPaymentChange(e.target.value)}
            options={paymentOptions}
          />

          <hr />

          <Input
            type="text"
            label="Nombre:"
            trigger="onBlur"
            onChange={(e) => setName(e.target.value)}
            required={leadFieldsRequired}
          />

          <Input
            type="email"
            label="Correo Electrónico:"
            trigger="onBlur"
            onChange={(e) => setEmail(e.target.value)}
            required={leadFieldsRequired}
          />

          <Input
            type="tel"
            label="Teléfono:"
            trigger="onBlur"
            onChange={(e) => setPhone(e.target.value)}
            required={leadFieldsRequired}
          />

          <Button
            label="Cotizar"
            uppercase
            icon={<CalculatorIcon className="h-4 w-4" />}
          />
        </form>
      </div>
    </div>
  );
};
