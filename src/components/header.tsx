import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
import Link from 'next/link'

function Header() {
  return (
    <div className="bg-black z-10 flex flex-col sm:flex-row justify-between items-center border-b-1 border-neutral-500 text-white p-4">
      <Link href="/">
      <div className="mb-4 sm:mb-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">your spot</h1>
      </div>
      </Link>
      <nav>
        <ul className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          <li>
            <Link href="/startpage">
              <Button className="header-button text-sm sm:text-base" variant="outline">
                Get Started
              </Button>
            </Link>
          </li>
          <li  className="flex items-center align-middle ">
            <SignedOut>
              <SignInButton>
                <Button variant="outline" className=" border-2 sm:border-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold bg-black text-sm sm:text-base">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header