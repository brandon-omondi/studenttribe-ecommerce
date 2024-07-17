import React from "react";

interface VideoCardProps{
    coverUrl: string;
    topic: string;
    videoTitle: string;
    coachSnapshotUrl: string;
    coachName: string;
    coachTitle: string;
}
const VideoCard: React.FC <VideoCardProps> = ({coverUrl,topic,videoTitle,coachSnapshotUrl,coachName,coachTitle}) =>{
    return(
        <>
            <div className="w-[350px] h-[260px] px-2 bg-zinc-800 rounded-[20px] shadow flex-col justify-center items-start inline-flex mb-5">
                <div className="flex mt-2 mb-2"><img src={coverUrl} alt="" /></div>
                <div className="w-[76px] h-[15px] p-3 bg-amber-500 bg-opacity-20 rounded-xl justify-center items-center gap-2.5 inline-flex mb-2">
                    <div className="text-zinc-100 text-[8px] font-normal font-['Inter'] uppercase">{topic}</div>
                </div>
                <div className="w-[350px] text-zinc-100 text-sm font-medium font-['Inter'] capitalize mb-2">{videoTitle}</div>

                {/* Progress Bar */}
                <div className="w-[320px] h-1.5 justify-center items-center inline-flex mb-2">
                    <div className="w-[320px] h-1.5 relative">
                        <div className="w-[320px] h-1.5 left-0 top-0 absolute bg-zinc-300 rounded-[50px]"></div>
                        <div className="w-[180px] h-1.5 left-0 top-0 absolute bg-amber-500 bg-opacity-75 rounded-[50px]"></div>
                    </div>
                </div>

                {/* Coach Details */}
                <div className="flex gap-2">
                    <div className="Left w-8 h-8"><img src={coachSnapshotUrl} alt="" className="rounded-full w-8 h-8"/></div>
                    <div className="Right">
                        <div className="text-zinc-100 text-[12px] font-medium font-['Inter']">{coachName}</div>
                        <div className="text-zinc-100 text-[10px] font-normal font-['Inter']">{coachTitle}</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default VideoCard