
import Filter from '@/app/(home)/_components/Filter'
import InvoiceItem from './_components/InvoiceItem'
import NewInvoiceButton from './_components/NewInvoiceButton'

export default function Home() {


  return (

    <div className='flex flex-col w-full p-4 sm:w-2/3 mx-auto py-8'>
      <div className='w-full flex justify-between '>
        <div className='flex flex-col items-start'>
          <h1 className=' dark:text-white text-2xl font-bold'>Invoices</h1>
          <span className='text-gray-500 text-sm hidden lg:block'>There are 4 pending invoices</span>
          <span className='text-gray-500 text-sm lg:hidden'> 4 invoices</span>
        </div>
        <div className='flex gap-4 items-center h-full'>
          <Filter label='Filter by status'/>
          <NewInvoiceButton />
        </div>
      </div>
      <div className='mt-16 space-y-4'>
        <InvoiceItem />
        <InvoiceItem />
      </div>
    </div>


  )
}
