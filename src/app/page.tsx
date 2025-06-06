import { Button } from "@/component/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-black min-h-screen w-full px-4 md:px-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-teal-400 p-6 sm:p-8 md:p-10 rounded-full w-fit mt-6 sm:mt-8 md:mt-10">
        <h1 className="scroll-m-20 text-center p-3 sm:p-4 md:p-5 text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tight text-white text-balance">
          Looking To
        </h1>
        <h1 className="scroll-m-20 text-center p-3 sm:p-4 md:p-5 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-black text-balance">
          Hold / Rent
        </h1>
        <h1 className="scroll-m-20 text-center p-3 sm:p-4 md:p-5 text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white text-balance">
          A Spot?
        </h1>
      </div>

      {/* Subtitle */}
      <div className="flex justify-center items-center mt-10 sm:mt-16 md:mt-20 p-4 sm:p-5">
        <h3 className="scroll-m-20 border-b bold pb-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white first:mt-0 text-center">
          Market the best way you can !!!
        </h3>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col justify-center w-full max-w-7xl items-center gap-4 mt-6 sm:mt-8 md:mt-10 p-4 sm:p-5">
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
          <div className="border border-neutral-500 p-4 md:w-2/3 rounded-4xl bg-neutral-800">
            <h3 className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              List The Best Spot <br /> Of Your Community Or Platform
            </h3>
            <p className="mt-4 text-base sm:text-lg text-neutral-400">
              Turn your community into a revenue stream by offering space for
              relevant and respectful advertising. You control what gets featured.
            </p>
          </div>
          <div className="border border-neutral-500 p-4 md:w-1/3 rounded-4xl bg-neutral-800">
            <h3 className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Reach Your <br /> Ideal Audience
            </h3>
            <p className="mt-4 text-base sm:text-lg text-neutral-400">
              Discover authentic communities and advertise directly where your audience already spends time. No middlemen, just pure engagement with real people.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
          <div className="border border-neutral-500 p-4 md:w-1/3 rounded-4xl bg-neutral-800">
            <h3 className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Boost <br /> Real Engagement
            </h3>
            <p className="mt-4 text-base sm:text-lg text-neutral-400">
              Choose from active communities with high engagement rates,
              ensuring your ad isn&apos;t just seen—it sparks interaction.
            </p>
          </div>
          <div className="border border-neutral-500 p-4 md:w-2/3 rounded-4xl bg-neutral-800">
            <h3 className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Transparent <br /> Performance Metrics
            </h3>
            <p className="mt-4 text-base sm:text-lg text-neutral-400">
              Track everything perfectely with detailed reports.
              Know exactly how your ad is performing—no guessing games.
            </p>
          </div>
        </div>
      </div>

      {/* explanation recommendation */}
      <div className="my-32">
        <h3 className="scroll-m-0  border-b bold pb-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white first:mt-0 text-center mt-10 sm:mt-16 md:mt-20 h-fit">
          Why Choose Us?
        </h3>
        <p className="text-neutral-200 text-center pt-2 text-base sm:text-lg max-w-xl mx-auto">
          We connect you with communities that matter, ensuring your ads reach the right people in the right places.
          Experience genuine engagement and measurable results like never before.
        </p>
      </div>


      {/* both sides */}
      <div className="flex flex-col items-center md:flex-row gap-10 w-full md:w-6/8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl">
          {/* spot owner */}
          <div className="flex flex-col p-4 sm:p-6 md:p-8 bg-gradient-to-bl from-red-600 to-yellow-700 border border-neutral-700 rounded-4xl hover:border-white transition shadow-[0_0_50px_-12px] shadow-red-500/50 hover:shadow-[0_0_50px_-6px] hover:shadow-red-600/50 h-full">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                List Your <br /> Spot, Earn <br /> Effortlessly
              </h2>
              <p className="text-neutral-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
                Empower your community while earning passive income. Showcase your space, control who advertises, and watch your effort turn into value.
              </p>
            </div>

            <ul className="flex flex-col gap-3 md:gap-5 text-white">
              <li>
                <h3 className="text-lg sm:text-xl font-semibold mb-1">You Control the Ad Space</h3>
                <p className="text-neutral-200 text-xs sm:text-sm">
                  Approve only the ads that align with your values. Stay in charge of what appears in your space.
                </p>
            </li>

          <li>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">Earn Passive Income</h3>
            <p className="text-neutral-200 text-xs sm:text-sm">
              Monetize unused areas with zero hassle. Let your space generate income while you focus on what you love.
            </p>
          </li>

          <li>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">Partner with Aligned Brands</h3>
            <p className="text-neutral-200 text-xs sm:text-sm">
              Get discovered by advertisers who share your community&apos;s interests and mission.
            </p>
          </li>

          <li>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">Transparent Performance</h3>
            <p className="text-neutral-200 text-xs sm:text-sm">
              Track every dollar earned by renting some spots with our transparent performance dashboard.
            </p>
          </li>

          <li>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">Easy Setup</h3>
            <p className="text-neutral-200 text-xs sm:text-sm">
              Just list your space—we handle everything else from onboarding to support.
            </p>
          </li>
            </ul>

            <div className="text-center mt-6 md:mt-10">
          <Button variant={"outline"}>Add Your Spot</Button>
            </div>
          </div>

          {/* advertisers */}
          <div className="flex flex-col p-4 sm:p-6 md:p-8 bg-gradient-to-bl from-indigo-600 to-sky-700 border border-neutral-700 rounded-4xl hover:border-white transition shadow-[0_0_50px_-12px] shadow-sky-500/40 hover:shadow-[0_0_50px_-6px] hover:shadow-sky-600/60 h-full">
            <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Rent a Spot, <br /> Promote with Impact
          </h2>
          <p className="text-neutral-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Unlock access to vibrant communities. Place your ads where they matter most and convert views into real engagement.
          </p>
            </div>

            <ul className="flex flex-col gap-3 md:gap-5 text-white">
          <li>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">Precision Targeting</h3>
            <p className="text-neutral-200 text-xs sm:text-sm">Find ad spots inside the exact communities your product was built for.</p>
          </li>
          <li>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">Pay for Real Reach</h3>
            <p className="text-neutral-200 text-xs sm:text-sm">Transparent pricing and no middlemen. Know what you&apos;re getting.</p>
          </li>
          <li>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">Boost Engagement</h3>
            <p className="text-neutral-200 text-xs sm:text-sm">Get your message seen by active, passionate, and engaged audiences.</p>
          </li>
          <li>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">Trusted Spaces</h3>
            <p className="text-neutral-200 text-xs sm:text-sm">Ad spaces are vetted by the spot owners, ensuring relevance and trust.</p>
          </li>
          <li>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">Launch in Minutes</h3>
            <p className="text-neutral-200 text-xs sm:text-sm">Browse spots, submit your ad, and start running campaigns instantly.</p>
          </li>
            </ul>

            <div className="text-center mt-6 md:mt-10">
              <Button variant={"outline"}>Find The Spot</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




