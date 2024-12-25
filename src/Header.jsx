import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeMegaMenu from "./HomeMegaMenu/HomeMegaMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="pb-3 bg-gray-400 lg:pb-0 text-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link to="#" title="" className="flex">
                <img
                  className="w-auto h-8 lg:h-10"
                  src="https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/03/codebrew-black-logo.webp"
                  alt=""
                />
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              <Link
                to="/"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                onMouseMove={HomeMegaMenu}
              >
                <div className="flex items-center space-x-2 text-white">
                  <div>Home</div>
                  <img src="icon.png" alt="Icon" className="w-4 h-4" />
                </div>
              </Link>

              <Link
                to="/solutions"
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 " 
              >
                Solutions
              </Link>

              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to="/resources"
                  className="text-base font-medium  transition-all duration-200 hover:text-blue-600 focus:text-blue-600 text-white"
                >
                  Resources
                </Link>
                {isOpen && (
                  <div className="absolute left-0 mt-2 space-y-2 bg-white shadow-lg rounded- p-4 w-96 h-72">
                    <Link
                      to="/resource-1"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                    >
                      Option 1
                    </Link>
                    <Link
                      to="/resource-2"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 2
                    </Link>
                    <Link
                      to="/resource-3"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 3
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/pricing"
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                Pricing
              </Link>
            </div>

            <Link
              to="#"
              title=""
              className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              Get started now
            </Link>
          </nav>

          {isMegaMenuOpen && (
        <HomeMegaMenu /> 
      )}

         
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <Link
                  to="/home"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Home
                </Link>

                <Link
                  to="/solutions"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Solutions
                </Link>

                <Link
                  to="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Resources
                </Link>

                <Link
                  to="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Pricing
                </Link>
              </div>
            </div>

            <div className="px-6 mt-6">
              <Link
                to="#"
                title=""
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                Get started now
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
