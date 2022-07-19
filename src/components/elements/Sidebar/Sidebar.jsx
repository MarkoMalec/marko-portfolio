import React from "react";
import { slide as Test } from "react-burger-menu";
import './Sidebar.scss';

const Sidebar = (props) => {
  return (
    <Test>
      <li>
        <a className="menu-item" href="/">
          Introduction
        </a>
      </li>
      <li>
        <a className="menu-item" href="/Skills">
          Skills
        </a>
      </li>
      <li>
        <a className="menu-item" href="/Projects">
          Projects
        </a>
      </li>
      <li>
        <a className="menu-item" href="/Contact">
          Contact
        </a>
      </li>
    </Test>
  );
};

export default Sidebar;
