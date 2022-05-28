export default function Main( {children}) {
  return (
    <>
    <header>Header defined in main.js layout</header>
    <main>
      {children}
    </main>
    <footer>Footer defined in main.js layout</footer>
    </>
  )
}