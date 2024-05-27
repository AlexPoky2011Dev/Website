import {ReactLenis} from 'lenis/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Layout = ({children} : {children: React.ReactNode}) => {
    const [showNav, setNav] = useState(false);
    const year = new Date().getFullYear();
    let Navbar = 'hidden';

    useEffect(() => {
        Aos.init();
    })

    if (showNav) {
        Navbar = 'block';
    } else {
        Navbar = 'hidden';
    }

    const toggleNav = () => {
        setNav(!showNav);
    }

    return (
        <ReactLenis root>
            <nav className="bg-sky-600 py-[15px] w-[100%]">
                <div className="container mx-auto px-[30px] w-[100%]">
                    <div className="flex justify-between">
                        <div className="brand">
                            <p className="font-bold uppercase text-[25px]">AlexPoky2011</p>
                        </div>
                        <div className="open my-auto hidden max-[900px]:block" onClick={() => toggleNav()}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                                <path d="M20 12L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 5L4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 19L4 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="links my-auto max-[900px]:hidden">
                            <ul className="flex gap-[15px] font-medium transition-ease duration-[.100s] ">
                                <li>
                                    <Link to="/" className='hover:bg-[#00E1FF] rounded-[8px] p-[10px] '>Hlavní stránka</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className='hover:bg-[#00E1FF] rounded-[8px] p-[10px]'>Kontakt</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={`${Navbar} px-[30px]`}>
                    <ul className="flex flex-col gap-[5px]">
                        <li className="block">
                            <Link to="/">Hlavní stránka</Link>
                        </li>
                        <li className="block">
                            <Link to="/contact">Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {children}
            
            <footer className="py-[15px] bg-sky-600">
                <p className="text-center">
                    &copy; AlexPoky2011 | {year}
                </p>
            </footer>
        </ReactLenis>
    );
}

export default Layout;