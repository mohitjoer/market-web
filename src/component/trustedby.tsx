import Image from 'next/image';

function TrustedBy() {
  const platforms = [
    { name: 'discord', icon: '/icons8-discord.svg' },
    { name: 'reddit', icon: '/icons8-reddit.svg' },
    { name: 'telegram', icon: '/icons8-telegram.svg' },
    { name: 'slack', icon: '/icons8-slack-new.svg' },
    { name: 'whatsapp', icon: '/icons8-whatsapp.svg' },
  ];

  return (
    <section className="my-10 sm:my-16 md:my-20 px-4">
      <h2 className="scroll-m-20 border-b-2 pb-3 border-gray-500 text-center text-2xl sm:text-3xl md:text-4xl text-white font-extrabold tracking-tight text-balance mb-8 sm:mb-12">
        Trusted By Communities On
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
        {platforms.map((platform) => (
          <div 
            key={platform.name}
            className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
          >
            <Image
              src={platform.icon}
              alt={platform.name}
              width={100}
              height={100}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            />
          </div>
        ))}
      </div>

      <h3 className="scroll-m-20 text-center text-xl sm:text-2xl text-white font-bold tracking-tight text-balance mt-8 sm:mt-12">
        Including Influencers
      </h3>
    </section>
  );
}

export default TrustedBy;
