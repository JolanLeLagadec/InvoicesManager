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
import { useForm as useReactForm } from 'react-hook-form'
import arrow from '@/starter-code/assets/icon-arrow-left.svg'
import Image from 'next/image'

export default function Form({ label, action, data }) {


    const [term, setTerm ] = useState('Net 1 Day')
    console.log(term)
    const [isLoading, setIsLoading] = useState()

    const { handleSubmit, register, formState: { errors }, setValue } = useReactForm({
        defaultValues: {
            address: data?.address || '',
            city: data?.city || '',
            postCode: data?.postCode || '',
            country: data?.country || '',
            clientName: data?.clientName || '',
            clientEmail: data?.clientEmail || '',
            clientCity: data?.clientCity || '',
            clientAddress: data?.clientAddress || '',
            clientPostCode: data?.clientPostCode || '',
            clientCountry: data?.clientCountry || '',
            terms: data?.terms || '',
            date: data?.date || '',
            description: data?.description || '',
            statut: data?.statut || ''
        }
    })

   
    const onSubmit = async (formData) => {
        setIsLoading(true)
       
        const dateSelected = format(date, 'PP')
        formData.terms = term
        formData.date = dateSelected
        try {
            console.log('dans le try')
        await action(formData, items)
        }catch(e){
            console.error(e.message)
        }          
    }

    const [calendar, setCalendar] = useState(false)
    const [date, setDate] = useState(Date)
    const [items, setItems] = useState(data?.items || [{ name: 'Design board', price: 5, qty: 4 }])

    console.log(date, 'ici dfateeee')

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
            .fromTo(".anim", {
                width: '30%',
                opacity: 0,
            }, {
                width: '100%',
                ease: "power4.out",
                duration: 0.5,
                opacity: 1
            }
                , { scope: formRef })
    })

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

    return (
        <div ref={containerRef} className={cn(' w-full absolute bg-opacity-75 bg-slate-950 z-20 overflow-y-auto h-fit md:h-full')}>
            <div className='w-full sm:w-[33rem] md:w-[35rem] left-0 z-50 rounded-r-2xl '>
                <div ref={formRef} className='bg-white dark:bg-slate-950 rounded-r-2xl w-full relative anim flex flex-col'>
                    <div className='md:hidden p-6 -mb-4'>
                        <button
                            onClick={() => form.onClose()}
                            className='flex gap-5 items-center text-lg font-bold sm:hidden'>
                            <Image
                                src={arrow}
                                width={10}
                                alt="arrow"
                            />
                            Go back
                        </button>
                    </div>
                    <h1 className='font-bold text-lg p-6'>{label}</h1>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='p-6 z-0 w-full h-full ' >
                        <div className='flex flex-col items-start w-full gap-6 anim'>
                            <span className='text-[#7C5DFA] mb-4'>Bill From</span>
                            <div className='flex flex-col gap-1 w-full'>
                                <label className='text-gray-400' htmlFor="">Street Adress</label>
                                <Input
                                    {...register("address", { required: true })}
                                    className='w-full darkbg-slate-900' />
                                {errors.address && errors.address.type == 'required' && <p className='text-4xl text-black'>address requise ici</p>}
                            </div>
                            <div className='flex flex-row gap-2 '>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-gray-400' htmlFor="">City</label>
                                    <Input
                                        {...register("city", { required: true })}
                                        className='basis-1/3 dark:bg-slate-900' />
                                </div>
                                <div className='flex flex-col gap-1 '>
                                    <label className='text-gray-400' htmlFor="">Post Code</label>
                                    <Input
                                        {...register("postCode", { required: true })}
                                        className='basis-1/3 dark:bg-slate-900' />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-gray-400' htmlFor="">Country</label>
                                    <Input
                                        {...register("country", { required: true })}
                                        className='basis-1/3 dark:bg-slate-900' />
                                </div>
                            </div>
                            <span className='text-[#7C5DFA] mt-8 mb-4'>Bill To</span>
                            <div className='flex flex-col gap-1 w-full'>
                                <label className='text-gray-400' htmlFor="">Client&apos;s Name</label>
                                <Input
                                    {...register("clientName", { required: true })}
                                    className='w-full dark:bg-slate-900' />
                            </div>
                            <div className='flex flex-col gap-1 w-full'>
                                <label className='text-gray-400' htmlFor="">Client&apos;s Email</label>
                                <Input
                                    {...register("clientEmail", { required: true })}
                                    className='w-full dark:bg-slate-900' />
                            </div>
                            <div className='flex flex-col gap-1 w-full'>
                                <label className='text-gray-400' htmlFor="">Client&apos;s Street Address</label>
                                <Input
                                    {...register("clientAddress", { required: true })}
                                    className='w-full dark:bg-slate-900' />
                            </div>
                            <div className='flex flex-row gap-2 mt-6'>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-gray-400' htmlFor="">City</label>
                                    <Input 
                                    {...register("clientCity", {required: true})}
                                    className='basis-1/3 dark:bg-slate-900' />
                                </div>
                                <div className='flex flex-col gap-1 '>
                                    <label className='text-gray-400' htmlFor="">Post Code</label>
                                    <Input
                                     {...register("clientPostCode", {required: true})}
                                     className='basis-1/3 dark:bg-slate-900' />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-gray-400' htmlFor="">Country</label>
                                    <Input
                                     {...register("clientCountry", {required: true})} 
                                    className='basis-1/3 dark:bg-slate-900' />
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
                                    <Terms setTerm={setTerm} />
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
                                <Input 
                                {...register('description', {required: true})}
                                className='w-full dark:bg-slate-900' />
                            </div>
                            <h1 className='dark:text-slate-400 font-bold text-lg mt-4'>Item List</h1>
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
                            {
                                label === 'New invoic' ?
                                    <div
                                        className='mt-6 flex justify-between items-center w-full bg-white anim'>
                                        <Button
                                            variant='outline'
                                            className="p-4 bg-slate-200 text-slate-500 font-bold text-md px-4 py-6 rounded-full">Discard</Button>
                                        <div className='flex items-center gap-2 '>
                                            <Button
                                                variant='outline'
                                                className=" bg-slate-800 text-slate-500 font-bold text-md px-4 py-6 rounded-full">Save as Draft</Button>
                                            <Button
                                                type='submit'
                                                variant='outline'
                                                className="px-4 py-6 bg-[#7C5DFA] text-gray-100 font-bold text-md rounded-full">Save changes</Button>
                                        </div>
                                    </div>
                                    :
                                    <div className='flex items-center gap-2 '>
                                        <Button
                                            onClick={() => form.onClose()}
                                            variant='outline'
                                            className=" bg-slate-800 text-slate-500 font-bold text-md px-4 py-6 rounded-full">Cancel</Button>
                                        <Button
                                            type='submit'
                                            variant='outline'
                                            className="px-4 py-6 bg-[#7C5DFA] text-gray-100 font-bold text-md rounded-full">Save & Send</Button>
                                    </div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
