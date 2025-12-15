
interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <div
      className="flex items-center pr-[27.5px] 
    pt-2.5 pb-2.5 pl-[25.5px] hover:bg-primary-100 
     hover:text-white transition-all cursor-pointer justify-center gap-1 outline-1 rounded-[5px] text-primary-100"
    >
      <button className="cursor-pointer text-xxs ">{text}</button>
      <svg className="w-4 h-4">
        <use href="#plus"></use>
      </svg>
    </div>
  );
}
