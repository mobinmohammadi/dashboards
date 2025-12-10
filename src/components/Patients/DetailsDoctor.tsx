import React from 'react'

export default function DetailsDoctor() {
    return (
        <div className='border relative w-[344px] h-[205px] flex flex-col gap-5 border-gray-700 rounded-2xl p-5'>
            <span>اطلاعات پزشکی</span>
            <div className="flex items-center gap-5 bg-neutral-100 & > *:flex & > *:gap-5 flex-col & > *:justify-between w-full & > *:w-full p-2 rounded-2xl">
                <div className="">
                    <span className='text-neutral-600 text-xxs'>گروه خونی:</span>
                    <span className='text-neutral-900 text-xs'>AB+</span>
                </div>
                <div>
                    <span className='text-neutral-600 text-xxs'>قد:</span>
                    <span className='text-neutral-900 text-xs'>۱۶۵ Cm</span>
                </div>
                <div>
                    <span className='text-neutral-600 text-xxs'>وزن:</span>
                    <span className='text-neutral-900 text-xs'>۶۷ Kg</span>
                </div>
            </div>
            <div className="w-8 h-8 absolute -bottom-4 left-1/2 -translate-x-1/2 bg-neutral-100 rounded-full flex items-center justify-center">
                <svg className='w-5 h-5 text-primary-100'>
                    <use href='#chevron-down'></use>
                </svg>
            </div>
        </div>
    )
}
