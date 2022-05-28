import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
export default function Main( {children}) {
  return (
    <div className="container mx-auto">
    <Header />
    <main className="my-24 w-2/6 mx-auto">
      {children}
    </main>
    <Footer />
    </div>
  )
}