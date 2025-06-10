import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton} from "@clerk/nextjs"
import Link from "next/link"


function page() {
  return (
    <div className=" bg-black flex align-middle justify-center items-center flex-col">
      <SignedOut>
      <div className="">
        <h1 className="scroll-m-20 pt-20 pb-10 text-white text-center text-4xl font-extrabold tracking-tight text-balance">
          Sign-In use the features
        </h1>
      </div>
      <div className="w-5/10 sm:w-2/10 pt-10 pb-20">
      
        <SignInButton>
          <Button variant={'outline'} className="bg-transparent border-2 p-4 font-bold text-2xl h-full w-full text-white rounded-full">
              Sign-In
          </Button>
        </SignInButton>
        </div>
      </SignedOut>
      
      <SignedIn>
        <div className="py-50 flex justify-center flex-col items-center">
          <h1 className="scroll-m-20 pt-20 pb-10 text-white text-center text-4xl font-extrabold tracking-tight text-balance">
            your already SignedIn...
          </h1>
          <Link href="/startpage">
            <Button className="text-white bg-transparent text-sm sm:text-base" variant="outline">
              Get Started
            </Button>                 
          </Link>
        </div>
      </SignedIn>
     
    
    </div>
  )
}
export default page

