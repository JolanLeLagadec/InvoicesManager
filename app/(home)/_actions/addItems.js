'use server'

import db from "@/lib/db"

export const addItems = async (items) => {
    console.log(items)
    await db.items.createMany({
       data: items.map(item => ({
            name: item.name,
            qty: item.qty,
            price: item.price
        }))
       })
}