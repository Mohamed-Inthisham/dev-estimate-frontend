import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/SidebarLogo.jpg";
import {
  BsArrowLeftShort,
  BsClipboardPulse,
  BsFillPersonLinesFill,
} from "react-icons/bs";

function SideBar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Projects", icon: <BsFillPersonLinesFill />, path: "/projects" },
    { title: "Automation Docs", icon: <BsClipboardPulse />, path: "/docs" },
  ];

  return (
    <div className={`min-h-screen bg-[#020617] p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
      <BsArrowLeftShort
        className={`bg-white text-3xl rounded-full absolute -right-3 top-9 border border-[#172554] cursor-pointer ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex items-center">
        <img
          src={logo}
          alt="sidebar_logo"
          className={`rounded-full object-cover object-left block float-left mr-2 duration-500 ${open ? "h-15 w-20" : "h-8 w-8"}`}
        />
        <h1
          className={`text-white font-sideName origin-left font-medium text-xl mt-4 duration-300 ${!open && 'scale-0'} font-bebas-neue`}
        >
          DEV ESTIMATE
        </h1>
      </div>
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <li
            key={index}
            className="text-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#ffffff] hover:bg-opacity-10 rounded-md mt-2"
          >
            <Link to={menu.path} className="flex items-center gap-x-4">
              <span className="text-2xl">
                {menu.icon}
              </span>
              <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                {menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
