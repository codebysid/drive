import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import ParentFolderProvider from "@/context/ParentFolderProvider";
import Provider from "@/context/Provider";
import UserProvider from "@/context/UserProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { auth } from "../utils/auth";
import "./globals.css";
import React from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Drive",
  metadataBase: new URL('https://next-drive-app.vercel.app'),
  icons: {
    icon: "/site-icon.png",
  },
  keywords: ["Siddhant Jain", "next-drive", "cloud storage", "google drive functionality clone"],
  description: "Next-Drive is an online file storage system",
  openGraph: {
    title: "Next Drive",
    description: "Next-Drive is a online file storage system",
    url: "/",
    siteName: "Next Drive",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/banner.png",
        width: 800,
        height: 600,
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Drive",
    description: "Next-Drive is a online file storage system",
    images: ["/banner.png"]
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  return (
    <html lang="en">
      <Provider>
        <UserProvider>
          <ParentFolderProvider>
            <body className={`${inter.className} dark`}>
              <SidebarProvider>
                {
                  session && <AppSidebar />
                }
                <Toaster position="top-right" toastOptions={{
                  unstyled: true,
                  classNames: {
                    error: 'border p-3 rounded-2xl bg-black flex flex-row items-center gap-2 bg-red-800',
                    success: 'border p-3 rounded-2xl bg-black flex flex-row items-center gap-2 bg-green-500',
                    warning: 'border p-3 rounded-2xl bg-black flex flex-row items-center gap-2 bg-yellow-500 text-black',
                    info: 'border p-3 rounded-2xl bg-black flex flex-row items-center gap-2 bg-blue-500',
                  },
                }} />
                {
                  session && <SidebarTrigger />
                }
                {children}
              </SidebarProvider>
            </body>
          </ParentFolderProvider>
        </UserProvider>
      </Provider>
    </html>
  );
}
