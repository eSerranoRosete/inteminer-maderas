import type { ReactNode } from "react";

interface IFProps {
  icon?: ReactNode;
  label: string;
  uppercase?: boolean;
}

export const Button = ({ icon, label, uppercase }: IFProps) => {
  return (
    <button
      className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 p-4 text-sm font-semibold uppercase text-white transition-all hover:scale-[102%] hover:bg-blue-700"
      type="submit"
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};
