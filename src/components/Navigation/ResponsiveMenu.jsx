import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ResponsiveMenu = ({ showMenu, NavLinks }) => {
  return (
    <div
      className={`${showMenu ? "left-0" : "-left-full"} fixed top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300`}
    >
      <div>
        {/* User Info */}
        <div className='flex items-center gap-3 mb-8'>
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className='text-sm text-gray-500 dark:text-gray-400'>Premium User</h1>
          </div>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className='space-y-6 text-xl font-medium'>
            {NavLinks.map((data) => (
              <li key={data.id}>
                <a href={data.link} className='block hover:text-primary transition-all'>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className='text-sm text-center'>
        Made with ❤️ by <a href="https://github.com/mdkhalidgithub" className='underline'>MD KHALID</a>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
