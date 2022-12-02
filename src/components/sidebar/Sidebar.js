import { useState } from "react";
import stl from "./Sidebar.module.scss";

const Sidebar = ({ list, customClass }) => {
  const openList = (id) => {
    const list = document.getElementById(id);
    list.style.width = "100%";
    list.classList.add(stl.expand);
  };

  const closeList = (id) => {
    const list = document.getElementById(id);
    list.style.width = "0";
    list.classList.remove(stl.expand);
  };

  return (
    <div className={stl.container}>
      <h2>Menu</h2>
      <div className={stl.sidebarList}>
        <ul className={stl.mainList} id="mainList">
          {list.map((option, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  console.log("index");
                  openList(index);
                }}
              >
                {option.name}
                <ul id={index} className={stl.childList}>
                  {option.list.map((opt, i) => {
                    return (
                      <li
                        key={i}
                        className={opt.class}
                        id={opt.id}
                        onClick={() => {
                          console.log(index);
                          closeList(index);
                        }}
                      >
                        {opt.name}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
