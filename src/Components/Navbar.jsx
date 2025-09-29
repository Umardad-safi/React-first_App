import React, { useState } from "react";
import { close, logo, menu } from "../assets/images";
import { navLinks } from "../Constants/index";
export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center">
      <img src={logo} alt="" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => {
          return (
            <li
              key={nav.id}
              className={`font-normal font-poppins text-[16px] cursor-pointer ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>

      {/* Mobile menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt=""
          className="w-[28px] h-[28px] cursor-pointer object-contain"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <div
          className={`${
            toggle ? "scale-y-100" : "scale-y-0"
          } p-6 bg-black-gradient absolute top-20 left-0 mx-2  min-w-[140px] rounded-b-xl sidebar z-50  transform transition-transform duration-500  origin-top  `}>
          <ul className="list-none flex-col justify-end flex-1 items-center">
            {navLinks.map((nav, index) => {
              return (
                <li
                  className={`${
                    index === navLinks.length - 1 ? "mr-0" : "mr-10"
                  } ${active === nav.title ? "text-white " : "text-dimWhite"}`}
                  onClick={() => {
                    setActive(nav.title);
                  }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
