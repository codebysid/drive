"use client"
import { useState } from "react"
import { ClientTweetCard } from "./ClientMagicTweetCard"
import { Button } from "./ui/button"

const tweetIds = [
    "1762880293592293527", "1763145880860008631", "1763784901969768562", "1763865654611050909", "1763274818734969202", "1764573210358485364", "1763408662549176395", "1763174502484381886", "1763229676108234782", "1763175383422361908"
]

const Feedback = () => {
    const [numberOfTweetsToDisplay, setNumberOfTweetsToDisplay] = useState<number>(5)

    const expandNumberOfTweets = () => {
        console.log(numberOfTweetsToDisplay)
        setNumberOfTweetsToDisplay(() => (numberOfTweetsToDisplay < 10 ? 10 : 5))
    }
    return (
        <div className=" dott-pattern w-screen flex justify-center overflow-x-hidden">
            <div className="slide-up py-6 max-w-[1200px] space-y-7">
                <h1 className='text-3xl font-bold text-secondary px-10'>Reviews ↴</h1>
                <div className=" flex flex-row flex-wrap justify-center gap-4 lg:gap-10 md:gap-10">
                    {tweetIds.slice(0, numberOfTweetsToDisplay).map((tweetId) =>
                        <ClientTweetCard key={tweetId} id={tweetId} className=" w-[40%] text-xs h-full" />
                    )
                    }
                </div>
                <div className=" flex justify-center items-center py-10">
                    <Button variant="outline" onClick={expandNumberOfTweets}>{numberOfTweetsToDisplay == 10 ? "Collapse..." : "Expand..."}</Button>
                </div>
            </div>
        </div>
    )
}

export default Feedback