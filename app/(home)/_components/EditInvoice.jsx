'use client'
import React, { useEffect, useState } from 'react'
import Form from './Form'
import useForm from '@/hooks/useForm';
import { editInvoice } from '../_actions/editInvoice';
import { usePathname } from 'next/navigation';
import { getInvoice } from '../_actions/getInvoices';

export default function EditInvoice() {

  const [inv, setInv] = useState()

  const form = useForm()

  const pathname = usePathname()
  const id = pathname.slice(1)

  useEffect(() => {
    const fetchInv = async () => {
        const invoice = await getInvoice(id)
        if(invoice){
          setInv(invoice)
        }
    }
    fetchInv()
  }, [id])
  
  if (!form.isOpen.Edit) {
    return null;
}
  return (
    <div>
      <Form label ='Edit invoice' action={editInvoice} data={inv} />
    </div>
  )
  
}

