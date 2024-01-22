'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import arrow from '@/starter-code/assets/icon-arrow-left.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function GobackButton() {

  const router = useRouter()


  return (
    <>
     <button
     onClick={() => router.back()}
     className='flex gap-5 items-center text-lg font-bold '>
        <Image
        src={arrow}
        width={10}
        alt="arrow"
          />
          Go back
    </button>
    </>
  )
}
