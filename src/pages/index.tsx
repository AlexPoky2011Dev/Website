import {useEffect} from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import GitHub from '../data/GitHub';
import Portfolio from '../data/Portfolio';
import Avatar from '/avatar.png';

import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TbApi } from "react-icons/tb";


const MainPage = () => {

    useEffect(() => {
        document.title = "AlexPoky2011 • Hlavní stránka";
    });


    
    return (
        <Layout>
            <Header>
                <div className="m-auto ${small}">
                    <img src={Avatar} alt="Avatar" width={350} className="rounded-[50%] block mx-auto mb-[15px]"/>
                    <h1 className="text-[50px] uppercase font-bold text-center max-[767px]:text-[35px]">AlexPoky2011</h1>
                    <h2 className="text-[35px] text-center text-[#aaa]">Webový vývojář</h2>
                </div>
            </Header>

            <br /><br />
            <h1 className='text-center text-[30px]'>O mě</h1>
            <p className='text-center text-[17px]'>Ahoj, já jsem AlexPoky2011. Jsem FrontEnd Website Developer, vyvíjím a tvořím <br />jednoduché webové stránky pomocí frameworků. Vytváření webových stránek se věnuji od 16.2.2024</p>

            <br /><br />
            <h1 className='text-center text-[30px]'>Portfolio</h1>
            <Portfolio />


            <h1 className='text-center text-[30px]'>GitHub</h1>
            <GitHub/>

            <h1 className='text-center text-[30px]'>&nbsp;&nbsp;Languages</h1>   
        
            <div className="flex justify-center mb-4 "> 
           
            <RiJavascriptFill size={50} title='JavaScript' className='hover:fill-sky-400'/>
            &nbsp;&nbsp;
            <BiLogoTypescript size={50} className='hover:fill-sky-400'/>
            &nbsp;&nbsp;
            <FaHtml5 size={45} className='hover:fill-sky-400'/>
            &nbsp; &nbsp;
            <FaCss3Alt size={45} className='hover:fill-sky-400'/>
            &nbsp; &nbsp;
            <BsFiletypeScss size={45} className='hover:fill-sky-400'/>
            &nbsp; &nbsp;
            <RiTailwindCssFill size={45} className='hover:fill-sky-400'/>
            &nbsp;&nbsp;
            <TbApi size={45} className='hover:fill-sky-400'/>
            &nbsp;&nbsp;
            <FaReact size={45} className='hover:fill-sky-400'/>
            &nbsp;&nbsp;
            <FaAngular size={45} className='hover:fill-sky-400'/>
            &nbsp;&nbsp;
            <RiNextjsFill size={47} className='hover:fill-sky-400'/>
            &nbsp;&nbsp;
            <SiExpress size={45} className='hover:fill-sky-400'/>
            &nbsp;&nbsp;
            <FaNode size={50} className='hover:fill-sky-400'/>
            
            </div>
            <br /><br />
        </Layout>
    );
} 

export default MainPage;