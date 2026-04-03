import React from "react";
import { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import { fetchFromAPI } from "../Utils/FetchFromAPI";


function VideoDetail()
{
  const {id} = useParams()
  const [videoDetails, setVideoDetails] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(()=>{fetchFromAPI(`videos?part=snippet&id=${id}`).then((data) => setVideoDetails(data.items[0]))
    fetchFromAPI(`search?part=snipper&relateedToVideoId=${id}&type=video`).then((data) => setVideoDetails(data.items))
},[id])

  if(!videoDetails?.snippet) return "Loading..."

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;
  return (
    <>
      <div><ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
      {title}
      </div>
      <div>
        <Link to ={`/channel/${channelId}`}>{channelTitle}</Link>
       </div>
       <div>
        {parseInt(viewCount).toLocaleString()} views
        {parseInt(likeCount).toLocaleString()} likes
       </div> 

       <div>
        <Videos videos={videos} direction ="column"/>
        </div>
    </>
  );
}

export default VideoDetail;
