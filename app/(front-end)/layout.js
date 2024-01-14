import Navbar from "@/components/front-office/Navbar"
import { getCurrentUser } from '@/actions/getCurrentUser'

const Layout = async ({ children }) => {

  const currentUser = await getCurrentUser()
  // console.log(currentUser)


  return (
    <div>

      <div className="">
        <Navbar currentUser={currentUser} />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
