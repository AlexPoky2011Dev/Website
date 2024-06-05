import {useEffect} from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import GitHub from '../data/GitHub';
import Portfolio from '../data/Portfolio';
import Avatar from '/avatar.png';

import { AiFillPlusCircle } from "react-icons/ai";




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
                    <h2 className="text-[35px] text-center text-[#aaa] max-[767px]:text-[25px]">Webový vývojář</h2>
                </div>
            </Header>

            <br /><br />
            <h1 className='text-center text-[30px] font-medium'>O mě</h1>
            <p className='text-center text-[17px]'>Ahoj, já jsem AlexPoky2011. Jsem FrontEnd Website Developer, vyvíjím a tvořím <br />jednoduché webové stránky pomocí frameworků. Vytváření webových stránek se věnuji od 16.2.2024</p>
            <div className="flex justify-between">
               <a></a>    
            </div> 

             <br /><br />

            <h1 className="text-[27px] text-center font-medium">Proč já?</h1>

            <div className="flex justify-center mb-4 flex-wrap">
              <a className="bg-[#48ff0049] p-[8px] rounded-[8px] flex items-center mr-4 mb-4"><AiFillPlusCircle size={20} className="fill-green-600" /><span className="ml-2">Nízké ceny</span></a>
              <a className="bg-[#48ff0049] p-[8px] rounded-[8px] flex items-center mr-4 mb-4"><AiFillPlusCircle size={20} className="fill-green-600" /><span className="ml-2">Flexibilní spolupráce</span></a>
              <a className="bg-[#48ff0049] p-[8px] rounded-[8px] flex items-center mr-4 mb-4"><AiFillPlusCircle size={20} className="fill-green-600" /><span className="ml-2">Rychlé dodání</span></a>
              <a className="bg-[#48ff0049] p-[8px] rounded-[8px] flex items-center mr-4 mb-4"><AiFillPlusCircle size={20} className="fill-green-600" /><span className="ml-2">Kvalita kódování</span></a>
              <a className="bg-[#48ff0049] p-[8px] rounded-[8px] flex items-center mr-4 mb-4"><AiFillPlusCircle size={20} className="fill-green-600" /><span className="ml-2">Rychlý kontakt</span></a>
           </div>
        

            <br /><br />
            <h1 className='text-center text-[30px] font-medium'>Portfolio</h1>
            <Portfolio />


            <h1 className='text-center text-[30px] font-medium'>GitHub</h1>
            <GitHub/>


        </Layout>
    );
} 

export default MainPage;