import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import { fetchFromAPI } from "../Utils/FetchFromAPI";
import { useParams } from "react-router-dom";

function SearchFeed() {
  
  const [videos, setvideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setvideos(data.items),
    );
  }, []);
  return (
    <>
      <div className="FeedContainer">
   
         
        <main className="FeedContent">
          <span className="FeedHighlight">Search result for</span>{searchTerm}<span className="color">Video</span>
        </main>
        <Videos videos={videos} />
      </div>
    </>
  );
}

export default SearchFeed;
