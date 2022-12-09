import React from "react";
import { Svgs } from "assets/images/svgs";
import MenuItems from "components/shared/MenuItems";
import "./styles/_base.css";
import logo from "assets/images/organlogo.png";
const SideBar = () => {
  return (
    <div className=" sideBar-parrent d-flex flex-column align-items-center justify-content-between">
      <div className="w-100 mt-5 pt-4 dashboard-menu">
        <ul className=" px-4 ">
          <MenuItems href="/" text="داشبورد" icons={Svgs.dashboard} />
          <MenuItems
            href="/students"
            text="لیست دانشجویان"
            icons={Svgs.users}
          />
          <MenuItems
            href="/cartable"
            text="ارسال پیام در کارتابل"
            icons={Svgs.message}
          />
          <MenuItems href="/" text="نقشه دانشگاه" icons={Svgs.map} />
          <MenuItems href="/" text="بنرها و تبلیغات" icons={Svgs.banner} />
        </ul>
      </div>

      <div className="logo-pic">
        <img src={logo} alt="logo" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default SideBar;
