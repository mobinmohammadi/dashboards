import React from "react";
import HeaderListOfPatients from "./HeaderListOfPatients/HeaderListOfPatients";
import PatientsTable from "./TableListOfPatients/TableListOfPatients";

export default function ListOfPatients() {
  return (
    <div className="flex flex-col container-custom pb-20 gap-12 mb-[200px] border border-gray-300 rounded-2xl p-5">
      <HeaderListOfPatients />
      <PatientsTable/>
    </div>
  );
}
