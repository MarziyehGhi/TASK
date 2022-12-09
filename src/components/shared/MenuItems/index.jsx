import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ icons, text, href }) => {
  return (
    <li className="mb-4">
      <Link to={href || "#"}>
        {icons}
        <span className="px-2">{text}</span>
      </Link>
    </li>
  );
};

export default MenuItems;
