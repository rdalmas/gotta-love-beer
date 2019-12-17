import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/beer-list">Beer List</Link>
      </li>
      <li>
        <Link to="/beer-roulete">Beer Roulete</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Sidebar;