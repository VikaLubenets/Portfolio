import { NavBar } from "@/components/NavBar/NavBar";

type Props = {
  children: React.ReactNode
}

const MainLayout = ({children}: Props) => {
  return (
    <>
    <main>
      <div>
        <NavBar />
        {children}
      </div>
    </main>
    </>
  )
}

export default MainLayout;