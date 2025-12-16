
export default function RightContent() {
  return (
    <div className="border h-[246px]  w-[193px] border-gray-400 flex flex-col gap-4  rounded-2xl pr-[16.5px] pl-[16.5px] pt-[15px]">
        <img className="w-full h-40  object-cover rounded-md" src="./Images/doctor.jpg" alt="" />
        <button className="text-primary-100 hover:bg-primary-100 transition-all hover:text-white cursor-pointer w-full gap-2 border-primary-100 border rounded-md  flex items-center justify-center p-[9px]">
            <span>آپلود تصویر</span>
            <svg className="w-6 h-6"> 
                <use href="#plus"></use>
            </svg>
        </button>
    </div>
  )
}
