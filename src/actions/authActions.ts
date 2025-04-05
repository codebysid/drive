"use server"
import { signIn } from "@/utils/auth"

export async function handleGoogleSigninServerAction() {
    await signIn("google", { redirectTo: "/dash" })
}