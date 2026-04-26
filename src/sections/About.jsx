import React from 'react'
import { Palette, Lightbulb, Code2, Rocket } from "lucide-react";

const highlights = [
    {
        icon: Palette,
        title: "UI Obsessed",
        description:
            "I don't just build interfaces — I craft experiences. Every pixel, spacing and color choice is intentional.",
    },
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Readable, maintainable and scalable. Code that my future self and teammates will actually thank me for.",
    },
    {
        icon: Rocket,
        title: "Fast & Responsive",
        description:
            "Performance matters. I build web experiences that load fast and feel smooth on every device.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices.",
    },
];

const About = () => {
    return (
        <section id='about' className='relative overflow-hidden py-20'>
            <div className='container mx-auto px-6 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-16 items-center'>
                    {/* Left */}
                    <div className='space-y-8'>
                        <div className='animation-fade-in'>
                            <span className='text-secondary-foreground font-medium tracking-wider uppercase'>
                                About Me
                            </span>
                            <div className='text-muted-foreground space-y-4 animate-fade-in mt-6 animation-delay-200 text-xl'>
                                <p>
                                    I'm a passionate Frontend Developer with a growing
                                    expertise in crafting digital products that make a
                                    difference. My journey started with a curiosity for
                                    how beautiful things work on the web, and over the
                                    past 2 years it has evolved into a deep passion for
                                    modern frontend technologies.
                                </p>
                                <p>
                                    I specialize in React, Next.js, and TypeScript,
                                    building everything from sleek landing pages to
                                    responsive web applications. My approach combines
                                    technical precision with a keen eye for design and
                                    user experience.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me exploring new
                                    technologies, working on personal projects, or
                                    leveling up my skills to stay ahead in the
                                    ever-evolving world of web development.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className='grid sm:grid-cols-2 gap-3'>
                        {highlights.map((items, idx) => (
                            <div key={idx} className='glass p-3 rounded-2xl animate-fade-in'
                                style={{animationDelay : `${(idx + 1)* 100 }ms`}}
                            >
                                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/30 mb-4'>
                                    <items.icon className='w-6 h-6 text-primary'/>
                                </div>
                                <h3 className='font-extrabold mb-2 text-lg'>
                                    {items.title}
                                </h3>
                                <p className='text-muted-foreground text-sm'>
                                    {items.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About