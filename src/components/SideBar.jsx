import React from "react";
import { categories } from "../Utils/Constants";

function SideBar() {
  return (
    <div className="SideBar-Stack">
      {categories.map((category) => (
        <button className="category-btn">
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}

export default SideBar;
