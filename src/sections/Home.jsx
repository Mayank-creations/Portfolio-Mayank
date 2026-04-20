import React from 'react'

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className='absolute inset-0'>
       <img src="/BackGround.jpg" alt="background image" className='w-full h-full object-cover opacity-40'/>
       <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background'/>
        </div>
        {/* dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(70)].map((_, i) => (
          <div
            className="absolute w-0.5 h-0.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#ffffff",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div>
        {/* left */}
        <div>
          <div className='animate-fade-in'>
            <span className='rounded-full p-2 text-amber-50 font-extrabold  bg-primary'>
              Software Engineer - React Specialists
            </span>
          </div>
        </div>
        {/* right */}
        <div>

        </div>
      </div>
    </section>
  )
}

export default Home