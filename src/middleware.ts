import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = ["/dash"]
const userRoutes = ["/", "/create"]

export async function middleware(request: NextRequest) {
  const session = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  if (!session && protectedRoutes.includes(request.nextUrl.pathname)) {
    const absoluteUrl = new URL("/", request.nextUrl.origin)
    return NextResponse.redirect(absoluteUrl.toString())
  }

  if (session && userRoutes.includes(request.nextUrl.pathname)) {
    const absoluteUrl = new URL("/dash", request.nextUrl.origin)
    return NextResponse.redirect(absoluteUrl.toString())

  }

}
