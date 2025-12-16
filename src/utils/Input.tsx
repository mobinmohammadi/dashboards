import type React from "react";

interface IInputProps {
  name: string;
  value: string;
  placeholder?: string;
  label : string,
  padding? : string
  setValue: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
}

function Input({ name, value, placeholder,padding, setValue ,label}: IInputProps) {
  return (
    <div className={`flex flex-col  ${padding ? padding : "p-5"} gap-3`}>
      <label className="text-xxs text-right text-gray-800">{label} :</label>
      <input
        className="border text-xs text-slate-700 border-gray-700  rounded-[5px] h-10 outline-0 pr-2"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [name]: e.target.value }))
        }
      />
    </div>
  );
}

export default Input;
