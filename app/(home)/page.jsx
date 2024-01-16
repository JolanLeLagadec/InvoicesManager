import { Button } from '@/components/ui/button'
import plus from '@/starter-code/assets/icon-plus.svg'
import Image from 'next/image'
import Filter from '@/app/(home)/_components/Filter'
import InvoiceItem from './_components/InvoiceItem'

export default function Home() {



  return (

    <div className='flex flex-col w-2/3'>
      <div className='w-full flex justify-between '>
        <div className='flex flex-col items-start'>
          <h1 className=' dark:text-white text-2xl font-bold'>Invoices</h1>
          <span className='text-gray-500 text-sm'>There are 4 pending invoices</span>
        </div>
        <div className='flex gap-4 items-center h-full'>
          <Filter />
          <Button size='sm' className='bg-[#7C5DFA] hover:bg-[#9277FF] rounded-full flex items-center justify-center text-white gap-3 pl-1.5 py-5'>
            <span className='rounded-full h-7 w-7 flex items-center justify-center bg-white'><Image src={plus} width={10} alt='plus' /></span>
            New invoice
          </Button>
        </div>
      </div>
      <div className='mt-16 space-y-4'>
      <InvoiceItem />
      <InvoiceItem />
      </div>
      
      
    </div>


  )
}
