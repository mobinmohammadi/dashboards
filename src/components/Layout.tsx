import { Outlet, useLocation } from "react-router";
import Header from "../features/layout/Header/Header";
import Sidebar from "../features/layout/Sidebar/Sidebar";
import Menumobile from "../features/Menumobile/Menumobile";
import { useEffect, useState } from "react";

function Layout() {
  const param = useLocation();
  console.log(param.pathname);
  const [title, setTitle] = useState("");
  useEffect(() => {
    switch (param.pathname) {
      case "/":
        setTitle("داشبورد اصلی");
        break;
      case "/patient":
        setTitle("اطلاعات بیمار");
        break;
        case "/listofpatients":
        setTitle("لیست بیماران روز");
        break;
    }
  }, [location.pathname]);

  return (
    <div className="">
      <div className="flex container-custom pb-80">
        <div className=" hidden sm:flex transition-custom h-screen">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full ">
          <Header title={title} />
          <main className="sm:pr-3 pt-6 mb-40">
            <Outlet />
          </main>
        </div>
        <div className="sm:hidden flex">
          <Menumobile />
        </div>
      </div>
    </div>
  );
}

export default Layout;
