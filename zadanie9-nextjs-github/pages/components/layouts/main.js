import Header from "../sections/header"
import Footer from "../sections/footer"
export default function Main( {children}) {
  return (
    <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
    </>
  )
}