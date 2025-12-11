import React from 'react'

interface IBox {
    title: string,
    img: string,
    descText: string,
    descCount: string,
}

function BoxPatient({ title, img, descText, descCount }: IBox) {
    return (
        <div className='rounded-2xl p-5 flex-col gap-2 border-gray-400 flex items-center border'>
            <img className='w-10 h-10 sm:w-7 sm:h-7' src={img} alt="" />
            <span className='text-md'>{title}</span>
            <div className=" text-gray-700 gap-1 text-xxs sm:text-x sm:text-xs font-da flex">
                <span className='text-primary-100 '>{descCount}</span>
                <span>{descText}</span>
            </div>
        </div>
    )
}

export default BoxPatient