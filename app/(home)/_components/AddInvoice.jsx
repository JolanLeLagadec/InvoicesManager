'use client'
import React from 'react'
import Form from './Form'
import useForm from '@/hooks/useForm';
import { addInvoice } from '../_actions/addInvoice';

export default function AddInvoice() {

  const form = useForm()

  if (!form.isOpen.Add) {
    return null;
}
  return (
    <div>
      <Form label = 'New invoice' action={addInvoice} />
    </div>
  )
}
