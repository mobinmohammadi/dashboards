
interface Props {
  title : string
}

export default function Header({title} : Props) {
  return (
    <div className=" h-14 pr-4 pl-4 z-20 border-b-gray-400 border-b  w-full">
      <div className="flex w-full pb-3 items-center justify-between mt-4 text-gray-700">
        <span>{title}</span>
        <div className="flex items-center gap-4">
          <div className=" bg-[#F7F7F7] sm:flex hidden h-8 pr-4 pl-4 rounded-2xl">
            <input
              type="text"
              className="outline-0 text-xs"
              placeholder="جستوجو"
            />
            <svg className="w-5 ">
              <use href="#search"></use>
            </svg>
          </div>
          <svg className="w-5 h-5 ">
            <use href="#search"></use>
          </svg>
          <svg className="w-5 h-5">
            <use href="#bales"></use>
          </svg>

          <svg className="w-5 h-5">
            <use href="#user-account"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
