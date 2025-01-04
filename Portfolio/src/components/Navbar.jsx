import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  return (
    <header className="bg-slate-400 w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 ">
        <nav className="flex flex-col md:flex-row md:justify-between   py-3">
          {/* Logo */}
          <div className="font-bold text-2xl text-stone-50">
            Mittapalli Praneeth
          </div>

          {/* Menu Icon for Small Screens */}
         

          {/* Menu Links */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex md:items-center mt-4 md:mt-0`}
          >
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4  md:items-center items-center ">
              <li className="text-xl text-stone-50 cursor-pointer hover:text-zinc-700 hover:font-bold hover:border-2 hover: border-indigo-500/100 hover:rounded-full
               hover:min-w-fit md:p-1 p-1 hover:bg-slate-200"><a href="#home">Home</a></li>
              <li className="text-xl text-stone-50 cursor-pointer hover:text-zinc-700 hover:font-bold hover:border-2 hover: border-indigo-500/100 hover:rounded-full
               hover:min-w-fit md:p-1 p-1 hover:bg-slate-200 "><a href="#about">About</a></li>
              <li className="text-xl text-stone-50 cursor-pointer hover:text-zinc-700 hover:font-bold hover:border-2 hover: border-indigo-500/100 hover:rounded-full
               hover:min-w-fit md:p-1 p-1 hover:bg-slate-200"><a href="#projects">Projects</a></li>
              <li className="text-xl text-stone-50 cursor-pointer hover:text-zinc-700 hover:font-bold hover:border-2 hover: border-indigo-500/100 hover:rounded-full
               hover:min-w-fit md:p-1 p-1 hover:bg-slate-200 "><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className=" absolute md:hidden flex justify-end w-full right-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 text-stone-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
