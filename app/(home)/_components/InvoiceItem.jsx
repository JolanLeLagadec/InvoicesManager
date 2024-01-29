'use client'
import React from 'react'
import arrowRight from '@/starter-code/assets/icon-arrow-right.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function InvoiceItem({ data }) {

    const amountDue = data.items.reduce((acc, item ) => acc + item.qty * item.price, 0) 
    const router = useRouter()
   

    return (
        <>
            <div 
            onClick={() => router.push(data.id)}
            className='hidden w-full bg-slate-800 p-5 lg:flex justify-between rounded-xl items-center cursor-pointer hover:scale-105 hover:transition-all'>
                <div className='flex flex-col md:flex-row gap-8 items-center'>
                    <h1 className='text-white font-bold'><span className='text-slate-500'>#</span>XM9141</h1>
                    <span className='text-slate-500 font-light text-sm'>Due {data.date}</span>
                    <span className='text-white font-light text-sm ml-4 '>{data.name}</span>
                </div>
                <div className='flex flex-row gap-5 items-center'>
                    <span className='text-white font-bold mr-6'>{amountDue}€</span>
                    <span className='p-2 rounded-lg bg-[#2b2736] flex justify-center items-center text-[#FF8F00] gap-2'><div className='bg-[#FF8F00] rounded-full h-2 w-2'></div><span>Pending</span></span>
                    <Image
                        src={arrowRight}
                        width={8}
                        alt="arrow"
                    />

                </div>
            </div>
            <div 
             onClick={() => router.push(data.id)}
             className='w-full bg-slate-800 p-5 flex justify-between rounded-xl items-center  lg:hidden cursor-pointer hover:scale-105 '>
                <div className='flex flex-col justify-between items-start h-full gap-6'>
                    <h1 className='text-white font-bold'><span className='text-slate-500'>#</span>XM9141</h1>
                    <div className='flex flex-col '>
                        <span className='text-slate-500 font-light text-sm'>Due {data.date}</span>
                        <span className='text-white font-light text-sm  '>{data.name}</span>
                    </div>

                </div>
                <div className='flex flex-col gap-6 items-center'>
                    <span className='text-white font-bold '>{amountDue}€</span>
                    <span className='p-2 rounded-lg bg-[#2b2736] flex justify-center items-center text-[#FF8F00] gap-2'><div className='bg-[#FF8F00] rounded-full h-2 w-2'></div><span>{data.statut}</span></span>
                </div>
            </div>
        </>
    )
}
