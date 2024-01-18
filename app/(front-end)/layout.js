import Navbar from "@/components/front-office/Navbar"
import { getCurrentUser } from '@/actions/getCurrentUser'
import { Footer } from "@/components/front-office/Footer"

const Layout = async ({ children }) => {

  const currentUser = await getCurrentUser()
  // console.log(currentUser)


  return (
    <div>


      <Navbar currentUser={currentUser} />
      <main>{children}</main>
      <Footer />

    </div>
  )
}

export default Layout
