import Link from "next/link"

export default function Header() {
  return (
    <header>Header defined in Header.js
      <nav>
      <ul>
        <li>
          <Link href="/">Index</Link>
        </li>
        <li>
          <Link href="/results">Go to Results</Link>
        </li>
      </ul>
    </nav>
    </header>
    
      )
    }