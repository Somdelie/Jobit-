import Navbar from "@/components/front-office/Navbar"


const Layout = ({ children }) => {



  return (
    <div>

      <div className="h-screen flex items-center justify-center">

        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
