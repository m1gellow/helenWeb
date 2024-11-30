"use client";
import { pageConfig } from "../app/page.config";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <nav className="flex-center bg-white border-b fixed z-50 top-0 w-full py-10">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-4 ">
        <h1 className="font-poppins font-bold text-3xl">Logo</h1>

        <ul className=" hidden lg:flex-center body-text xl:gap-[60px] lg:gap-[40px] ">
          <li>
            <Link href={pageConfig.home}>Домой</Link>
          </li>
          <li>
            <Link href={pageConfig.home}>О нас</Link>
          </li>
          <li>
            <Link href={pageConfig.home}>Услуги</Link>
          </li>
          <li>
            <Link href={pageConfig.home}>Проекты</Link>
          </li>
          <li>
            <Link href={pageConfig.home}>Резюме</Link>
          </li>
          <li>
            <Link href={pageConfig.home}>Блог</Link>
          </li>
          <li>
            <Link href={pageConfig.home}>Контакты</Link>
          </li>
        </ul>
        <div className="lg:hidden flex-center flex-col ">
          <button onClick={handleOpenMenu}>
            <Menu size={47} color={"#4CAF50"} className="icons" />
          </button>
        </div>

        <Button
          className="lg:flex-center hidden"
          onClick={() => console.log("click")}
        >
          Связаться
        </Button>
      </div>
      {isOpen && (
        <div className="mobileMenu ">
          <div className="flex justify-end p-4">
            <button onClick={handleOpenMenu} className="text-xl">
              <X color={"#4CAF50"} size={47} />
            </button>
          </div>
          <ul className="flex flex-col text-3xl gap-[40px]  items-center mt-10 space-y-4">
            <li>
              <Link href={pageConfig.home}>Домой</Link>
            </li>
            <li>
              <Link href={pageConfig.home}>О нас</Link>
            </li>
            <li>
              <Link href={pageConfig.home}>Услуги</Link>
            </li>
            <li>
              <Link href={pageConfig.home}>Проекты</Link>
            </li>
            <li>
              <Link href={pageConfig.home}>Резюме</Link>
            </li>
            <li>
              <Link href={pageConfig.home}>Блог</Link>
            </li>
            <li>
              <Link href={pageConfig.home}>Контакты</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
