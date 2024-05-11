import {useEffect} from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Avatar from '/avatar.png';

const MainPage = () => {
    useEffect(() => {
        document.title = "AlexPoky2011 • Hlavní stránka";
    });

    return (
        <Layout>
            <Header>
                <div className="m-auto">
                    <img src={Avatar} alt="Avatar" width={350} className="rounded-[50%] block mx-auto mb-[15px]"/>
                    <h1 className="text-[50px] uppercase font-bold text-center max-[767px]:text-[35px]">AlexPoky2011</h1>
                    <h2 className="text-[35px] text-center text-[#aaa]">Webový vývojář</h2>
                </div>
            </Header>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </Layout>
    );
} 

export default MainPage;