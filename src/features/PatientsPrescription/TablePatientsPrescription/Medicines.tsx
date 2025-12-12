import TablePatientsPrescription from "./TablePatientsPrescription";

export default function Medicines() {
  return (
    <section>
        <div className="flex items-center justify-between ">
            <span>دارو ها</span>
            <div className="flex items-center hover:bg-primary-100 hover:text-white transition-all cursor-pointer justify-center h-10 gap-1 outline-1 rounded-[5px] w-[120px] text-primary-100">


            <button className='cursor-pointer text-xxs '>
                افزودن
            </button>
            <svg className='w-4 h-4'>
                <use href='#plus'></use>
            </svg>
            </div>
        </div>
        <TablePatientsPrescription/>
    </section>
  )
}
