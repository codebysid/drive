import Image from "next/image"

const ProjectDashboardShowcase = () => {
    return (
        <div className="relative w-[90vw] lg:w-[95vw] md:w-[95vw] h-[80vh] rounded-2xl slide-up">
            <Image src="/next-drive-ss-canvas-2.png" alt="Next Drive Dashboard"
                className=" absolute object-contain" sizes="100vw" fill />
        </div>
    )
}

export default ProjectDashboardShowcase