import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
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