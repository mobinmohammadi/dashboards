import React from "react";
import HeaderPatientsPrescription from "./HeaderPatientsPrescription";
import Medicines from "./TablePatientsPrescription/Medicines";
import TablePatientsPrescription from "./TablePatientsPrescription/TablePatientsPrescription";
import TestPatients from "./TestPatients/TestPatients";
import ConfirmModal from "./ConfirmModal/ConfirmModal";

export default function PatientsPrescription() {
  return (
    <>
      <div className="flex flex-col gap-12 mb-[200px] border border-gray-700 rounded-2xl p-5">
        <HeaderPatientsPrescription />

        <Medicines />
        <TestPatients/>
        <ConfirmModal/>
      </div>
    </>
  );
}
