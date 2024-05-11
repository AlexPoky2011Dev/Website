import {ReactLenis} from 'lenis/react';
import { Link } from 'react-router-dom';

const Layout = ({children} : {children: React.ReactNode}) => {
    const year = new Date().getFullYear();

    return (
        <ReactLenis root>
            <nav className="bg-sky-600 py-[15px] w-[100%]">
                <div className="container mx-auto px-[30px] w-[100%]">
                    <div className="flex justify-between">
                        <div className="brand">
                            <p className="font-bold uppercase text-[25px]">AlexPoky2011</p>
                        </div>
                        <div className="links my-auto">
                            <ul className="flex gap-[15px]">
                                <li>
                                    <Link to="/">Hlavní stránka</Link>
                                </li>
                                <li>
                                    <Link to="/test">Testovací stránka</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
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