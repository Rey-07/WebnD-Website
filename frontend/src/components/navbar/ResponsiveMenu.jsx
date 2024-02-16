import React from "react";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } h-screen w-[75%] bg-my-custom-grey2 fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between text-my-custom-grey4`}
    >
      <div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li className="hover:text-my-custom-yellow">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-my-custom-yellow">
              <a href="#">About</a>
            </li>
            <li className="hover:text-my-custom-yellow">
              <a href="#">Events</a>
            </li>
            <li className="hover:text-my-custom-yellow">
              <a href="#">Team</a>
            </li>
            <li className="hover:text-my-custom-yellow">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>© 2024 All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
