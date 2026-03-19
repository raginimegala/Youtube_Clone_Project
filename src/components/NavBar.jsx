import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../Utils/Constants";
import SearchBar from "./SearchBar";


function NavBar() {
  return <div className="stack-NavBar">
<Link to="/" style={{display:"flex",alignItems:"center" }}>
<img src={logo} alt="logo" height={45}/>

</Link>
<SearchBar/>

  </div>;
  
}

export default NavBar;
