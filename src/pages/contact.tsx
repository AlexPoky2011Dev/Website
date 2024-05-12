import { useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";

const ContactPage = () => {
    useEffect(() => {
        document.title = "AlexPoky2011 • Kontakt";
    });

    return (
        <Layout>
            <Header small={true}>
                <div className="m-auto">
                    <h1 className="text-[50px] uppercase font-bold">kontakt</h1>
                </div>    
            </Header>
            <br />
            <br />
            <br />
            <br />
            <div className="contact">
                <h1 className=" text-[25px] text-center">Máš zájem o web nebo o discord bota?</h1>
                <p className="text-[17px] text-center">Neváhej mi napsat na můj email <a className="text-sky-400 ">alexpoky2011.dev@gmail.com</a><br />také mě můžete kontaktovat na mém discordu <a className="text-sky-400 ">AlexPoky2011#2135</a>.</p>
            </div>
            <br /><br /><br /> <br /> <br /> <br />
        </Layout>
    );
}

export default ContactPage;