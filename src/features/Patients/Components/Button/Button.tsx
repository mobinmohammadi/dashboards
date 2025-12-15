import { useNavigate } from "react-router"

export default function Button() {
  const navigate = useNavigate()
  return (
    <div  onClick={() => navigate("/PrescriptionPage")} className='bg-neutral-100 hover:bg-neutral-200 transition-all duration-150 cursor-pointer gap-2 flex items-center justify-center p-3 rounded-xl'>
        <svg className='w-5 h-5 text-primary-100'>
            <use href='#plassThw'></use>
        </svg>
        <button className='text-primary-100 cursor-pointer'>افزودن نسخه</button>
    </div>
  )
}
