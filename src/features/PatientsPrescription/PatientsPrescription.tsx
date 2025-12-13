import { useState } from "react";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import HeaderPatientsPrescription from "./HeaderPatientsPrescription";
import Medicines from "./TablePatientsPrescription/Medicines";
import TestPatients from "./TestPatients/TestPatients";

export default function PatientsPrescription() {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-12 mb-[200px] border border-gray-300 rounded-2xl p-5">
        <HeaderPatientsPrescription setIsShowModal={setIsShowModal} />

        <Medicines />
        <TestPatients />
        {/* <ErrorModal/> */}
        {isShowModal && (
          <>
            <ConfirmModal setIsShowModal={setIsShowModal} />
            <div
              onClick={() => setIsShowModal(false)}
              className="bg-black/10 right-0 w-full h-full fixed top-0 z-10"
            ></div>
          </>
        )}
      </div>
    </>
  );
}
