"use server"
import { revalidatePath } from "next/cache"
export async function customRevalidate(path: string) {
  revalidatePath(path)
}
