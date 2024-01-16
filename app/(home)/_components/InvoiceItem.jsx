import React from 'react'
import arrowRight from '@/starter-code/assets/icon-arrow-right.svg'
import Image from 'next/image'

export default function InvoiceItem() {
  return (
    <div className='w-full bg-slate-800 p-5 flex justify-between rounded-xl items-center'>
        <div className='flex flex-row gap-8 items-center'>
        <h1 className='text-white font-bold'><span className='text-slate-500'>#</span>XM9141</h1>
        <span className='text-slate-500 font-light text-sm'>Due 20 Sept 2021</span>
        <span className='text-white font-light text-sm ml-4'>Alex Grim</span>
        </div>
        <div className='flex flex-row gap-5 items-center'>
        <span className='text-white font-bold mr-6'>102.04€</span>
        <span className='p-2 rounded-lg bg-[#2b2736] flex justify-center items-center text-[#FF8F00] gap-2'><div className='bg-[#FF8F00] rounded-full h-2 w-2'></div><span>Pending</span></span>
        <Image
        src={arrowRight}
        width={8}
        alt="arrow"
        />

        </div>
    </div>
  )
}
