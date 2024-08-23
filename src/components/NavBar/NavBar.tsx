"use client"

import Link from "next/link";
import { NavBarItem } from "./NavBarItem";

export const NavBar = () => {
  return (
    <header className='flex h-200px w-full fixed left-0 top-0 z-10 px-4 justify-between'>
        <Link href="/">
          <div className="mt-5 ml-1 p-3 mb-4 flex items-center gap-x-3 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-extrabold tracking-wide blue-gradient_text">
              Viktoria Lubenets
            </h1>
          </div>
        </Link>
        <nav className="flex gap-10 flex-1 items-center justify-end" >
          <NavBarItem label="About" href={"/about"}/>
          <NavBarItem label="Projects" href={"/projects"}/>
          <NavBarItem label="Contact" href={"/contact"}/>
          <NavBarItem label="Main" href={"/main"}/>
        </nav>
    </header>
  )
}