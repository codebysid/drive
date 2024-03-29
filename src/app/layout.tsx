import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import ParentFolderProvider from "@/context/ParentFolderProvider";
import Provider from "@/context/Provider";
import UserProvider from "@/context/UserProvider";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import { authOptions } from "../utils/auth";
import "./globals.css";
import DevFooter from "@/components/DevFooter";
import React from "react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Drive",
  description: "Store files on cloud",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <Provider>
        <UserProvider>
          <ParentFolderProvider>
            <body className={`${inter.className} pt-10 px-10 dark min-h-[100vh] flex flex-col`}>
              <Toaster />
              {
                session && <Navbar />
              }
              {children}
              <DevFooter />
            </body>
          </ParentFolderProvider>
        </UserProvider>
      </Provider>
    </html>
  );
}
