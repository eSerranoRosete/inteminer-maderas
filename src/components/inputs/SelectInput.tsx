interface IFProps {
  options: IFOption[];
  label: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface IFOption {
  value: string;
  label?: string;
  dataAttr?: string | number;
}

export const SelectInput = ({ options, onChange, label }: IFProps) => {
  return (
    <div className="w-full ">
      <label className="ml-3 inline-block translate-y-3 bg-white px-2 text-sm">
        {label}
      </label>
      <select className="block w-full rounded-md p-4" onChange={onChange}>
        {options.map((option, i) => (
          <option key={i} value={option.value} data-lp={option.dataAttr}>
            {option.label || option.value}
          </option>
        ))}
      </select>
    </div>
  );
};
