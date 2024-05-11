"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { menuItems } from "../api/data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const [activeItem, setActiveItem] = useState(null); // State to manage active item

  const handleItemClick = (index) => {
    setActiveItem(index); // Set active item on click
    closeMenu(); // Assuming closeMenu is a function to close the menu
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1279);
    };

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`header sticky bg-primary top-0 z-[99] after:absolute after:md:inline-block after:hidden after:content-[''] after:bg-[url('/images/header-line.png')] after:bg-no-repeat after:bg-contain after:top-[99%] after:w-full after:h-full ${
        isMenuOpen ? "menu-open" : ""
      } ${
        isSticky ? "header-sticky header_shadow bg-primary dark:bg-black" : ""
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {isMenuOpen && isMobile && (
            <span
              className="overlay bg-black opacity-60 fixed inset-0 z-50"
              onClick={closeMenu}
            ></span>
          )}
          {/* <Link href="/" className="sm:w-[10rem] w-[7.5rem] block">
            <Image
              src="/icon/logo.svg"
              alt="logo"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
            />
          </Link> */}
          <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
            <div className="navigation-inner transition-all duration-500 lg:static fixed h-full lg:bg-transparent bg-white right-0 top-0 z-[999] lg:w-[calc(1000px_-_-150px)] sm:w-[calc(400px_-_45px)] w-[calc(100%_-_60px)] lg:translate-x-0 translate-x-full">
              <div className="flex lg:hidden p-3 items-center justify-between">
                <span className="font-semibold text-xl">Menu</span>
                <span
                  className="block w-10 h-10 cursor-pointer z-[999] relative"
                  onClick={closeMenu}
                >
                  <i className="rotate-45 w-6 h-[0.125rem] bg-black inline-block absolute top-1/2 left-[25%]"></i>
                  <i className="-rotate-45 w-6 h-[0.125rem] bg-black inline-block absolute top-1/2 left-[25%]"></i>
                </span>
              </div>
              <ul className="lg:flex block lg:items-center justify-between bg-white lg:bg-transparent items-start lg:gap-0 gap-8 overflow-auto flex-wrap">
                {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <li className="lg:border-0 border-b border-border border-solid mx-4">
                      <Link
                        href={item.href}
                        className={`md:text-white text-black dark:text-CeruleanBlue dark:hover:text-primary text-17 font-normal lg:w-full w-fit inline-block transition-all duration-500 py-2 ${
                          activeItem === index
                            ? "border-primary text-yellow"
                            : "border-transparent"
                        } hover:text-yellow active:text-yellow`}
                        onClick={() => handleItemClick(index)}
                      >
                        {item.name}
                      </Link>
                    </li>
                    {index === Math.floor(menuItems.length / 3) && ( // Add image after the middle menu item
                      <li className="flex items-center">
                        <Link
                          href="/"
                          className="sm:w-[10rem] w-[7.5rem] block"
                        >
                          <Image
                            src="/icon/logo.svg"
                            alt="logo"
                            width={0}
                            height={0}
                            layout="responsive"
                            quality={100}
                            sizes="100vh"
                          />
                        </Link>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <span
              id="mobiletoggle"
              className={`w-[1.875rem] h-[1.5rem] relative flex lg:hidden cursor-pointer items-center flex-wrap ${
                isMenuOpen ? "active" : ""
              }`}
              onClick={toggleMenu}
            >
              <i className="bg-white relative transition-all duration-500 w-full h-[0.125rem]"></i>
              <i className="bg-white relative transition-all duration-500 w-full h-[0.125rem]"></i>
              <i className="bg-white relative transition-all duration-500 w-full h-[0.125rem]"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
