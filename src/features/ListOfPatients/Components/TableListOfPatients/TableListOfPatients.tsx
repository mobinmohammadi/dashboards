import React from "react";
import { useNavigate } from "react-router";

// ساخت آرایه 40 نفره با داده نمونه
const patients = [
  { id: 1, name: "علی رضایی", status: 0, age: 34, gender: "مرد", time: "08:30" },
  { id: 2, name: "مریم احمدی", status: 1, age: 58, gender: "زن", time: "09:10" },
  { id: 3, name: "حسین کریمی", status: 0, age: 45, gender: "مرد", time: "09:45" },
  { id: 4, name: "فاطمه موسوی", status: 1, age: 29, gender: "زن", time: "10:00" },
  { id: 5, name: "رضا محمدی", status: 0, age: 40, gender: "مرد", time: "10:30" },
  { id: 6, name: "سارا جعفری", status: 1, age: 36, gender: "زن", time: "11:00" },
  { id: 7, name: "امیر حسینی", status: 0, age: 62, gender: "مرد", time: "11:20" },
  { id: 8, name: "نرگس صالحی", status: 1, age: 27, gender: "زن", time: "11:50" },
  { id: 9, name: "عادل زارعی", status: 0, age: 50, gender: "مرد", time: "12:15" },
  { id: 10, name: "لیلا کاشانی", status: 1, age: 33, gender: "زن", time: "12:40" },
  { id: 11, name: "حامد شریفی", status: 0, age: 41, gender: "مرد", time: "13:05" },
  { id: 12, name: "مهسا نیکوکار", status: 1, age: 38, gender: "زن", time: "13:30" },
];


export default function PatientsTable() {
    const navigate = useNavigate()
  return (
    <div className="overflow-x-auto mt-6 ">
      <table className="min-w-full border border-gray-300 border-b-[#E7E7E7] rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr className="text-xs text-gray-500">
            <th className="px-4 py-3 border-b border-b-[#E7E7E7] ">ردیف</th>
            <th className="px-4 py-3 border-b border-b-[#E7E7E7] ">
              نام بیمار
            </th>
            <th className="px-4 py-3 border-b border-b-[#E7E7E7] hidden sm:table-cell">سن</th>
            <th className="px-4 py-3 border-b border-b-[#E7E7E7] hidden sm:table-cell">جنسیت</th>
            <th className="px-4 py-3 border-b border-b-[#E7E7E7] ">
              زمان نوبت
            </th>
            <th className="px-4 py-3 border-b border-b-[#E7E7E7] ">وضعیت</th>
            <th className="px-4 py-3 border-b border-b-[#E7E7E7] ">تنظیمات</th>
          </tr>
        </thead>

        <tbody className="text-sm text-gray-700">
          {patients.slice(0, 10).map((patient, index) => (
            <tr key={patient.id} className="hover:bg-gray-50  transition">
              <td className="px-4 py-3 border-b text-center border-b-[#E7E7E7]">
                {index + 1}
              </td>
              <td className="px-4 py-3 overflow-hidden border-b border-b-[#E7E7E7]">
                {patient.name}
              </td>
              <td className="px-4 py-3 border-b border-b-[#E7E7E7] hidden sm:table-cell text-center">
                {patient.age}
              </td>
              <td className="px-4 py-3 border-b hidden sm:table-cell border-b-[#E7E7E7] text-center">
                {patient.gender}
              </td>
              <td className="px-4 py-3 border-b border-b-[#E7E7E7] text-center">
                {patient.time}
              </td>
              <td className="px-4 py-1   border-b border-b-[#E7E7E7] text-center">
                {patient.status == 1  ? <svg className="w-6 h-6 text-green-700"><use  href="#check-circles"></use></svg> : <svg className="w-6 h-6"><use  href="#error"></use></svg> }
              </td>
              <td className="px-4 py-3 border-b border-b-[#E7E7E7] text-center flex justify-between">
                <span></span>
                <span></span>
                <div onClick={() => navigate(`/onpateintsedit/${patient.id}`)} className=" p-1 cursor-pointer rounded-full bg-primary-100 text-white">
                  <svg className="w-5 h-5">
                    <use href="#chevron-left"></use>
                  </svg>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="">

      </div>
    </div>
  );
}
