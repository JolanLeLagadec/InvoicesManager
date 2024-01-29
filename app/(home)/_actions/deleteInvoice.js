'use server'
import db from "@/lib/db"
import { redirect } from "next/navigation"

export const deleteInvoice = async (id) => {
    console.log('fn hit')
    const res = await db.invoice.delete({
        where: {
            id
        }
    })
    redirect('/')
}