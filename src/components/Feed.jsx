import React from "react";
import SideBar from "./SideBar";


function Feed() {
  return (
    <>
      <div className="FeedContainer">
        <div className="FeedSideBar">
          <SideBar />
        </div>
        <div className="FeedContent">
          <h5 className="h5Feed">CopyRight 2026</h5>
        </div>
        
      </div>
    </>
  );
}

export default Feed;
