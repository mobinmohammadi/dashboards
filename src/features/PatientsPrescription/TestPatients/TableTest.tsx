export default function TableTest() {
  return (
    <div>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr className="& > *:text-neutral-400 & > *:text-xs">
              <th className="px-4 py-3 border-b">ردیف</th>
              <th className="px-4 py-3 border-b">نام دارو</th>
              <th className="px-4 py-3 border-b">تعداد</th>
              <th
                className="px-4 py-3 border-b hidden sm:table-cell"
              >
                دوز مصرفی
              </th>
              <th
                className="px-4 py-3 border-b hidden sm:table-cell"
              >
                توضیحات
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-600">
            <tr className="hover:bg-gray-50 transition & > *:text-gray-800 & > *:text-x">
              <td className="px-4 py-3 border-b text-center">1</td>
              <td className="px-4 py-3 border-b">استامینوفن</td>
              <td className="px-4 py-3 border-b text-center">20 عدد</td>
              <td
                className="px-4 py-3 border-b text-center hidden sm:table-cell "
              >
                هر 8 ساعت 1 عدد
              </td>
              <td
                className="px-4 py-3 border-b  hidden sm:table-cell"
              >
                مصرف بعد از غذا
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition & > *:text-gray-800 & > *:text-x">
              <td className="px-4 py-3 border-b text-center">2</td>
              <td className="px-4 py-3 border-b">ایبوپروفن</td>
              <td className="px-4 py-3 border-b text-center ">15 عدد</td>
              <td
                className="px-4 py-3 border-b text-center hidden sm:table-cell "
              >
                هر 12 ساعت 1 عدد
              </td>
              <td
                className="px-4 py-3 border-b hidden sm:table-cell"
              >
                در صورت درد مصرف شود
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
