"use client"

import Link from "next/link";
import Image from "next/image"

type Props = {
  label: string;
  href: string;
}

export const NavBarItem = ({
  label, 
  href
}: Props) => {

  return (
    <div className="justify-start">
      <Link href={href} className="flex items-center justify-center">
        {label}
      </Link>
    </div>
  )
}