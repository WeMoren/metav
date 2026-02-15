import React, { useEffect } from "react";

const SideNav = ({ openMenu, setOpenMenu }) => {
  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
  }, [openMenu]);

  const links = [
    { id: "hero", label: "Home" },
    { id: "places", label: "Place to Stay" },
    { id: "NFTs", label: "NFTs" },
    { id: "community", label: "Communities" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpenMenu(false);
  };

  return (
    <>
      {openMenu && (
        <div className="menu-overlay" onClick={() => setOpenMenu(false)} />
      )}

      <div className={`mobile-menu ${openMenu ? "show" : ""}`}>
        {links.map((link) => (
          <button
            key={link.id}
            className="mobile-link"
            onClick={() => handleScroll(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default SideNav;
