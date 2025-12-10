import { useEffect, useState } from "react";
import ItemDetails from "./ItemDetails/ItemDetails";

export default function Home() {
  const dataHeader = [
    { id: 1, title: "کل مراجعین", count: "۲۵۴", persent: "۱۷٪" },
    { id: 2, title: "مراجعین ویزیت شده", count: "۲۵۴", persent: "۱۷٪" },
    { id: 3, title: "مراجعین تکراری", count: "۲۰", persent: "۲۰٪" },
    { id: 4, title: "کل درآمد", count: "۲۳,۰۰۰,۰۰۰", persent: "۵٪" },
  ];

  const users = [
    { id: 1, name: "بهنام محمدی", why: "سر درد", status: 1 },
    { id: 2, name: "آروین علیالی", why: "شکم درد", status: 0 },
    { id: 3, name: "رسول خزیری", why: "پا درد", status: 0 },
    { id: 4, name: "محمدی حریری", why: "دست درد", status: 1 },
    { id: 5, name: "احسان حاجی", why: "میگرن", status: 0 },
  ];

  const [startIndex, setStartIndex] = useState(0);

  // حرکت حلقه‌ای جدول بیماران
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % users.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const reordered = [
    ...users.slice(startIndex),
    ...users.slice(0, startIndex),
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4">

        {/* کارت‌های بالا */}
        {dataHeader.map((item, index) => (
          <div
            key={item.id}
            className={index === dataHeader.length - 1 ? "col-span-2" : ""}
          >
            <ItemDetails {...item} />
          </div>
        ))}

        {/* جدول */}
        <div className="w-full col-span-2 border border-gray-300 rounded-2xl p-6">
          <div className="flex flex-col gap-5 w-full">

            {/* هدر جدول */}
            <div className="w-full pb-5 flex border-b-2 border-b-gray-300 items-center justify-between">
              <span className="text-neutral-700 font-medium">بیماران امروز</span>
              <div className="flex flex-col gap-1 text-xs">
                <div className="flex gap-1">
                  <span className="text-neutral-900 font-semibold">35</span>
                  <span className="text-neutral-700">نفر</span>
                </div>
              </div>
            </div>

            {/* جدول */}
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-2">نام</th>
                  <th className="px-4 py-2">دلیل</th>
                  <th className="px-4 py-2">وضعیت</th>
                </tr>
              </thead>

              <tbody>
                {reordered.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`
                      border-b border-gray-200 transition-all duration-700
                      ${index === reordered.length - 1 
                        ? "opacity-0 -translate-y-2"
                        : "opacity-100 translate-y-0"}
                    `}
                  >
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
