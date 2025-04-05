import dynamic from "next/dynamic"

const FeatureCard = dynamic(() => import("../components/FeatureCard"))

const featureData = [
    {
        id: 1,
        title: "Create Folders",
        description: "Create as much folders you want, as much nested you want"
    },
    {
        id: 2,
        title: "Upload Files",
        description: "Upload files in any folder and of any type"
    },
    {
        id: 3,
        title: "View Files",
        description: "View your files in real time, right in your browser"
    },
    {
        id: 4,
        title: "200mb Storage",
        description: "Every user has limit of 200mb because project is running on free services"
    }
]

const Features = () => {
    return (
        <div className="flex flex-col gap-7 lg:gap-4 md:gap-4 pl-10 slide-up">
            <h1 className='text-3xl font-bold text-secondary'>Features ↴</h1>
            <div className=" flex flex-col gap-12 lg:flex-row md:flex-row ">
                {
                    featureData.map(({ id, title, description }) => {
                        return <FeatureCard key={id} description={description} title={title} />
                    })
                }
            </div>
        </div>
    )
}

export default Features