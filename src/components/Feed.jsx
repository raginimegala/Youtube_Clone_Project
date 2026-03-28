import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../Utils/FetchFromAPI";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setvideos(data.items),
    );
  }, [selectedCategory]);
  return (
    <>
      <div className="FeedContainer">

        
        <aside className="FeedSideBar">
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          /><p className="h5Feed">CopyRight 2026</p>
        </aside>

        
        <main className="FeedContent">
          <span className="FeedHighlight">{selectedCategory}</span>   <span className="color">Video</span>
        </main>
        <Videos videos={videos} />
      </div>
    </>
  );
}

export default Feed;
