import { useState } from "react";
import { Link } from "react-router";

const li = [
  { id: "1", svg: "#menu-svg", title: "داشبورد اصلی", link: "/" },
  { id: "2", svg: "#users", title: "لیست بیماران", link: "patient" },
  { id: "3", svg: "#time", title: "تقویم نوبت‌ها ", link: "/" },
];

function Sidebar() {
  const [title, setTitle] = useState("");
  const [toggle, setToggle] = useState(false);

  const [activeTitle, setActiveTitle] = useState("1");

  const handelrAcvtive = (id: string) => {
    setActiveTitle(id);
  };

  return (
    <aside
      className={`${
        toggle ? "w-[300px] " : "w-[130px]"
      } transition-all duration-300`}
    >
      <div className="flex relative  gap-20 flex-col h-screen border-l-2 border-l-gray-400 pl-5">
        <div className="flex gap-2 items-center mt-4">
          <svg className="w-7 h-[30px]">
            <use href="#logo"></use>
          </svg>
          <span>دکتر رزرو</span>
        </div>
        <nav className="">
          <ul className="& > *:flex  & > *:text-sm & > *:pt-3 & > *:pb-3 & > *:pr-10 & > *:pl-10 & > *:cursor-pointer & > *:gap-4  gap-6 flex flex-col & > *:items-center">
            {li.map((item) => (
              <Link
                to={item.link}
                className={` ${
                  activeTitle === item.id
                    ? "bg-primary-200 h-17 border-r-3 border-r-primary-300 rounded-r-xl text-gray-700 transition-[0.1s]"
                    : "text-gray-500 bg-neutral-50"
                }`}
                onClick={() => {
                  handelrAcvtive(item.id);
                  setTitle(item.id);
                }}
              >
                <svg className="w-5 h-5 text-black">
                  <use href={item.svg}></use>
                </svg>
                <span className={`${toggle ? "block duration-1000" : "hidden"}`}>
                  {item.title}
                </span>
              </Link>
            ))}
          </ul>
        </nav>

        <div
          onClick={() => setToggle(!toggle)}
          className={`bg-neutral-300 ${
            toggle ? "rotate-180" : ""
          } p-2 transition-all flex items-center justify-center absolute -left-4 cursor-pointer rounded-full top-[10%]`}
        >
          <svg className="w-6 h-6 text-gray-700">
            <use href="#chevron-left"></use>
          </svg>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
