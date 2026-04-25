import React from 'react'
import { Button } from '../components/Button'
import { ArrowRight, Download, Github, Linkedin} from 'lucide-react'
import AnimatedButton from '../components/AnimatedButton'

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className='absolute inset-0'>
        <img src="/BackGround.jpg" alt="background image" className='w-full h-full object-cover opacity-40' />
        <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background' />
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
              animation: `slow-drift ${15 + Math.random() * 20
                }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className='container mx-auto px-6 pb-20 pt-32 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center '>
          {/* left */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>
          </div>
          {/* Headline */}
          <div className='space-y-4'>
            <h1 className='text-3xl md:text-5xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100'>
              Hi, I'm <span className='font-serif italic font-semibold text-white'>Mayank Jain</span>
              <br />
              I build <span className='text-primary glow-text'>Beautiful</span>, Fast &
              <br />
              <span className='text-primary glow-text'>Responsive</span> Web Experience
            </h1>
            <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
              Fresh out of the learning curve and ready to build. I craft
              modern web experiences using React, Next.js, TypeScript &
              Tailwind CSS. Clean code, pixel-perfect UI, one component at a time.
            </p>
          </div>

          {/* CV Download */}
          <div className='flex flex-wrap animate-fade-in animation-delay-300'>

            <AnimatedButton >
              <Download className='w-5 h-5' /> Download CV
            </AnimatedButton>

          </div>
          {/* social links */}
          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/Mayank-creations" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mayank-jain-7844162a0/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
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