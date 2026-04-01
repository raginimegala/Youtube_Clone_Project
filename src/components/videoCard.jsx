import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle, demoChannelUrl,demoChannelTitle } from '../Utils/Constants'

function VideoCard({video : {id:{videoId}, snippet}}) {
    return (
        <>
        <div className='videoDetail'>
            <Link to="{videoId? '/video/${videoId}' : demoVideourl}"></Link>
            <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title}/>

            <div>
            <Link to="{videoId? '/video/${videoId}' : demoVideourl}"></Link>
             </div>   

        </div>
        <div>
           
            <div>
                {snippet.title?.slice(0,60) || demoVideoTitle.slice(0,60)}
            </div>
        <div>
            <Link to="{snippet.channelId? '/channel/${snippet.channelId}' : demoChannelUrl}"></Link>
            {snippet.channelTitle || demoChannelTitle}
        
            </div>
        </div>    

        </>
    )
}

export default VideoCard
