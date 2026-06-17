import type { ChangeEvent } from "react";

interface PrettyTextInputProps {
  name: string;
  value?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleReset: (name: string) => void;
  type?: string;
  pattern?: string;
  extra?: string;
}

export default function PrettyTextInput({
  name,
  value,
  handleChange,
  handleReset,
  type,
  pattern,
  extra,
}: PrettyTextInputProps) {
  return (
    <div
      className={`${extra} flex flex-row gap-0 mt-1 outline-none h-8 shadow-sm hover:shadow-md focus:shadow-xl transition duration-300 ease-in-out w-full bg-white rounded-full`}
    >
      <input
        name={name}
        value={value}
        onChange={handleChange}
        type={type ?? "text"}
        pattern={pattern}
        className={`${extra} px-3 flex-36 outline-none transition duration-300 ease-in-out rounded-l-full`}
      />
      <button
        type="button"
        onClick={() => handleReset(name)}
        className="cursor-pointer focus:bg-slate-100 outline-none flex justify-center items-center flex-1 opacity-[0.5] hover:opacity-[1]"
      >
        ✕
      </button>
    </div>
  );
}
