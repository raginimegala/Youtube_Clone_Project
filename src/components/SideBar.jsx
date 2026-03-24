import React from "react";
import { categories } from "../Utils/Constants";



function SideBar({selectedCategory,setSelectedCategory}) {
  return (
    <div className="SideBar-Stack">
      {categories.map((category) => (
        <button className="category-btn" onClick={()=>setSelectedCategory(category.name)}
        style={{background: category.name=== selectedCategory && "#FC1503", color:"white"}}>
          <span style={{color: category.name === selectedCategory ? "white" : "red" , marginRight:"15px"}}>{category.icon}</span>
          <span style={{opacity:category.name === selectedCategory? 1:
            0.8}}>{category.name}</span>
        </button>
      ))}
    </div>
  );
}

export default SideBar;
