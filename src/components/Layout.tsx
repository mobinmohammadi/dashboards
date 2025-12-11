import { Outlet } from "react-router";
import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import Menumobile from "./Menumobile/Menumobile";

function Layout() {
  return (
    <div className="flex min-h-screen container-custom">
      <div className="w-[320px] hidden sm:flex">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full ">
        <Header />
        <main className="pr-3 pt-6">
          <Outlet />
        </main>
      </div>
      <Menumobile/>
    </div>
  );
}

export default Layout;
