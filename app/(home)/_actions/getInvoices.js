'use server'
import db from "@/lib/db"


export const getInvoice =  async (id) => {
    const invoice = await db.invoice.findUnique({
        where: {
            id
        },
            include: {
                items: true
            }
    })
    return invoice;
}
export const getInvoices =  async (id) => {
    const invoices = await db.invoice.findMany({
        include: {
            items: true
        }
    })
    return invoices;
}