import { Menu , X } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";

const navLinks = [
  {href: "#about", label: "About"},
  {href: "#skills", label: "Skills"},
  {href: "#experience", label: "Experience"},
  {href: "#projects", label: "Projects"},

];

export const Navbar = () => {

    const [isMenuOpen , setIsMenuOpen] = useState(false);

    function MenuClick(){
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <header className="fixed py-5 top-0 left-0 right-0 z-50">
            <nav className="flex items-center justify-between px-6 mx-auto container">
                <a href="" className="text-xl font-bold tracking-tight">
                    MJ<span className="text-primary">.</span>
                </a>
                {/* Desktop */}
                <div className="hidden md:flex items-center gap-1 ">
                    <div className="flex gap-3 glass rounded-full px-2 py-1 items-center">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-2 py-1 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.label}</a>
                        ))}
                    </div>
                </div>
                <div className="hidden md:block">
                    <Button>
                        Contact Me
                    </Button>
                </div>
                {/* Mobile Menu Button */}
                <button className="md:hidden "  onClick={MenuClick}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </nav>
             {/* Mobile Menu  */}
                {isMenuOpen && (<div className="md:hidden glass-strong animation-fade-in">
                    <div className=" flex px-6 py-5 flex-col gap-2">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foreground ">{link.label}</a>
                        ))}
                        <Button classname="Contact Me" />
                    </div>
                    
                </div>)}

        </header>

    );
}