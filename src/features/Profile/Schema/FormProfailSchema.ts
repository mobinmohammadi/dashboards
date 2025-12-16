import * as Yup from "yup";

export const FormProfailSchema = Yup.object({
  firstname: Yup.string().required("نام الزامی است"),
  lastname: Yup.string().required("نام خانوادگی الزامی است"),
  nationalcode: Yup.string()
    .required("کد ملی الزامی است")
    .matches(/^\d{10}$/, "کد ملی باید 10 رقم باشد"),
  yearofbirth: Yup.string()
    .required("سال تولد الزامی است")
    .matches(/^\d{4}$/, "سال تولد باید 4 رقم باشد"),
  gender: Yup.string().required("جنسیت الزامی است"),
  city: Yup.string().required("شهر الزامی است"),
  phonenumber: Yup.string()
    .required("شماره موبایل الزامی است")
    .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
  email: Yup.string().required("ایمیل الزامی است").email("ایمیل معتبر نیست"),
});
