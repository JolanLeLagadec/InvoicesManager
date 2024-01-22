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
        ending: false,
        paid: false
    })
    const handleSelect = (status) => {
        setIsChecked((prevChecked) => ({
                ...isChecked,
                [status]: !prevChecked[status]
        }))
    }

    return (
        <DropdownMenu
            onOpenChange={() => setIsOpen(!isOpen)}>
            <DropdownMenuTrigger
                className='text-sm flex  items-center gap-2 cursor-pointer outline-none'>
                <span className='text-sm flex  items-center gap-2 cursor-pointer outline-none'><span className="hidden lg:block">Filter by status</span><span className="lg:hidden">Filter</span> {isOpen ?
                    <Image src={arrowDown} width={10} alt='' /> :
                    <Image className="rotate-180 " src={arrowDown} width={10} alt='' />
                }</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='-space-y-4 items-start flex flex-col'>
                {
                   Object.entries(isChecked).map(([status, value]) => (
                        <DropdownMenuItem
                            key={status}
                            onSelect={(evt) => {
                                evt.preventDefault()
                                handleSelect(status)
                            }}
                            className='flex items-center gap-3 w-full'><Input checked={value} className='w-4' type='checkbox' />{status.charAt(0).toUpperCase() + status.slice(1)}</DropdownMenuItem>
                ))
                }
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
