export default function HeaderPatient() {
  return (
    <div className="h-[204px]  sm:h-[155px] text-xs text-gray-700 flex-col sm:flex-row flex justify-between pl-4 items-center  text-right border border-gray-400 rounded-2xl">
      <div className="flex items-center sm:p-5 gap-4 h-full">
        <svg className="w-10 h-5 cursor-pointer leading-10">
          <use href="#arrow-right"></use>
        </svg>
        <svg className="w-20 h-20">
          <use href="#avatar"></use>
        </svg>
        <div className="flex justify-center gap-1 sm:gap-[38px] h-full flex-col">
          <span>فاطمه طیبی</span>
          <span>علت مراجعه: فشارخون بالا</span>
        </div>
      </div>
      <div className="hidden sm:flex gap-20 ">
        <div className="flex  flex-col gap-2">
          <span>کد ملی: ۴۰۷۶۵۸۲۱۶</span>
          <span>جنسیت: مونث</span>
          <span>بیمه : تامین اجتماعی</span>
        </div>
        <div className="flex flex-col gap-2 ">
          <span>شماره تماس: ۰۹۱۲۳۴۵۷۶۷</span>
          <span>وضعیت بیمار: مراجعه سرپایی</span>
        </div>
      </div>
      <div className="flex gap-4 w-full sm:w-auto items-center justify-between p-4 ">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="bg-[#4179F0] text-white items-center pt-3 pb-3 pr-5 pl-5 rounded-2xl flex gap-1">
            <span className="text-xs w-16">تجویز نسخه</span>
            <svg className="w-3 h-3">
              <use href="#plass"></use>
            </svg>
          </div>
          <span className="sm:text-primary-100 text-x text-gray-700 border-b-gray-700 border-b">
            نمایش اطلاعات بیشتر
          </span>
        </div>
        <svg className="w-6 h-6">
          <use href="#menu"></use>
        </svg>
      </div>
    </div>
  );
}
