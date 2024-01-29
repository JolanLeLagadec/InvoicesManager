'use client'
import { Button } from '@/components/ui/button'
import useDeleteModale from '@/hooks/useDeleteModale'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { deleteInvoice } from '../../_actions/deleteInvoice'

export default function DeleteModale() {

    const deleteModale = useDeleteModale()
    const pathname = usePathname()

    const id = pathname.slice(1)
    console.log(id)
    

    const ref = useRef()

    const handleClickOutside = (e) => {
        if(!ref?.current?.contains(e.target)){
            deleteModale.onClose()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    })

    if(!deleteModale.isOpen){
        return null
    }
  return (
    <div className='bg-opacity-70 min-h-screen bg-slate-900 flex items-center justify-center fixed z-50 w-full'>
        <div ref={ref} className='rounded-2xl bg-white w-[20rem]  sm:w-[30rem] p-7 flex flex-col gap-3 '>
            <h1 className='text-2xl font-bold'>Confirm Deletion</h1>
            <p className='dark:text-slate-200'>Are you sure you want to delete invoice #XM897? This action cannot be undone</p>
            <div className='flex justify-end gap-2 w-full'>
                <Button
                onClick={() => deleteModale.onClose()} 
                variant='outline' className="py-6 px-4 bg-slate-800 font-semibold">Cancel</Button>
                <Button
                onClick={() => deleteInvoice(id)}
                variant='outline' className="py-6 px-4 bg-red-500 font-semibold ">Delete</Button>
            </div>

        </div>
    </div>
  )
}
