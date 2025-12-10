import React from 'react'

export default function HeaderPatient() {
    return (
        <div className="h-[155px] text-xxs text-gray-700 flex items-center gap-20 text-right border border-gray-400 rounded-2xl">

            <div className="flex items-center p-5 gap-4 h-full">
                <svg className='w-10 h-5 cursor-pointer leading-10'>
                    <use href='#arrow-right'></use>
                </svg>
                <svg className='w-27 h-27'>
                    <use href='#avatar'></use>
                </svg>
                <div className="flex justify-center gap-[38px] h-full flex-col">
                    <span>فاطمه طیبی</span>
                    <span>علت مراجعه: فشارخون بالا</span>
                </div>

            </div>
            <div className="flex  flex-col gap-2">
                <span>کد ملی: ۴۰۷۶۵۸۲۱۶</span>
                <span>جنسیت: مونث</span>
                <span>بیمه : تامین اجتماعی</span>
            </div>
            <div className="flex flex-col gap-2 ">
                <span>شماره تماس: ۰۹۱۲۳۴۵۷۶۷</span>
                <span>وضعیت بیمار: مراجعه سرپایی</span>
            </div>
            <div className="flex gap-4 items-center">
                <div className="flex flex-col items-center justify-center gap-4">

                    <div className="bg-[#4179F0] text-white items-center pt-3 pb-3 pr-5 pl-5 rounded-2xl flex gap-1">
                        <span className='text-xs w-16'>تجویز نسخه</span>
                        <svg className='w-3 h-3'>
                            <use href='#plass'></use>
                        </svg>
                    </div>
                    <span className='text-primary-100 text-x '>
                        نمایش اطلاعات بیشتر
                    </span>
                </div>
                <svg className='w-6 h-6'>
                    <use href='#menu'></use>
                </svg>
            </div>
        </div>)
}
