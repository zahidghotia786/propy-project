import React from "react";
import MegaDropdown from "./MegaDropdown";
import Dropdown from "./Dropdown";
import DropdownAgent from "./DropdownAgent";
import logo from "../assets/logo.png"; // Assuming you have a logo image
const Navbar = () => {
  return (
 <div className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
    <nav className="relative bg-black text-white py-7 px-8 w-full shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Propy Logo" className="" />
        </div>

        {/* Menu */}
        <div className="flex space-x-12 text-[13px] font-medium items-center">
          <MegaDropdown label="BUYER" />
          <Dropdown label="SELLER" />
          <DropdownAgent label="AGENT" />
          <a href="#" className="text-blue-500 font-medium hover:text-blue-400 transition">TITLE & ESCROW</a>
          <a href="#" className="hover:text-blue-500 font-medium transition">OPEN ESCROW</a>
          <a href="#" className="hover:text-blue-500 font-medium transition">SIGN IN</a>
        </div>
      </div>
    </nav>
 </div>
  );
};

export default Navbar;
