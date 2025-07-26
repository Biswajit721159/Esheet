import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Create user", "About", "Contact"];

  return (
    <nav className="bg-blue-400 text-white">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <IconButton onClick={() => setOpen(true)} className="text-white">
            <MenuIcon className="text-white" />
          </IconButton>
          <div className="text-xl font-bold">Logo</div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform transition-transform duration-300 ease-in-out z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white">
          <div className="text-lg font-bold">Menu</div>
          <IconButton onClick={() => setOpen(false)} className="bg-gray-300 hover:bg-gray-500">
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
        <div className="flex flex-col space-y-4 px-6 mt-6">
            <Link  to="/" onClick={() => setOpen(false)} className="hover:text-gray-500">
              Home
          </Link>
           <Link  to="/CreateOrganization" onClick={() => setOpen(false)} className="hover:text-gray-500">
              Create Organization
          </Link>
          <Link  to="/Organizations" onClick={() => setOpen(false)} className="hover:text-gray-500">
              Organizations
          </Link>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
