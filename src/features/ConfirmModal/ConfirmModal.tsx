import React from "react";

interface IProps {
  setIsShowModal: (value : boolean) => void
}


export default function ConfirmModal({setIsShowModal} : IProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <div className="flex flex-col gap-4 items-center  h-full">
          <svg className="w-12 h-12">
            <use href="#rotates"></use>
          </svg>
          <div className="flex flex-col gap-1 items-center">
            <span className="text-md">ثبت نسخه</span>
            <p className="text-xxs text-gray-800">از ثبت نسخه اطمینان دارید؟</p>
          </div>
          <div className="flex gap-4 & > *:w-[204px] & > *:h-10 & > *:rounded-[5px] & > *:cursor-pointer">
            <button className="border border-primary-100  text-primary-100" onClick={() => setIsShowModal(false)}>ویرایش نسخه</button>
            <button className="bg-primary-100 text-white" onClick={() => setIsShowModal(false)}>بله</button>
          </div>
        </div>
      </div>
    </div>
  );
}
