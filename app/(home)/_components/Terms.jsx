import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React, { useState } from 'react'
import arrowDown from "@/starter-code/assets/icon-arrow-down.svg"

export default function Terms() {
    
    const [isOpen, setIsOpen] = useState(false)
    const terms = [
        'Net 1 Day',
        'Net 7 Days',
        'Net 14 Days',
        'Net 30 Days',
    ]
    const [ selected, setSelected ] = useState('Net 1 Day')
  
    // Click sur item on selectionne

    return (
        <DropdownMenu
            onOpenChange={() => setIsOpen(!isOpen)}>
            <DropdownMenuTrigger
                >
                <div className='text-sm  flex justify-between items-center  p-2 border dark:border-gray-800 rounded-lg cursor-pointer outline-none'><span className="hidden lg:block">{selected}</span><span className="lg:hidden">Filter</span> {isOpen ?
                    <Image src={arrowDown} width={10} alt='' /> :
                    <Image className="rotate-180 " src={arrowDown} width={10} alt='' />
                }</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='items-start flex flex-col'>
                {
                   terms.map((term) => (
                        <DropdownMenuItem
                            key={term}
                            onSelect={() => {
                                setSelected(term)
                            }}
                            className='flex items-cenetr justify-start gap-3 w-full'>{term}</DropdownMenuItem>
                ))
                }
            </DropdownMenuContent>
        </DropdownMenu>

    )
}