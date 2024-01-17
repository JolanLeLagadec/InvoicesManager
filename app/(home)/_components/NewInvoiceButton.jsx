'use client'
import { Button } from '@/components/ui/button'
import plus from '@/starter-code/assets/icon-plus.svg'
import useForm from '@/hooks/useForm'
import Image from 'next/image'
import React from 'react'

export default function NewInvoiceButton() {

    const form = useForm()

    const handleClick = () => {
            form.onOpen()
    }
  return (
    <>
    <Button onClick={handleClick} size='sm' className='bg-[#7C5DFA] hover:bg-[#9277FF] rounded-full items-center justify-center text-white gap-3 pl-1.5 py-5 hidden sm:flex'>
    <span className='rounded-full h-7 w-7 flex items-center justify-center bg-white'><Image src={plus} width={10} alt='plus' /></span>
    New invoice
  </Button>
  <Button onClick={handleClick} size='sm' className='bg-[#7C5DFA] hover:bg-[#9277FF] rounded-full flex items-center justify-center text-white gap-3 pl-1.5 py-5 sm:hidden'>
    <span className='rounded-full h-7 w-7 flex items-center justify-center bg-white'><Image src={plus} width={10} alt='plus' /></span>
    New 
  </Button>
  </>
  )
}
