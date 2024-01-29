'use server'

import db from "@/lib/db"
import { revalidatePath } from "next/cache"


export const editInvoice =  async (data) => {
   
    try {
        await db.invoice.update({
            where: {
                id: data.id
            },
                data
            
        })
    }catch(e){
        console.error(e)
    }
    revalidatePath(data.id)
    
}