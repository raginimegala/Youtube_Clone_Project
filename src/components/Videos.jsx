import React from 'react'
import VideoCard from './videoCard'
import ChannelCard from './channelCard'

function Videos({videos}) {

    console.log(videos)
    return (
        <>
        <div>
            {videos.map((item, index)=>(
                <div key={index}>
                    {item.id.videoId && <VideoCard video={item}/>}
                    {item.id.channelId && <ChannelCard channelDetail={item}/>}
                </div>
            ))}        
            </div>
      
        </>
    )
}

export default Videos
