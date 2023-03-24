interface IFProps {
  label: string;
  liveLabel?: string;
  value: string | number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RangeInput = ({
  liveLabel,
  label,
  value,
  min,
  max,
  step,
  onChange,
}: IFProps) => {
  return (
    <div className="w-full ">
      <label className="ml-3 block text-sm">
        {label}
        {liveLabel && (
          <span className="text-primary ml-2 rounded-md bg-blue-200 py-1 px-2 font-semibold">
            {liveLabel}
          </span>
        )}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={onChange}
        className="relative mt-4 h-3 w-full appearance-none rounded-full bg-slate-200"
      />
    </div>
  );
};
