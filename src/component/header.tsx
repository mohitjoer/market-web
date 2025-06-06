import { Button } from "./ui/button"
import Link from 'next/link'

function Header() {
  return (
    <div className="bg-black z-10 flex flex-col sm:flex-row justify-between items-center text-white p-4">
      <div className="mb-4 sm:mb-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">your spot</h1>
      </div>
      <nav>
        <ul className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          <li>
            <Link href="/">
              <Button className="header-button text-sm sm:text-base" variant="outline">
                Home
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <Button className="header-button text-sm sm:text-base" variant="outline">
                About
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <Button className="header-button text-sm sm:text-base" variant="outline">
                Contact
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header