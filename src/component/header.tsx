import { Button } from "./ui/button"
import Link from 'next/link'


function Header() {
  return (
    <div className="bg-black flex justify-between text-white">
        <div className="">
            <h1 className="text-2xl font-bold ml-4 p-3">your spot</h1>
        </div>
        <nav className="right-0 mr-4 p-3">
            <ul className="flex space-x-3">
                <li>
                    <Link href="/">
                        <Button className="bg-black" variant="outline">Home</Button>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <Button className="bg-black" variant="outline">About</Button>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <Button className="bg-black" variant="outline">Contact</Button>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header