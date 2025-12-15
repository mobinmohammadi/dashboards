import { useState } from "react";

export default function DetailsDoctor() {
  const [isActive, setIsActive] = useState(false);

const toggleDetails = () => setIsActive(!isActive);


  return (
    <div
      className={`border relative w-full sm:w-[344px]  z-10 ${
        isActive ? "h-[280px] " : "h-[205px]"
      } transition-all flex flex-col gap-5 border-gray-400 rounded-2xl p-5`}
    >
      <span className="text-xxs">اطلاعات پزشکی</span>
      <div
        className={`flex  ${
          isActive ? "h-full z-50" : "h-[130px]"
        }  overflow-hidden items-center gap-4 transition-all bg-neutral-100 & > *:flex & > *:gap-3 flex-col & > *:justify-between w-full & > *:w-full p-3  rounded-2xl`}
      >
        <div className="">
          <span className="text-neutral-600 text-xxs">گروه خونی:</span>
          <span className="text-neutral-900 text-xs">AB+</span>
        </div>
        <div>
          <span className="text-neutral-600 text-xxs">قد:</span>
          <span className="text-neutral-900 text-xs">۱۶۵ Cm</span>
        </div>
        <div>
          <span className="text-neutral-600 text-xxs">وزن:</span>
          <span className="text-neutral-900 text-xs">۶۷ Kg</span>
        </div>
        <div>
          <span className="text-neutral-600 text-xxs">وزن:</span>
          <span className="text-neutral-900 text-xs">۶۷ Kg</span>
        </div>
        <div>
          <span className="text-neutral-600 text-xxs">وزن:</span>
          <span className="text-neutral-900 text-xs">۶۷ Kg</span>
        </div>

      </div>
      <div
        onClick={() => toggleDetails()}
        className="w-8 h-8 absolute -bottom-4 left-1/2 -translate-x-1/2 bg-neutral-100 rounded-full flex items-center justify-center"
      >
        {isActive ? (
          <div onClick={() => toggleDetails()} className="cursor-pointer">
            <svg className="w-5 h-5 rotate-180 text-primary-100">
              <use href="#chevron-down"></use>
            </svg>
          </div>
        ) : (
          <svg className="w-5 h-5 text-primary-100">
            <use href="#chevron-down"></use>
          </svg>
        )}
      </div>
    </div>
  );
}
