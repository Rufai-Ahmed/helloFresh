"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../asset/Hello_Fresh_Lockup.png";
import { FaAngleDown } from "react-icons/fa";
import { iNav, iNavDrop } from "@/services/interface";
import Button from "../reUsables/Button";
import { navData } from "@/data/data";
import { BiMenu } from "react-icons/bi";
import Sider from "./Sider";

const Header = () => {
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(
    null
  );

  const handleMouseEnter = (index: number) => {
    setActiveDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdownIndex(null);
  };

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      {menuOpen && <Sider menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
      <div className="w-full items-center justify-center flex h-[50px] bg-white shadow-md fixed z-50 ">
        <div className="xl:w-[96%] w-full h-full flex gap-5 items-center justify-between">
          <div
            className="xl:hidden h-full flex items-center justify-center w-16 transition-all duration-300 cursor-pointer hover:bg-green-400"
            onClick={() => setMenuOpen(true)}
          >
            <BiMenu size={30} />
          </div>
          <div className="flex items-center gap-5">
            <Image src={logo.src} alt="logo" width={100} height={100} />

            <div className="xl:flex items-center hidden h-full">
              {navData.map((el: iNav, i: number) => (
                <nav
                  key={i}
                  className="text-[15px] transition-all duration-300 hover:bg-green-100 hover:text-green-700 px-4 h-[50px] cursor-pointer flex font-semibold items-center gap-1 relative"
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>{el.text}</div>
                  {el.dropDown && <FaAngleDown size={20} />}

                  {activeDropdownIndex === i && el.dropDown && (
                    <div className="absolute z-50 top-full mt-1 left-0 bg-white w-[250px] shadow-md rounded-md">
                      {el.dropDown.map((el: iNavDrop, j: number) => (
                        <div
                          key={j}
                          className="hover:bg-green-300 py-3 px-5 transition-all duration-300"
                        >
                          {el.text}
                        </div>
                      ))}
                    </div>
                  )}
                </nav>
              ))}
            </div>
          </div>

          <div className="block xl:hidden" />

          <Button className="hidden xl:block" text="Log in" />
        </div>
      </div>
    </>
  );
};

export default Header;
