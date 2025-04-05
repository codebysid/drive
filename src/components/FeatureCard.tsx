interface IFeatureCard {
    title: string,
    description: string
}

const FeatureCard = ({ description, title }: IFeatureCard) => {
    return (
        <div className=" flex flex-col justify-around items-start gap-1 lg:gap-4 md:gap-4 px-5 h-40 flex-1 lg:flex-wrap md:flex-wrap border-l lg:border-l-0 md:border-l-0 hover:border-l-4 hover:border-l-primary/70 transition-all duration-200 last:border-r-0">
            <p className=" text-xl font-semibold">{title}</p>
            <span className=" text-white/50 text-balance">{description}</span>
        </div>
    )
}

export default FeatureCard