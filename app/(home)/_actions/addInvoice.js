"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export const addInvoice = async (data, items) => {
    console.log(data)
    
  try {
    await db.invoice.create({
      data: {
        ...data,
        items: {
          createMany: {
            data: items.map((item) => ({
              name: item.name,
              qty: item.qty,
              price: item.price,
            })),
          },
        },
      },
    });
  } catch (e) {
    console.error(e.message);
  }
  revalidatePath('/')
};
