interface IFProps {
  required?: boolean;
  label: string;
  type: "text" | "email" | "tel";
  trigger?: "onChange" | "onBlur";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ required, label, trigger, onChange, type }: IFProps) {
  return (
    <div className="w-full">
      <label className="ml-3 inline-block translate-y-3 bg-white px-2 text-sm">
        {label}
      </label>
      <input
        type={type}
        className="block w-full rounded-md p-4"
        onBlur={trigger === "onBlur" ? onChange : undefined}
        onChange={trigger === "onChange" ? onChange : undefined}
        required={required}
      />
    </div>
  );
}
