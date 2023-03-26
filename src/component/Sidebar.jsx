import React, { useState } from "react";

function Sidebar() {
  const [close, setClose] = useState(false);

  function handleClick() {
    setClose((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <nav id="sidebar" className={close ? "active": null}>
      <div className="custom-menu">
        <button type="button" id="sidebarCollapse" onClick={handleClick} className="btn btn-primary">
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <div className="p-4">
        <h1>
          <a href="index.html" className="logo">
            KeepUp
          </a>
        </h1>
        <ul className="list-unstyled components mb-5">
          <li className="active">
            <a href="#">
              <span className="fa fa-pencil-square-o mr-3"></span> Note
            </a>
          </li>
          <li className="active">
            <a href="#">
              <span className="fa fa-list-ul mr-3"></span> To-do List
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
