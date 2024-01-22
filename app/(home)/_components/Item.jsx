'use client'
import { Input } from '@/components/ui/input'
import { Trash } from 'lucide-react'
import React from 'react'

export default function Item({ data, setItems, index, deleteItem }) {


    const total = data.price > 0 && data.quantity > 0 ? data.price * data.quantity : 0

    const handleChangeValue = (e) => {
        const { name, value } = e.target
        setItems((prevItems) => {
        const newItems = [...prevItems]
        newItems[index] = {
            ...prevItems[index],
            [name]: value
        }
        return newItems
    })}


    return (
        <>
            <Input
                name="name"
                value={data.name}
                onChange={handleChangeValue}
                className='col-span-4 dark:bg-slate-800 rounded-lg' />
            <Input
                name="quantity"
                value={data.quantity}
                onChange={handleChangeValue}
                className='col-span-2  dark:bg-slate-800 rounded-lg' />
            <Input
                name="price"
                value={data.price}
                onChange={handleChangeValue}
                className='col-span-2  dark:bg-slate-800 rounded-lg' />
            <div className='flex flex-row items-center justify-between col-span-2'>
                <span className=' dark:bg-slate-800 rounded-lg'>{total}€</span>
                <Trash 
                onClick={() => deleteItem(index)}
                className='cursor-pointer' />
            </div>
        </>
    )
}
