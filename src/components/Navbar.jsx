import React, { useState } from "react";
import { MenuIcon, X, Search } from "lucide-react";
import SideNav from "./SideNav";
import Modal from "./Modal";
import Logo from "../assets/images/logo.png";
import WhiteLogo from "../assets/images/white-logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="navbar">
      <div className="navimgs">
        <div onClick={() => setOpenMenu(!openMenu)} className="hamburger">
          {openMenu ? (
            <X className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>

        <img src={Logo} alt="Logo-colored" className="navlogo-colored" />
        <img src={WhiteLogo} alt="Logo-white" className="navlogo-white" />
      </div>

      <ul className="navlist">
        <a href="#hero" className="active">
          Home
        </a>
        <a href="#places">Place to Stay</a>
        <a href="#NFTs">NFTs</a>
        <a href="#community">Community</a>
      </ul>

      <button className="navbtn" onClick={() => setOpenModal(true)}>
        Connect wallet
      </button>

      {/* ✅ THIS OPENS MODAL */}
      <div className="mobile-nav-search" onClick={() => setOpenModal(true)}>
        <button className="search-btn">Connect wallet</button>
        <span className="pipe"></span>
        <Search className="search-icon" />
      </div>

      {/* ✅ MODAL */}
      <Modal open={openModal} setOpenModal={setOpenModal} />

      {/* ✅ SIDENAV */}
      <SideNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
};

export default Navbar;
