
interface ISelectOption {
  name: string;
  options: string[];
}

export default function SelectOption({ name, options }: ISelectOption) {
  return (
    <div className="flex flex-col gap-2 p-5">
      <span>{name}</span>
      <select
        name=""
        id=""
        className="border border-gray-700 text-xs rounded-[5px] h-10 outline-0 pr-2"
      >
        {options.map((item) => (
          <option className="" value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
