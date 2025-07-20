import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Services", "About", "Contact"];

  return (
    <nav className="bg-orange-500 text-white">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <IconButton onClick={() => setOpen(true)} className="text-white">
            <MenuIcon />
          </IconButton>
          <div className="text-xl font-bold">Logo</div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-orange-500 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-orange-500">
          <div className="text-lg font-bold">Menu</div>
          <IconButton onClick={() => setOpen(false)} className="text-white bg-gray-200 hover:bg-slate-200">
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
        <div className="flex flex-col space-y-4 px-6 mt-6">
          {links.map((link) => (
            <a key={link} href="#" onClick={() => setOpen(false)} className="hover:text-orange-200">
              {link}
            </a>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
