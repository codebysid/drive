import { Tweet } from "react-tweet";
import { TweetCard } from "./MagicTweetCard";
import { CSSProperties } from "react";

interface IExamples {
    scrollData: string[];
    scrollDirection: "left" | "right";
}

const InfiniteTweetCardScroll = ({ scrollData, scrollDirection }: IExamples) => {
    const styles = {
        left: `scroll-content-left`,
        right: `scroll-content-right`,
    };
    return (
        <>
            <div className="w-full flex gap-10 items-start justify-start overflow-hidden relative after:absolute after:bg-black after:h-full after:w-[1px] after:shadow-[0px_10px_100px_100px_#000] before:absolute before:bg-black before:h-full before:w-[1px] before:shadow-[0px_10px_100px_100px_#000] before:z-10 before:right-0" >
                <div className={`flex gap-10 w-full justify-end items-start ${styles[scrollDirection]}`}>
                    {scrollData &&
                        scrollData.map((tweetId) => (
                            <div key={tweetId}>
                                <TweetCard id={tweetId} className=" w-[380px]" />
                                {/* <div className=" lg:hidden md:hidden">
                                    <Tweet id={tweetId} />
                                </div> */}
                            </div>
                        ))}
                </div>
                <div className={`flex gap-10 w-full justify-start items-start ${styles[scrollDirection]}`}>
                    {scrollData &&
                        scrollData.map((tweetId) => (
                            <div key={tweetId}>
                                <TweetCard id={tweetId} className="w-[400px]" />
                                {/* <div className=" lg:hidden md:hidden">
                                    <Tweet id={tweetId} />
                                </div> */}
                            </div>
                        ))}
                </div>
            </div>

            {/* <div className="w-full gap-10 justify-start overflow-hidden relative after:absolute after:bg-black after:h-full after:w-[1px] after:shadow-[0px_10px_100px_100px_#000] before:absolute before:bg-black before:h-full before:w-[1px] before:shadow-[0px_10px_100px_100px_#000] before:z-10 before:right-0 flex">
                <div className={`flex gap-10 w-full justify-start items-start ${styles[scrollDirection]}`}>
                    {scrollData &&
                        scrollData.map((tweetId) => (
                            <Tweet key={tweetId} id={tweetId} />
                        ))}
                </div>
                <div className={`flex gap-10 w-full justify-start items-start ${styles[scrollDirection]}`}>
                    {scrollData &&
                        scrollData.map((tweetId) => (
                            <Tweet key={tweetId} id={tweetId} />
                        ))}
                </div>
            </div> */}

        </>
    );
};

export default InfiniteTweetCardScroll;