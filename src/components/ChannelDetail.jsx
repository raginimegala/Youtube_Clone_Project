import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./channelCard";
import { fetchFromAPI } from "../Utils/FetchFromAPI";

function ChannelDetail() {

  const {id} = useParams();
  const [channelDetails, setChannelDetails] = useState(null)
  const [videoDetails, setVideoDetails] = useState(null)
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetails(data?.items[0]));
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideoDetails(data?.items[0]));
    
  },[id])

  return (
    <div>
     <div>
      <ChannelCard channelDetails={channelDetails} />
     </div>
     <div>
      <Videos videos={videoDetails}/>
     </div>
    </div>
            
  
  );
}

export default ChannelDetail;
