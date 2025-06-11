import React, { useState } from 'react';
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';

import ResponsiveMenu from "./ResponsiveMenu.jsx";

const NavLinks = [
  { id: "1", name: "HOME", link: "/#" },
  { id: "2", name: "CARS", link: "/#cars" },
  { id: "3", name: "ABOUT", link: "/#about" },
  { id: "4", name: "BOOKING", link: "/#booking" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className='shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40'>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className='text-3xl font-bold font-serif'>CarRental</h1>

          {/* Desktop Menu */}
          <ul className='hidden md:flex items-center gap-8'>
            {NavLinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className='py-4 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium'
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle & Mobile Menu Icon */}
          <div className="flex items-center gap-4">
            {theme === "dark" ? (
              <BiSolidSun onClick={() => setTheme("light")} className='text-2xl cursor-pointer' />
            ) : (
              <BiSolidMoon onClick={() => setTheme("dark")} className='text-2xl cursor-pointer' />
            )}
            {/* Mobile Menu Icon */}
            <div className='md:hidden'>
              {showMenu ? (
                <HiMenuAlt1 onClick={toggleMenu} size={30} className='cursor-pointer transition-all' />
              ) : (
                <HiMenuAlt3 onClick={toggleMenu} size={30} className='cursor-pointer transition-all' />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <ResponsiveMenu showMenu={showMenu} NavLinks={NavLinks} />
    </nav>
  );
};

export default Navbar;
