'use client'
import moon from '@/starter-code/assets/icon-moon.svg'
import sun from '@/starter-code/assets/icon-sun.svg'
import Image from 'next/image'
import { useTheme } from "next-themes"
import { Button } from '../ui/button'

export default function ToggleTheme() {

    const { setTheme, resolvedTheme } = useTheme()
    console.log(resolvedTheme)

    return (
        <div className='h-full'>
            {
                resolvedTheme === 'light' ?
                    <Button
                     variant='ghost'
                     onClick={() => setTheme('dark')}>
                        <Image
                            src={moon}
                            width={20}
                            height={20}
                            alt='moon'
                        />
                    </Button> :

                    <Button 
                    variant='ghost'
                    onClick={() => setTheme('light')}>
                        <Image   
                            src={sun}
                            width={20}
                            height={20}
                            alt='moon'
                        />
                    </Button>
            }

        </div>
    )
}
