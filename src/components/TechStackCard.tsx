import Link from "next/link"
import { ReactNode } from "react"
import { ArrowUpRight, UploadCloud } from 'lucide-react'

interface ITechStackCard {
    url: string,
    name: string,
    icon: ReactNode
}

const TechStackCard = ({ name, url, icon }: ITechStackCard) => {
    return (
        <Link target='_blank' href={url} className='border-2 hover:border-primary/40 rounded-full w-full lg:w-[49%] md:lg:w-[49%] bg-linear-to-b from-neutral-900 to-neutral-800 hover:transition-all hover:duration-300' title={name}>
            <div className='rounded-full p-4 flex flex-row items-center gap-2'>
                <div className={`bg-secondary p-2 w-min rounded-full ${name === "ShadCN UI" && "-rotate-45"}`}>
                    {icon}
                </div>
                <p className='font-bold text-xl  w-full flex flex-row justify-between items-center'>
                    <span>
                        {name}
                    </span>
                    <ArrowUpRight className='text-primary' />
                </p>
            </div>
        </Link>
    )
}

export default TechStackCard