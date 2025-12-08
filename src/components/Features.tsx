import dynamic from "next/dynamic"
import { CloudUpload, Telescope, FolderOpen } from 'lucide-react';

const FeatureCard = dynamic(() => import("../components/FeatureCard"))


const featureData = [
    {
        id: 1,
        title: "Create Folders",
        description: "Create as much folders you want, as much nested you want",
        className: "col-span-2 dott-pattern",
    },
    {
        id: 2,
        title: "Upload Files",
        description: "Upload files in any folder and of any type",
        className: "col-span-1",
        icon: {
            Component: CloudUpload,
            className: "size-60 text-zinc-800 absolute -right-7 -bottom-10 -rotate-45 stroke-[0.5px]"
        }
    },
    {
        id: 3,
        title: "View Files",
        description: "View your files in real time, right in your browser",
        className: "col-span-1",
        icon: {
            Component: Telescope,
            className: "size-60 text-zinc-800 absolute left-1/2 -translate-x-1/2 -bottom-7 stroke-[0.5px]"
        }
    },
    {
        id: 4,
        title: "200mb Storage",
        description: "Every user has limit of 200mb because project is running on free services",
        className: "col-span-2 dott-pattern",
    }
]

const Features = () => {
    return (
        <div className="flex flex-col gap-7 lg:gap-4 md:gap-4 pl-10 slide-up">
            <h1 className='text-3xl font-bold text-secondary'>Features ↴</h1>
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-3 gap-4">
                    {
                        featureData.map(({ id, title, description, className, icon }) => {
                            return <FeatureCard
                                key={id}
                                description={description} title={title}
                                className={className}
                                icon={icon}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Features