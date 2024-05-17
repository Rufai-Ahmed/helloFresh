import React, { FC } from "react";
import Button from "../reUsables/Button";
import { BsNewspaper } from "react-icons/bs";
import { navData } from "@/data/data";
import { iNav } from "@/services/interface";

interface iSider {
  menuOpen?: boolean;
  setMenuOpen?: (boo: boolean) => void;
}

const Sider: FC<iSider> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="transition-all duration-300 md:hidden">
      <div
        className={`w-full z-[100000] md:hidden h-screen fixed bg-[rgba(0,0,0,0.5)] cursor-pointer ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={() => setMenuOpen!(false)}
      ></div>
      <div
        className={`w-[250px] overflow-hidden flex flex-col items-center bg-white fixed h-screen py-10 z-[9999999] transition-all duration-300 ${
          menuOpen ? "left-0" : "-left-[4000px]"
        }`}
      >
        <Button text="Log in" className="w-[90%] mb-10" />

        {navData.map((el: iNav, i: number) => (
          <div
            key={i}
            className="w-full px-4 py-2 flex gap-4 cursor-pointer transition-all duration-300 hover:bg-green-200 items-center"
          >
            <BsNewspaper size={20} /> {el.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sider;
