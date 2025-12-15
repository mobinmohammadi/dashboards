import React from 'react'
import Button from '../../../../utils/Button'

export default function HeaderListOfPatients() {
  return (
    <div className='flex items-center justify-between'>
        <span>لیست بیماران روز</span>
        <Button text="افزودن بیمار"/>
    </div>
  )
}
