"use client"

import Link from "next/link";
import { NavBarItem } from "./NavBarItem";

export const NavBar = () => {
  return (
    <header className='flex h-200px w-full fixed left-0 top-0 z-10 px-4 justify-between'>
        <Link href="/">
          <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
              <h1 className="text-2xl font-extrabold tracking-wide">
                Viktoria Lubenets
              </h1>
          </div>
        </Link>
        <nav className="flex gap-10 flex-1 items-center justify-end" >
          <NavBarItem label="About" href={"/about"}/>
          <NavBarItem label="Projects" href={"/projects"}/>
          <NavBarItem label="Contact" href={"/contact"}/>
        </nav>
    </header>
  )
}