
export default function RightContent() {
  return (
    <div className="border h-61.5 w-full items-center sm:w-48.25 border-gray-400 flex flex-col gap-4  rounded-2xl pr-[16.5px] pl-[16.5px] pt-3.75">
        <img className="w-48 sm:w-full h-40 object-c rounded-md" src="./Images/doctor.jpg" alt="" />
        <button className="text-primary-100 w-48  hover:bg-primary-100 transition-all hover:text-white cursor-pointer sm:w-full gap-2 border-primary-100 border rounded-md  flex items-center justify-center p-2.25">
            <span>آپلود تصویر</span>
            <svg className="w-6 h-6"> 
                <use href="#plus"></use>
            </svg>
        </button>
    </div>
  )
}
