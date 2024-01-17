'use client'
import { Input } from '@/components/ui/input'
import useForm from '@/hooks/useForm'
import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

export default function Form() {

    const form = useForm()
    const formRef = useRef()
    const tl = useRef()
    const containerRef = useRef()
   
    const { contextSafe } = useGSAP(() => {
        tl.current = gsap.timeline()
        .fromTo(formRef.current, {
            width: "30%",
            opacity: 0     
        }, {
            width: '100%',
            ease: "power4.out",
            duration: 1,    
            opacity: 1,
          
        }, {scope: formRef})
    }, [form.isOpen])

    const handleClickOutside = (evt) => {
        if (!formRef.current.contains(evt.target) && containerRef.current.contains(evt.target)) {
            form.onClose()
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })

    if(!form.isOpen){
        return null;
    }
    return (
        <div ref={containerRef} className={cn('h-[100vh] w-full absolute bg-opacity-75 bg-slate-950')}>
            <div className='w-[20rem] sm:w-[25rem] left-0 h-full z-50 rounded-r-2xl'>
                <div ref={formRef} className='bg-white dark:bg-slate-950 h-full rounded-r-2xl w-full'>
                    <form className='p-6 transition z-0 w-full' action="">
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='font-bold text-lg w-full'>New Invoice</h1>
                            <span className='text-[#7C5DFA] mt-8 mb-4'>Bill From</span>
                            <div className='flex flex-col gap-1 w-full'>
                                <label className='text-gray-400' htmlFor="">Street Adress</label>
                                <Input className='w-full' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>           
        </div>
    )
}
