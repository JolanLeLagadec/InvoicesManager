'use client'
import { useRouter } from "next/navigation"
import React from 'react'
import GobackButton from "./GobackButton"
import { Button } from "@/components/ui/button"

export default function Invoice() {


  const router = useRouter()

  return (
    <>
      <div className="flex flex-col gap-4 py-6 px-6 w-full max-w-5xl mx-auto">
        <GobackButton />
        <div className="bg-white rounded-xl flex items-center justify-between p-5 w-full">
          <div className="flex items-center justify-between md:justify-normal gap-7 w-full">
            <span className="text-gray-400 font-bold text-sm">Status</span>
            <div className="rounded-lg bg-orange-100 p-2 gap-2 flex items-center justify-center text-orange-400 font-bold">
              <div className="rounded-full bg-orange-400 w-3 h-3"></div>
              Pending
            </div>
          </div>

          <div className="hidden p-7 items-center justify-center gap-3 md:flex ">
            <Button size="md" variant="outline" className="rounded-full px-5 py-3 hover:bg-opacity-70 bg-slate-100 font-semibold text-slate-600">Edit</Button>
            <Button size="md" variant="outline" className="rounded-full px-5 py-3 hover:bg-opacity-70 bg-[#EC5757] font-semibold text-slate-100">Delete</Button>
            <Button size="md" variant="outline" className="rounded-full px-5 py-3 hover:bg-opacity-70 bg-[#7C5DFA] font-semibold text-slate-100">Mark as Paid</Button>
          </div>
        </div>
        <div className="bg-white rounded-xl flex flex-col items-start gap-6 p-4 md:p-16">
          <div className="flex flex-col md:flex-row justify-between w-full gap-4">
            <div className="flex flex-col gap-2 ">
              <h1 className='text-black font-bold'><span className='text-slate-500'>#</span>XM9141</h1>
              <span className="font-semibold text-slate-400 text-sm">Graphic Design</span>
            </div>
            <ul className="flex flex-col gap-1 text-slate-400 text-xs font-semibold">
              <li>19 union Terrace</li>
              <li>London</li>
              <li>E1 3EZ</li>
              <li>United Kingdom</li>
            </ul>
          </div>

          <div className="flex justify-between w-[80%]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-slate-400 text-sm">Invoice date</h1>
                <span className="font-bold text-black text-md">21 Aug 2021</span>

              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-slate-400 text-sm">Payment Due</h1>
                <span className="font-bold text-black text-md">20 Sept 2021</span>
              </div>

            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-slate-400 font-semibold text-sm">Bill To</h1>
              <span className="font-semibold text-black text-md">Alex Grim</span>
              <ul className="flex flex-col gap-1 text-xs font-semibold text-slate-400">
                <li>84 Church Way</li>
                <li>Bradford</li>
                <li>8D1 9PB</li>
                <li>United Kingdom</li>
              </ul>
            </div>
            <div className="md:flex flex-col gap-2 hidden">
            <h1 className="font-semibold text-slate-400 text-sm">Sent to</h1>
            <span className="font-bold text-black text-md">alexgrim@mail.com</span>
          </div>
          </div>
          <div className="flex flex-col gap-2 md:hidden">
            <h1 className="font-semibold text-slate-400 text-sm">Sent to</h1>
            <span className="font-bold text-black text-md">alexgrim@mail.com</span>
          </div>
          <div className="w-full p-6 bg-slate-100 flex flex-col gap-4 rounded-t-xl md:hidden">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-black text-md">Banner Design</h1>
                <span className="text-slate-500 text-sm">1 x 156.00</span>
              </div>
              <span className="font-bold text-black text-md">156€</span>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-black text-md">Email Design</h1>
                <span className="text-slate-500 text-sm">2 x 200.00</span>
              </div>
              <span className="font-bold text-black text-md">400€</span>
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

            <div className="flex justify-between ">
              <div className="w-full">
              <h1 className="text-black text-md font-bold">Banner Design</h1>
              </div>
              <div className="flex items-center justify-between w-full font-semibold">
                <span className="text-slate-500 text-md">1</span>
                <span className="text-slate-500 text-md">156.00€</span>
                <span className="text-black font-bold text-md">156.00€</span>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="w-full">
              <h1 className="text-black text-md font-bold">Email Design</h1>
              </div>
              <div className="flex items-center justify-between w-full font-semibold">
                <span className="text-slate-500 text-md">2</span>
                <span className="text-slate-500 text-md">200.00€</span>
                <span className="text-black font-bold text-md">400.00€</span>
              </div>
            </div>
      </div>
          <div className="w-full bg-slate-800 p-8 -mt-6 rounded-b-xl flex justify-between">
          <span className="text-slate-100 text-sm hidden md:block font-medium">Amount Due</span>
            <span className="text-slate-100 text-sm md:hidden">Grand Total</span>
            <h1 className="text-white font-bold text-lg md:text-xl">556.00€</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-7 flex items-center justify-center gap-3 md:hidden ">
        <Button 
        size="md" 
        variant="outline" 
        className="rounded-full px-5 py-3 hover:bg-opacity-70 bg-slate-100 font-semibold text-slate-600">Edit</Button>
        <Button 
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
