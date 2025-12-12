import { Outlet, useLocation, useParams } from "react-router";
import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import Menumobile from "./Menumobile/Menumobile";
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
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen container-custom">
      <div className=" hidden sm:flex transition-custom">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full ">
        <Header title={title} />
        <main className="pr-3 pt-6">
          <Outlet />
        </main>
      </div>
      <div className="sm:hidden flex">
        <Menumobile />
      </div>
    </div>
  );
}

export default Layout;
