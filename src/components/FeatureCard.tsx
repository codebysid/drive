import { cn } from "@/lib/utils"
import Image from "next/image"
import { ComponentType } from "react"

interface IFeatureCard {
    title: string,
    description: string,
    className?: string,
    icon?: {
        Component: ComponentType<any>,
        className?: string
    },
}

const FeatureCard = ({ description, title, className, icon }: IFeatureCard) => {
    return (
        <div className={cn(`flex flex-col pt-12 gap-1 px-5 h-80 transition-all duration-200  rounded-sm shadow-[inset_2px_2px_30px_5px_rgba(255,255,255,0.05)] border-2 relative ${className}`)}>
            <p className=" text-xl font-semibold">
                {title}
            </p>
            <span className=" text-white/50 text-balance">
                {description}
            </span>
            {
                icon && <icon.Component className={icon.className} />
            }
        </div>
    )
}

export default FeatureCard