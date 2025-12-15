import { useState } from "react";
import Input from "../../../../utils/Input";
import Button from "../../../../utils/Button";
import SelectOption from "../../../../utils/SelectOption";
import { useNavigate } from "react-router";

export default function OnsPateintsEdit() {
  const [form, setForm] = useState<{ [key: string]: string }>({
    firstname: "",
    lastname: "",
    nationalcode: "",
    gender: "",
    city: "",
    Yearofbirth: "",
    email: "",
    mobilenumber: "",
  });

  const options = ["مذکر", "مونث"];
  const navigate = useNavigate();
  const [isShowLoader, setIsShowLaoder] = useState(false);
  const [titleButton , setTitleButton] = useState("ثبت اطلاعات")
  const submitHandler = () => {
    setTitleButton("در حال ثبت اطلاعات...")
    setTimeout(() => {
      navigate("/listofpatients")
    }, 1500);
  }

  return (
    <div className="container-custom mb-[200px] border rounded-2xl border-gray-300">
      <div className=" items-center grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 ">
        <Input
          name="firstname"
          value={form.firstname}
          setValue={setForm}
          placeholder="مبین"
          label="نام"
        />
        <Input
          name="lastname"
          value={form.lastname}
          setValue={setForm}
          placeholder="محمدی"
          label="نام خانوادگی"
        />
        <Input
          name="nationalcode"
          value={form.nationalcode}
          setValue={setForm}
          placeholder="29000000"
          label="کد ملی"
        />
        <Input
          name="Yearofbirth"
          value={form.Yearofbirth}
          setValue={setForm}
          placeholder="1384/05/09"
          label="سال تولد"
        />
        <SelectOption name="جنسیت" options={options} />
        <Input
          name="city"
          value={form.city}
          setValue={setForm}
          placeholder="ارومیه"
          label="شهر"
        />
        <Input
          name="mobilenumber"
          value={form.mobilenumber}
          setValue={setForm}
          placeholder="09036945119"
          label="شماره موبایل"
        />
        <Input
          name="email"
          value={form.email}
          setValue={setForm}
          placeholder="mobyn3223@gmail.com"
          label="ایمیل"
        />
      </div>
      <div className="" onClick={submitHandler}>
        <Button text={titleButton}/>
      </div>
    </div>
  );
}
