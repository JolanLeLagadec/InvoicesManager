'use client'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import useForm from '@/hooks/useForm'
import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import { format } from 'date-fns'
import gsap from 'gsap'
import { CalendarDaysIcon } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import Terms from './Terms'
import { Button } from '@/components/ui/button'
import Item from './Item'

export default function Form({ label, onSubmit }) {

    const handleSubmit = () => {
        onSubmit()
    }

    const [calendar, setCalendar] = useState(false)
    const [date, setDate] = useState(Date)
    const [items, setItems] = useState([{name: 'Design board', price: 5, quantity: 4}])
    console.log(items)

    
    const deleteItem = (i) => {
        const newItems = [...items]
        newItems.splice(i, 1)
        setItems(newItems)
    }
    const handleAddItems = (e) => {
        e.preventDefault()
        setItems([...items, {}])
    }



    const form = useForm()
    const formRef = useRef()
    const tl = useRef()
    const containerRef = useRef()
    const calendarRef = useRef()

    

    const { contextSafe } = useGSAP(() => {
        tl.current = gsap.timeline()
            .fromTo(formRef.current, {
                width: '30%',
                opacity: 0,


            }, {
                width: '100%',
                ease: "power4.out",
                duration: 0.5,
                opacity: 1


            }, { scope: formRef })
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

    if (!form.isOpen) {
        return null;
    }
    return (
        <div ref={containerRef} className={cn(' w-full absolute bg-opacity-75 bg-slate-950 z-20 overflow-y-auto h-fit md:h-full')}>
            <div className='w-[22rem] sm:w-[33rem] md:w-[35rem] block left-0 z-50 rounded-r-2xl '>
                <div ref={formRef} className='bg-white dark:bg-slate-950 rounded-r-2xl w-full  '>
                    <h1 className='font-bold text-lg p-6'>New Invoice</h1>
                    <form className='p-6 z-0 w-full h-full ' action="">
                        <div className='flex flex-col items-start w-full gap-6 '>
                            <span className='text-[#7C5DFA] mb-4'>Bill From</span>
                            <div className='flex flex-col gap-1 w-full'>
                                <label className='text-gray-400' htmlFor="">Street Adress</label>
                                <Input className='w-full darkbg-slate-900' />
                            </div>
                            <div className='flex flex-row gap-2 '>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-gray-400' htmlFor="">City</label>
                                    <Input className='basis-1/3 dark:bg-slate-900' />
                                </div>
                                <div className='flex flex-col gap-1 '>
                                    <label className='text-gray-400' htmlFor="">Post Code</label>
                                    <Input className='basis-1/3 dark:bg-slate-900' />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-gray-400' htmlFor="">Country</label>
                                    <Input className='basis-1/3 dark:bg-slate-900' />
                                </div>
                            </div>
                            <span className='text-[#7C5DFA] mt-8 mb-4'>Bill From</span>
                            <div className='flex flex-col gap-1 w-full'>
                                <label className='text-gray-400' htmlFor="">Client&apos;s Name</label>
                                <Input className='w-full dark:bg-slate-900' />
                            </div>
                            <div className='flex flex-col gap-1 w-full'>
                                <label className='text-gray-400' htmlFor="">Client&apos;s Email</label>
                                <Input className='w-full dark:bg-slate-900' />
                            </div>
                            <div className='flex flex-col gap-1 w-full'>
                                <label className='text-gray-400' htmlFor="">Client&apos;s Street Address</label>
                                <Input className='w-full dark:bg-slate-900' />
                            </div>
                            <div className='flex flex-row gap-2 mt-6'>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-gray-400' htmlFor="">City</label>
                                    <Input className='basis-1/3 dark:bg-slate-900' />
                                </div>
                                <div className='flex flex-col gap-1 '>
                                    <label className='text-gray-400' htmlFor="">Post Code</label>
                                    <Input className='basis-1/3 dark:bg-slate-900' />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-gray-400' htmlFor="">Country</label>
                                    <Input className='basis-1/3 dark:bg-slate-900' />
                                </div>

                            </div>
                            <div className='flex flex-row gap-2 items-center mt-6 w-full'>
                                <div className='flex flex-col gap-1 basis-1/2'>
                                    <label className='text-gray-400' htmlFor="">Invoice Date</label>
                                    <div
                                        onClick={() => setCalendar(!calendar)}
                                        className='flex justify-between items-center p-2 px-2 border dark:bg-slate-900 dark:border-gray-800 w-full rounded-lg relative cursor-pointer'>
                                        {
                                            date &&
                                            <span>{format(date, 'PP')}</span>
                                        }
                                        <CalendarDaysIcon

                                            className='cursor-pointer' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1 basis-1/2 '>
                                    <label className='text-gray-400' htmlFor="">Payment Terms</label>
                                    <Terms />
                                </div>
                            </div>
                            {
                                calendar ?
                                    <Calendar
                                        ref={calendarRef}
                                        mode='single'
                                        selected={date}
                                        onSelect={setDate}
                                        className='' />
                                    : ''
                            }
                            <div className='flex flex-col gap-1 w-full'>
                                <label className='text-gray-400' htmlFor="">Project description</label>
                                <Input className='w-full dark:bg-slate-900' />
                            </div>
                            <h1 className='dark:text-slate-700 font-bold text-lg mt-4'>Item List</h1>
                            <div className='grid grid-cols-10 w-full gap-3'>
                                <span className='col-span-4 flex justify-start'>Item Name</span>
                                <span className='col-span-2 flex justify-start'>Qty.</span>
                                <span className='col-span-2 flex justify-start'>Price</span>
                                <span className='col-span-2 flex justify-start'>Total</span>
                                {
                                    items.map((item, index) => (
                                        <Item
                                        deleteItem={deleteItem}
                                        setItems={setItems}
                                        data={item}
                                        index={index}
                                        key={index} />
                                    ))
                                }
                                <Button
                                    variant="outline"
                                    onClick={handleAddItems}
                                    className="col-span-10 bg-slate-100 rounded-full text-[#9277FF] font-bold hover:opacity-70 hover:text-[#9277FF] dark:bg-slate-800">Add New Item</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
