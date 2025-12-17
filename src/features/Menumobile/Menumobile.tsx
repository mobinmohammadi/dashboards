import { Link, useLocation } from "react-router";

export default function Menumobile() {
  const { pathname } = useLocation();

  const menuItems = [
    { to: "/", icon: "#menu-svg", title: "صفحه اصلی" },
    { to: "/listofpatients", icon: "#patins", title: "لیست روزها" },
    { to: "/timedays", icon: "#time", title: "زمان‌بندی" },
    { to: "/profile", icon: "#user", title: "ویرایش اطلاعات" },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] h-22 z-10 flex items-center bg-white rounded-2xl shadow-2xl">
      <div className="flex gap-5 justify-center items-center w-full h-full">
        {menuItems.map((menu) => {
          const isActive = pathname === menu.to;

          return (
            <Link
              key={menu.to}
              to={menu.to}
              className={`flex gap-1 transition-all items-center p-2 rounded-md ${
                isActive
                  ? "bg-primary-100 text-white"
                  : "text-gray-900"
              }`}
            >
              <svg className="w-6 h-6">
                <use href={menu.icon}></use>
              </svg>

              {isActive && <span>{menu.title}</span>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
