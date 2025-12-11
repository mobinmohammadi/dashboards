import BoxPrescriptionMedicine from "./BoxPrescriptionMedicine";

export default function PrescriptionMedicine() {
  return (
    <div className="grid sm:grid-cols-4 gap-4">
      <BoxPrescriptionMedicine />
      <BoxPrescriptionMedicine />
      <BoxPrescriptionMedicine />
      <BoxPrescriptionMedicine />
    </div>
  );
}
