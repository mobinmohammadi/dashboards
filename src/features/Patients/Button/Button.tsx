
export default function Button() {
  return (
    <div className='bg-neutral-100 cursor-pointer gap-2 flex items-center justify-center p-3 rounded-xl'>
        <svg className='w-5 h-5 text-primary-100'>
            <use href='#plassThw'></use>
        </svg>
        <button className='text-primary-100'>افزودن نسخه</button>
    </div>
  )
}
