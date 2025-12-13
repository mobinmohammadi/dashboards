interface IProps {
  setIsShowModal: (value: boolean) => void;
}

export default function ErrorModal({ setIsShowModal }: IProps) {
  return (
    <div className="fixed  w-full sm:inset-0 bottom-0 right-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full sm:w-auto p-6 rounded-t-lg sm:rounded-lg shadow-lg ">
        <div className="flex flex-col gap-4 items-center  h-full">
          <div className="bg-[#FEEDED] w-16 h-16 flex items-center justify-center rounded-md">
            <svg className="w-7 h-7">
              <use href="#error"></use>
            </svg>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="text-md">مشکل در ثبت</span>
            <p className="text-xs text-gray-700 ">
              ثبت نسخه بیمار با مشکل روبرو شد
            </p>
          </div>
          <div className="flex gap-4 & > *:text-xxs  & > *:sm:w-[204px]  & > *:w-[163px] & > *:h-10 & > *:rounded-[5px] & > *:cursor-pointer">
            <button
              className="border border-primary-100  text-primary-100"
              onClick={() => setIsShowModal(false)}
            >
              انصراف
            </button>
            <button
              className="bg-primary-100   text-white"
              onClick={() => {
                setIsShowModal(false);
              }}
            >
              ثبت مجدد
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
