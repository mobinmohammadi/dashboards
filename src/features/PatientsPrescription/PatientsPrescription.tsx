import { useState } from "react";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import HeaderPatientsPrescription from "./HeaderPatientsPrescription";
import Medicines from "./TablePatientsPrescription/Medicines";
import TestPatients from "./TestPatients/TestPatients";

export default function PatientsPrescription() {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-12 mb-[200px] border border-gray-700 rounded-2xl p-5">
        <HeaderPatientsPrescription setIsShowModal={setIsShowModal} />

        <Medicines />
        <TestPatients />
        {isShowModal && (
          <>
            <ConfirmModal setIsShowModal={setIsShowModal} />
            <div
              onClick={() => setIsShowModal(false)}
              className="bg-black/10 w-full h-full fixed top-0 z-10"
            ></div>
          </>
        )}
        <div className="flex justify-between items-center border border-gray-300 rounded-2xl pt-4 pb-4 pr-5 pl-4">
          <div className="flex gap-4 items-center">
            <div className="bg-[#F2FAED] w-14 h-14 rounded-2xl flex items-center justify-center">
              <svg className="w-10 h-9">
                <use href="#succussSvg"></use>
              </svg>
            </div>
            <div className="flex flex-col gap-2 ">
              <span>ثبت موفق</span>
              <span>نسخه بیمار با موفقیت ثبت شد</span>
            </div>
          </div>
          <div className="flex ">
            <span>پرونده بیمار</span>
            <svg className="w-10 h-10">
              <use href="#closeB"></use>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
