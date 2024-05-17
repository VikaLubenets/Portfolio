import { NavBar } from "@/components/NavBar/NavBar";
import React from "react";

type Props = {
  children: React.ReactNode
}

const MainLayout = ({children}: Props) => {
  return (
    <>
      <NavBar />
      <main className="flex justify-center items-center h-full w-full">
          {children}
      </main>
    </>
  )
}

export default MainLayout;