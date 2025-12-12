import React from 'react'

export default function HeaderPatientsPrescription() {
  return (
<div className=" flex justify-between items-center">
      <div className="flex items-center gap-4">
        <svg className="w-6 h-6">
          <use href="#arrow-right"></use>
        </svg>
        <div className="flex gap-4 items-center">
          <svg className="w-15 h-15">
            <use href="#avatar"></use>
          </svg>
          <span className="text-xxs text-gray-800">فاطمه طیبی</span>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-center gap-4 cursor-pointer">
          <div className="bg-[#4179F0] items-center text-white pt-3 pb-3 pr-5 pl-5 rounded-xl flex gap-1">
            <span className="text-xs w-16">ثبت نسخه</span>
            <svg className="w-5 h-5">
              <use href="#tick"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>  )
}
