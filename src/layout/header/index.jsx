import { Svgs } from "assets/images/svgs";
import React from "react";
import "./styles/_base.css";

const Header = () => {
  return (
    <div className="d-flex justify-content-between p-4 header-parents">
      <span className="fw-bold">سامانه مدیریت دانشگاهی</span>
      <button className="bg-transparent border-0">
        {Svgs.exit}
        <span className="ps-2 text-secondary">خروج</span>
      </button>
    </div>
  );
};

export default Header;
