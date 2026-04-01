import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../Utils/Constants'

function ChannelCard({channelDetail}) {
    return (
        <>
        <div>
             <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <img src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} />
      </Link>

      <h6>{channelDetail?.snippet.title}</h6>
      {channelDetail?.statistics?.subscriberCount && (
        <p>{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers</p>
      )}
         </div>   
        </>
    )
}

export default ChannelCard
