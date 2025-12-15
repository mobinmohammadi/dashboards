import React from "react";

export default function ModalSuccucss() {
  return (
    <div className="flex justify-between items-center border border-gray-300 rounded-2xl pt-4 pb-4 pr-5 pl-4">
      <div className="flex gap-4 items-center">
        <div className="bg-[#F2FAED] w-14 h-14 rounded-2xl flex items-center justify-center">
          <svg className="w-7 h-7">
            <use href="#succussSvg"></use>
          </svg>
        </div>
        <div className="flex flex-col gap-2 ">
          <span className="font-bold text-xxs">ثبت موفق</span>
          <span className="text-gray-800 text-xs">
            نسخه بیمار با موفقیت ثبت شد
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-primary-100 text-xs hover:underline transition-all cursor-pointer">
          پرونده بیمار
        </span>
        <svg className="w-5 h-5 cursor-pointer">
          <use href="#closeB"></use>
        </svg>
      </div>
    </div>
  );
}
