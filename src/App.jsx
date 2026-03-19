import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="Box-App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
