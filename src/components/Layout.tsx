import { Outlet } from "react-router";
import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";

function Layout() {
  return (
    <div className="flex min-h-screen">
      <div className="w-[320px]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full ">
        <Header />
        <main className="pr-3 pt-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
