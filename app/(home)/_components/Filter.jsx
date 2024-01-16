'use client'
import arrowDown from "@/starter-code/assets/icon-arrow-down.svg"
import Image from 'next/image'
import { useState } from "react"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../components/ui/dropdown-menu"
import { Input } from "../../../components/ui/input"

export default function Filter() {

    const [isOpen, setIsOpen] = useState(false)
    const [isChecked, setIsChecked] = useState({
        draft: false,
        pending: false,
        paid: false
    })


    return (
        <DropdownMenu
            onOpenChange={() => setIsOpen(!isOpen)}>
            <DropdownMenuTrigger
                className='text-sm flex justify-center items-center gap-2 cursor-pointer outline-none'>
                Filter by status {isOpen ?
                    <Image src={arrowDown} width={10} alt='' /> :
                    <Image className="rotate-180" src={arrowDown} width={10} alt='' />
                }
            </DropdownMenuTrigger>
            <DropdownMenuContent className='-space-y-4 items-start flex flex-col'>
                <DropdownMenuItem
                    onSelect={(evt) => {
                        evt.preventDefault()
                        setIsChecked(!isChecked.draft)
                    }}
                    className='flex items-center gap-3 w-full'><Input checked={isChecked.draft} className='w-4' type='checkbox' />Draft</DropdownMenuItem>
                <DropdownMenuItem
                    onSelect={(evt) => {
                        evt.preventDefault()
                        setIsChecked(!isChecked.pending)
                    }}
                    className='flex items-center gap-3 w-full'><Input checked={isChecked.pending} className='w-4 bg-[#7C5DFA]' type='checkbox' />Pending</DropdownMenuItem>
                <DropdownMenuItem
                    onSelect={(evt) => {
                        evt.preventDefault()
                        setIsChecked(!isChecked.paid)

                    }}
                    className='flex items-center gap-3 w-full'><Input checked={isChecked.paid} className='w-4' type='checkbox' />Paid</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
