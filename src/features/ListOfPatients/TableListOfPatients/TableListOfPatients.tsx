import React from "react";
import { useNavigate } from "react-router";

// ساخت آرایه 40 نفره با داده نمونه
const patients = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: `بیمار ${i + 1}`,
  age: 20 + (i % 50), // سن بین 20 تا 69
  gender: i % 2 === 0 ? "مرد" : "زن",
  time: `${9 + (i % 10)}:${(i * 7) % 60 < 10 ? "0" : ""}${(i * 7) % 60}`, // زمان های مختلف
  status: i % 3 === 0 ? "تنظیم شده" : i % 3 === 1 ? "در انتظار" : "لغو شده",
}));

export default function PatientsTable() {
    const navigate = useNavigate()
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-300 border-b-[#E7E7E7] rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr className="text-xs text-gray-500">
            <th className="px-4 py-3 border-b border-b-[#E7E7E7] ">ردیف</th>
            <th className="px-4 py-3 border-b border-b-[#E7E7E7] ">
              نام بیمار
            </th>
            <th className="px-4 py-3 border-b border-b-[#E7E7E7] ">سن</th>
            <th className="px-4 py-3 border-b border-b-[#E7E7E7] ">جنسیت</th>
            <th className="px-4 py-3 border-b border-b-[#E7E7E7] ">
              زمان نوبت
            </th>
            <th className="px-4 py-3 border-b border-b-[#E7E7E7] ">وضعیت</th>
            <th className="px-4 py-3 border-b border-b-[#E7E7E7] ">تنظیمات</th>
          </tr>
        </thead>

        <tbody className="text-sm text-gray-700">
          {patients.slice(0, 10).map((patient, index) => (
            <tr key={patient.id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-3 border-b text-center border-b-[#E7E7E7]">
                {index + 1}
              </td>
              <td className="px-4 py-3 border-b border-b-[#E7E7E7]">
                {patient.name}
              </td>
              <td className="px-4 py-3 border-b border-b-[#E7E7E7] text-center">
                {patient.age}
              </td>
              <td className="px-4 py-3 border-b border-b-[#E7E7E7] text-center">
                {patient.gender}
              </td>
              <td className="px-4 py-3 border-b border-b-[#E7E7E7] text-center">
                {patient.time}
              </td>
              <td className="px-4 py-3 border-b border-b-[#E7E7E7] text-center">
                {patient.status}
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
      <div className=""></div>
    </div>
  );
}
