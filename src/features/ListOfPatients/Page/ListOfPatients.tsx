import React from "react";
import HeaderListOfPatients from "../Components/HeaderListOfPatients/HeaderListOfPatients";
import PatientsTable from "../Components/TableListOfPatients/TableListOfPatients";

export default function ListOfPatients() {
  return (
    <div className="flex flex-col container-custom  gap-12 mb-20 border border-gray-300 rounded-2xl p-5">
      <HeaderListOfPatients />
      <PatientsTable/>
    </div>
  );
}
