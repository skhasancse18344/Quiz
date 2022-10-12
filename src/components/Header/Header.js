import React from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-around text-white bg-zinc-600">
      <div>
        <h1 className="text-4xl font-bold">Quiz</h1>
      </div>
      <div
        className={`flex flex-col md:flex-row  md:static absolute duration-500 ease-in bg-zinc-600 p-5 ${
          open ? "top-11 left-6" : "top-[-120px]"
        }`}
      >
        <NavLink className="mr-10" to="/">
          Topic
        </NavLink>
        <NavLink className="mr-10" to="/statistics">
          Statistics
        </NavLink>
        <NavLink className="mr-10" to="/blog">
          Blog
        </NavLink>
      </div>
      <div onClick={() => setOpen(!open)} className="h-6 w-6  md:hidden">
        {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon />}
      </div>
    </div>
  );
};

export default Header;
