import  { useState } from "react";
import Input from "../utils/Input";

import Header from "../features/layout/Header/Header";

export default function Login() {
  const [formLogin, setFormLogin] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
  });

  return (
    <>
      <Header title="داشبورد اصلی" />
      <div className="relative flex sm:flex-row flex-col bg-gray-800 items-center sm:justify-between sm:w-full  justify-center min-h-screen">
        <div className="absolute sm:block sm:w-[420px] mmd:w-[600px]  top-1/2 left-1/2 transform -translate-x-1/2 sm:translate-x-0 -translate-y-1/2  flex flex-col text-center gap-4 bg-white p-6 rounded-lg shadow-lg">
          <div className="sm:flex items-center justify-center flex-col gap-3">
            <svg>
              <use href="#logo"></use>
            </svg>
            <span>به دکتر رزرو خوش آمدید</span>
          </div>
          <div>
            <span className="text-xxs">
              برای ادامه شماره موبایل خود را وارد نمایید.
            </span>
          </div>
          <form action="#" className="w-full flex flex-col gap-2">
            <Input
              name="email"
              setValue={setFormLogin}
              label="ایمیل"
              padding="0"
              placeholder="ایمیل خود را وارد کنید..."
              value={formLogin.email}
            />

            <Input
              name="password"
              setValue={setFormLogin}
              label="پسوورد"
              padding="0"
              placeholder="پسوورد را وارد کنید.."
              value={formLogin.password}
            />
            <button className="bg-primary-100 w-full p-2 mt-5 text-white rounded-[5px]">
              ورود
            </button>
          </form>
        </div>
        <div className="flex  gap-4 mb-10 mmd:top-1/5 mmd:absolute left-20">
          <img src="./../Images/login/1.png" alt="" />
          <img src="./../Images/login/2.png" alt="" />
          <img src="./../Images/login/3.png" alt="" />
        </div>
      </div>
    </>
  );
}
