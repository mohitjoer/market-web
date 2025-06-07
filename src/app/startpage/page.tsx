function page() {
  return (
    <div className=" flex flex-col items-center justify-center bg-black text-white">
        <div className="mt-15 flex w-full max-w-2xl flex-col items-center justify-center text-center">
            <h2 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">What Are You Looking To ??</h2>
        </div>


        <div className="my-20 flex w-full max-w-2xl flex-row gap-4 items-center justify-center text-center">
            {/* for spot owners */}
            <div className="flex justify-center items-center font-bold p-6 h-40 w-60 border border-neutral-500 rounded-lg bg-neutral-900 bg-[url('/online-advertising-6693945.svg')] bg-blend-overlay bg-cover bg-no-repeat bg-center hover:bg-neutral-800 transition-colors">
                <h3>Give Spot</h3>
            </div>
            {/* for audence seekers */}
            <div className="flex justify-center items-center font-bold p-6 h-40 w-60 border border-neutral-500 rounded-lg bg-neutral-900 bg-[url('/communities.svg')] bg-blend-overlay bg-cover bg-no-repeat bg-center hover:bg-neutral-800 transition-colors">
                <h3>Get Spot</h3>
            </div>
        </div>
    </div>
  )
}
export default page

