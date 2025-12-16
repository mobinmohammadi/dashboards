import { useEffect, useState } from "react";
import ItemDetails from "../Components/ItemDetails/ItemDetails";
import ChartCount from "../Components/ChartCount/ChartCount";

export default function Home() {
  const dataHeader = [
    { id: 1, title: "کل مراجعین", count: "۲۵۴", persent: "۱۷٪" },
    { id: 2, title: "مراجعین ویزیت شده", count: "۲۵۴", persent: "۱۷٪" },
    { id: 3, title: "مراجعین تکراری", count: "۲۰", persent: "۲۰٪" },
    { id: 4, title: "کل درآمد", count: "۲۳,۰۰۰,۰۰۰", persent: "۵٪" },
  ];

  const patients = [
    { id: 1, name: "بهنام محمدی", why: "سر درد", status: 1, age: 28, gender: "مرد", time: "10:30", appointment: "حضوری" },
    { id: 2, name: "آروین علیالی", why: "شکم درد", status: 0, age: 35, gender: "مرد", time: "11:00", appointment: "آنلاین" },
    { id: 3, name: "رسول خزیری", why: "پا درد", status: 0, age: 42, gender: "مرد", time: "12:15", appointment: "حضوری" },
    { id: 4, name: "محمدی حریری", why: "دست درد", status: 1, age: 30, gender: "زن", time: "09:45", appointment: "آنلاین" },
    { id: 5, name: "احسان حاجی", why: "میگرن", status: 0, age: 25, gender: "مرد", time: "13:00", appointment: "حضوری" },
  ];


  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % patients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const reordered = [
    ...patients.slice(startIndex),
    ...patients.slice(0, startIndex),
  ];

  return (
    <div className="w-full flex flex-col gap-4 ">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-4">

        {dataHeader.map((item) => (
          <div
            key={item.id}

          >
            <ItemDetails {...item} />
          </div>
        ))}

      </div>
      <div className="w-full flex flex-col gap-4 h-86.5 ">
        <div className="sm:w-162 h-full border border-gray-300 rounded-2xl p-6">
          <div className="flex flex-col gap-5 w-full">

            <div className="w-full pb-5 flex border-b-2 border-b-gray-300 items-center justify-between">
              <span className="text-neutral-700 font-medium">بیماران امروز</span>
              <div className="flex flex-col gap-1 text-xs">
                <div className="flex gap-1">
                  <span className="text-neutral-900 font-semibold">35</span>
                  <span className="text-neutral-700">نفر</span>
                </div>
              </div>
            </div>

            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-2 text-xs">نام</th>
                  <th className="px-4 py-2 text-xs">سن</th>
                  <th className="px-4 py-2 text-xs hidden sm:table-cell">جنسیت</th>
                  <th className="px-4 py-2 text-xs hidden sm:table-cell">دلیل</th>
                  <th className="px-4 py-2 text-xs hidden sm:table-cell">زمان</th>
                  <th className="px-4 py-2 text-xs">نوع نوبت</th>
                  <th className="px-4 py-2 text-xs">وضعیت</th>
                </tr>
              </thead>

              <tbody>
                {reordered.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`
          border-b border-gray-200 transition-all duration-700
          ${index === reordered.length - 1 ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}
        `}
                  >
                    <td className="px-4 py-2 text-xxs">{item.name}</td>
                    <td className="px-4 py-2 text-xxs">{item.age}</td>
                    <td className="px-4 py-2 text-xxs hidden sm:table-cell">{item.gender}</td>
                    <td className="px-4 py-2 text-xxs hidden sm:table-cell">{item.why}</td>
                    <td className="px-4 py-2 text-xxs hidden sm:table-cell">{item.time}</td>
                    <td className="px-4 py-2 text-xxs">{item.appointment}</td>
                    <td className="px-4 py-2 text-xxs">{item.status === 1 ? "ویزیت" : "عدم ویزیت"}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
        <ChartCount />
      </div>
      {/* <Time /> */}
    </div>
  );
}
