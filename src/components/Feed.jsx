import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../Utils/FetchFromAPI";

function Feed() {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setvideos] =useState[""]

  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setvideos(data.items))

  },[selectedCategory]);
  return (
    <>
      <div className="FeedContainer"> 
        <div className="FeedSideBar">
          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>
        <div className="FeedContent">
          <h5 className="h5Feed">CopyRight 2026</h5>
        </div>
        <div className="FeedContainer">
          
            <h4 className="FeedTitle"><span className="FeedHighlight">{selectedCategory}</span></h4>
        </div>
      </div>
    </>
  );
}

export default Feed;
