import React from 'react'

const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "HTML",
    "CSS",
    "Python",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Vercel",
    "Tailwind CSS",
    "Figma",
    "Git",
    "GitHub Actions",
];


const Skills = () => {
    return (
        < div className = 'mt-10 animate-fade-in animation-delay-600' >
            <div >
                <h1 className='text-sm text-muted-foreground text-center mb-6'>
                    Technologies I work with</h1>
                <div className=' relative overflow-hidden'>
                    <div className='flex animate-marquee '>
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className='flex-shrink-0 px-8 py-4 '>
                                <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-color'>
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div >
  );
}

export default Skills