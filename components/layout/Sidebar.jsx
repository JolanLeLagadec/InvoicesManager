
import Image from 'next/image'
import React from 'react'
import logo from '@/starter-code/assets/logo.svg'
import ToggleTheme from './ToggleTheme'
import { UserButton } from '@clerk/nextjs'

export default function Sidebar() {


  return (
    <div className='bg-slate-800 w-full md:w-[8rem] rounded-none md:rounded-tr-3xl md:h-screen '>
      <div className='flex md:flex-col md:w-full justify-between items-center rounded-tr-2xl h-full'>
        <div className='flex items-center justify-center rounded-r-3xl relative bg-[#7C5DFA] w-[6rem] md:w-full p-4'>
          <Image
            className='z-20'
            src={logo}
            width={60}
            height={50}
            alt='logo'
          />
          <div className='bg-[#9277FF] absolute bottom-0 rounded-tl-3xl rounded-br-3xl z-10 h-1/2 w-full'></div>
        </div>
        <div className='flex md:flex-col items-center  gap-4 py-8 md:w-full pr-4 md:pr-0 '>
          <ToggleTheme />
          <div className='hidden md:block h-0.5 w-full bg-gray-500 '></div>
          <UserButton />
        </div>
      </div>
    </div>
  )
}
