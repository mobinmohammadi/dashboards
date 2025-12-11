import React from "react";

export default function BoxPrescriptionMedicine() {
  return (
    <div className="bg-neutral-100 items-center justify-center text-center gap-3 flex flex-col rounded-2xl pt-4 pb-4">
      <div className="flex flex-col gap-2">
        <span className="border-b border-b-gray-700 text-xxs">فشار خون</span>
        <span className="text-xs">۳ ماه</span>
      </div>
      <div className="flex gap-2 text-xs text-gray-700 ">
        <span>۱۴ آبان ۱۴۰۳</span>
        <svg className="w-4 h-4">
            <use href="#arrow-left"></use>
        </svg>
        <span>۱۴ بهمن ۱۴۰۳</span>
      </div>
      <div className="flex gap-2">
        <img className="w-10 h-10" src="./Images/onepagepatint/darow.png" alt="" />
        <div className="flex flex-col gap-2 text-xs text-gray-700">
            <span>پروپرانول ۲۰</span>
            <span>لوزاراتان ۱۰۰</span>
        </div>
      </div>
    </div>
  );
}
