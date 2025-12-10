import { useEffect, useState } from "react";
import ItemDetails from "./ItemDetails/ItemDetails";

export default function Home() {
  const dataHeader = [
    { title: "کل مراجعین ", count: "۲۵۴", persent: "۱۷٪" },
    { title: " مراجعین ویزیت شده ", count: "۲۵۴", persent: "۱۷٪" },
    { title: " مراجعین تکراری", count: "۲۰", persent: "۲۰٪" },
    { title: " کل درآمد", count: "۲۳,۰۰۰,۰۰۰ ", persent: "۵٪" },
  ];

  const user = [
    { id: 1, name: "بهنام محمدی", why: "سر درد", status: 1 },
    { id: 2, name: "آروین علیالی", why: "شکم درد", status: 0 },
    { id: 3, name: "رسول خزیری", why: "پا درد", status: 0 },
    { id: 4, name: "محمدی حریری", why: "دست درد", status: 1 },
    { id: 5, name: "احسان حاجی", why: "میگرن", status: 0 },
  ];

  const [startIndex, setStartIndex] = useState(0);

  // حلقه‌ای چرخیدن
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % user.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // مرتب سازی حلقه‌ای
  const reordered = [
    ...user.slice(startIndex),
    ...user.slice(0, startIndex),
  ];

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-4">
        
        {/* 🔄 کارت‌ها نیز حلقه‌ای می‌چرخند */}
        {reordered.map((item, index) => (
          <div key={item.id} className={index === 4 ? "col-span-2" : ""}>
            <ItemDetails {...item} />
          </div>
        ))}

        {/* ---------------- جدول ---------------- */}
        <div className="w-full h-100 col-span-2 border gap-6 border-gray-300 rounded-2xl p-6">
          <div className="flex flex-col gap-5 w-full">

            <div className="w-full pb-5 flex border-b-gray-400 border-b-2 items-center justify-between">
              <span className="text-neutral-600">بیماران امروز</span>
              <div className="flex flex-col gap-1 text-xs">
                <div className="flex gap-1">
                  <span className="text-neutral-950">35</span>
                  <span className="text-neutral-700">نفر</span>
                </div>
              </div>
            </div>

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-300 text-right">
                  <th className="px-4 py-2">آیدی</th>
                  <th className="px-4 py-2">نام</th>
                  <th className="px-4 py-2">دلیل</th>
                  <th className="px-4 py-2">وضعیت</th>
                </tr>
              </thead>

              <tbody>
                {reordered.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-b border-gray-200 text-right transition-all duration-700
                      ${index === reordered.length - 1 ? "opacity-0" : "opacity-100"}
                    `}
                  >
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.why}</td>
                    <td className="px-4 py-2">
                      {item.status === 1 ? "ویزیت" : "عدم ویزیت"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>

      </div>
    </div>
  );
}
