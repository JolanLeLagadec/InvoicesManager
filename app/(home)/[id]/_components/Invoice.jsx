'use client'
import { useRouter } from "next/navigation"
import React, { useCallback, useEffect, useState } from 'react'
import GobackButton from "./GobackButton"
import { Button } from "@/components/ui/button"
import { getInvoice } from "../../_actions/getInvoices"
import useForm from "@/hooks/useForm"
import { addDays, format } from 'date-fns'
import useDeleteModale from "@/hooks/useDeleteModale"

export default function Invoice({ id }) {


  const [invoice, setInvoice] = useState()
  const [days, setDays] = useState()
  const [paymentDate, setPaymentDate] = useState(Date)
  const term = invoice?.terms


  const deleteModale = useDeleteModale()

  const grandTotal = invoice?.items.reduce((acc, item) => acc + item.price * item.qty, 0)


  const getNumberOfDaysInTerm = useCallback(() => {
    let result = new Array()
    term?.split('').forEach(character => {
      const numericValue = parseInt(character)
      if (!isNaN(numericValue)) {
        result.push(numericValue)
      }
    })
    const numberOfDay = result.join('')
    return numberOfDay
  }, [term])

  const getPaymentDate = useCallback(() => {
    if (invoice?.date && days) {
      const originalDate = new Date(invoice.date);
      const paymentDate = addDays(originalDate, parseInt(days)) // Crée une nouvelle instance

      setPaymentDate(format(paymentDate, 'PP'))
      console.log(paymentDate)
    }
  }, [days, invoice?.date])

  useEffect(() => {
    const days = getNumberOfDaysInTerm()
    if (days) {
      setDays(days)
      getPaymentDate()
    }
  }, [getNumberOfDaysInTerm, getPaymentDate])


  const form = useForm()


  useEffect(() => {
    const fetchInv = async () => {
      const res = await getInvoice(id)
      if (res) {
        setInvoice(res)
      }
    }
    fetchInv()
  }, [id])




  return (
    <>
      <div className="flex flex-col gap-4 py-6 px-6 w-full max-w-5xl mx-auto">
        <GobackButton />
        <div className="bg-white rounded-xl flex items-center justify-between p-5 w-full">
          <div className="flex items-center justify-between md:justify-normal gap-7 w-full">
            <span className="text-gray-400 font-bold text-sm">Statut</span>
            <div className="rounded-lg bg-orange-100 p-2 gap-2 flex items-center justify-center text-orange-400 font-bold">
              <div className="rounded-full bg-orange-400 w-3 h-3"></div>
              {invoice?.statut}
            </div>
          </div>

          <div className="hidden p-7 items-center justify-center gap-3 md:flex ">
            <Button
              onClick={() => form.onOpen('Edit')}
              size="md"
              variant="outline"
              className="rounded-full px-5 py-3 hover:bg-opacity-70 bg-slate-100 font-semibold text-slate-600">Edit</Button>
            <Button onClick={() => deleteModale.onOpen()} size="md" variant="outline" className="rounded-full px-5 py-3 hover:bg-opacity-70 bg-[#EC5757] font-semibold text-slate-100">Delete</Button>
            <Button size="md" variant="outline" className="rounded-full px-5 py-3 hover:bg-opacity-70 bg-[#7C5DFA] font-semibold text-slate-100">Mark as Paid</Button>
          </div>
        </div>
        <div className="bg-white rounded-xl flex flex-col items-start gap-6 p-4 md:p-16">
          <div className="flex flex-col md:flex-row justify-between w-full gap-4">
            <div className="flex flex-col gap-2 ">
              <h1 className='text-black font-bold'><span className='text-slate-500'>#</span>XM9141</h1>
              <span className="font-semibold text-slate-400 text-sm">{invoice?.name}</span>
            </div>
            <ul className="flex flex-col gap-1 text-slate-400 text-xs font-semibold">
              <li>{invoice?.address}</li>
              <li>{invoice?.city}</li>
              <li>{invoice?.postCode}</li>
              <li>{invoice?.country}</li>
            </ul>
          </div>

          <div className="flex justify-between w-[80%]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-slate-400 text-sm">Invoice date</h1>
                <span className="font-bold text-black text-md">{invoice?.date}</span>

              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-slate-400 text-sm">Payment Due</h1>
                <span className="font-bold text-black text-md">{paymentDate}</span>
              </div>

            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-slate-400 font-semibold text-sm">Bill To</h1>
              <span className="font-semibold text-black text-md">{invoice?.clientName}</span>
              <ul className="flex flex-col gap-1 text-xs font-semibold text-slate-400">
                <li>{invoice?.clientAddress}</li>
                <li>{invoice?.clientCity}</li>
                <li>{invoice?.clientPostCode}</li>
                <li>{invoice?.clientCountry}</li>
              </ul>
            </div>
            <div className="md:flex flex-col gap-2 hidden">
              <h1 className="font-semibold text-slate-400 text-sm">Sent to</h1>
              <span className="font-bold text-black text-md">{invoice?.clientEmail}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:hidden">
            <h1 className="font-semibold text-slate-400 text-sm">Sent to</h1>
            <span className="font-bold text-black text-md">{invoice?.clientEmail}</span>
          </div>
          <div className="w-full p-6 bg-slate-100 flex flex-col gap-4 rounded-t-xl md:hidden">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col gap-2">
                {
                  invoice?.items.map(item => (
                    <>
                      <h1 className="font-bold text-black text-md">{item.name}</h1>
                      <span className="text-slate-500 text-sm">{item.qty} x {item.price}</span>
                    </>
                  ))
                }
              </div>
              <span className="font-bold text-black text-md">{grandTotal}€</span>
            </div>

          </div>
          {/* 
            medium size
           */}
          <div className="w-full p-6 bg-slate-100 flex-col gap-4 rounded-t-xl hidden md:flex ">
            <div className="flex justify-between items-center mb-8">
              <div className="w-full">
                <h1 className="text-slate-500 text-sm font-semibold">Item Name</h1>
              </div>
              <div className="flex items-center justify-between w-full font-semibold">
                <span className="text-slate-500 text-sm">QTY.</span>
                <span className="text-slate-500 text-sm">Price</span>
                <span className="text-slate-500 text-sm">Total</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">      
              {
                invoice?.items.map(item => (
                  <div key={item.id}className="flex justify-between">
                    <div className="w-full">
                      <h1 className="text-black text-md font-bold">{item.name}</h1>
                    </div>
                    <div className="flex items-center justify-between w-full font-semibold">
                      <span className="text-slate-500 text-md">{item.qty}</span>
                      <span className="text-slate-500 text-md">{item.price}€</span>
                      <span className="text-black font-bold text-md">{item.price * item.qty}€</span>
                    </div>
                    </div>
                ))
              }
              </div>
              
          </div>
          <div className="w-full bg-slate-800 p-8 -mt-6 rounded-b-xl flex justify-between">
            <span className="text-slate-100 text-sm hidden md:block font-medium">Amount Due</span>
            <span className="text-slate-100 text-sm md:hidden">Grand Total</span>
            <h1 className="text-white font-bold text-lg md:text-xl">{grandTotal}€</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-7 flex items-center justify-center gap-3 md:hidden ">
        <Button
        onClick={() => form.onOpen('Edit')}
          size="md"
          variant="outline"
          className="rounded-full px-5 py-3 hover:bg-opacity-70 bg-slate-100 font-semibold text-slate-600">Edit</Button>
        <Button
          onClick={() => deleteModale.onOpen()}
          size="md"
          variant="outline"
          className="rounded-full px-5 py-3 hover:bg-opacity-70 bg-[#EC5757] font-semibold text-slate-100">Delete</Button>
        <Button
          size="md"
          variant="outline"
          className="rounded-full px-5 py-3 hover:bg-opacity-70 bg-[#7C5DFA] font-semibold text-slate-100">Mark as Paid</Button>
      </div>
    </>
  )
}
