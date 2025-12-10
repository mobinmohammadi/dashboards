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
            <img className='w-12 h-12' src={img} alt="" />
            <span>{title}</span>
            <div className="text-xxs text-gray-700 gap-1 flex">
                <span className='text-primary-100 '>{descCount}</span>
                <span>{descText}</span>
            </div>
        </div>
    )
}

export default BoxPatient