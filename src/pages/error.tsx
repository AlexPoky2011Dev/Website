import { useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";

const ErrorPage = () => {
    useEffect(() => {
        document.title = "AlexPoky2011 • 404 Error";
    });

    return (
        <Layout>
            <Header>
                <div className="m-auto">
                    <h1 className="text-[50px] uppercase font-bold max-[767px]:text-center max-[767px]:text-[35px]">404 error!</h1>
                    <h2 className="text-[35px] text-center text-[#aaa] max-[767px]:text-[25px]">Tato stránka nebyla nalezena.</h2>
                </div>    
            </Header>
        </Layout>
    );
}

export default ErrorPage;