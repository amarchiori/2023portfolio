import NavBar from './nav'
import Footer from './footer'

function Layout({children}) {
  return (
    <>
    <NavBar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout