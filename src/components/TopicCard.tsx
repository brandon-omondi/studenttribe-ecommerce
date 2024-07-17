import React from "react";

interface TopicCardProps{
    watched: string;
    topicName: string;
}
const TopicCard: React.FC <TopicCardProps>= ({watched, topicName}) => {
    return(
        <div className="w-[350px] h-16 p-3 bg-zinc-800 rounded-xl shadow justify-around items-center gap-[17px] inline-flex">
            <div className="p-3 bg-amber-500 opacity-20 rounded-[50px] justify-center items-center gap-2.5 flex">
                <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative">
                        <img src="https://i.postimg.cc/SXz9zt5T/notification.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-100 text-xs font-normal font-['Inter']">{watched} Watched</div>
                <div className="self-stretch text-zinc-100 text-xs font-semibold font-['Inter']">{topicName}</div>
            </div>
            <div className="w-6 h-6 origin-top-left justify-center items-center flex">
                <div className="w-6 h-6 relative">
                    <img src="https://i.postimg.cc/MM7j9fz1/more.png" alt="" />
                </div>
            </div>
    </div>
    )
}

export default TopicCard