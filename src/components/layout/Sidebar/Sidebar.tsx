import { useState } from "react";

const li = [
  { svg: "#menu-svg", title: "داشبورد اصلی" },
  { svg: "#users", title: "لیست بیماران" },
  { svg: "#time-svg", title: "تقویم نوبت‌ها " },
];

function Sidebar() {
  const [title, setTitle] = useState("");

  const [activeTitle , setActiveTitle ] = useState("");

  const handelrAcvtive = (title: string) => {
   setActiveTitle(title)
  };

  return (
    <aside className="">
      <div className="flex gap-20 flex-col h-screen border-l-2 border-l-gray-400 pl-5">
        <div className="flex gap-2 items-center mt-4">
          <svg className="w-7 h-[30px]">
            <use href="#logo"></use>
          </svg>
          <span>دکتر رزرو</span>
        </div>
        <nav>
          <ul className="& > *:flex  & > *:text-sm & > *:pt-3 & > *:pb-3 & > *:pr-10 & > *:pl-10 & > *:cursor-pointer & > *:gap-4  gap-6 flex flex-col & > *:items-center">
            {li.map((item) => (
              <li
                className={` ${
                  activeTitle === item.title
                    ? "bg-primary-200 border-r-3 border-r-primary-300 rounded-r-xl text-gray-700 transition-[0.1s]"
                    : "text-gray-500 bg-neutral-50"
                }`}
                onClick={() => {
                  handelrAcvtive(item.title);
                  setTitle(item.title);
                }}
              >
                <svg className="w-5 h-5 text-black">
                  <use href={item.svg}></use>
                </svg>
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
