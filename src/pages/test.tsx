import { useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";

const TestPage = () => {
    useEffect(() => {
        document.title = "AlexPoky2011 • Testovací stránka";
    });

    return (
        <Layout>
            <Header small={true}>
                <div className="m-auto">
                    <h1 className="text-[50px] uppercase font-bold">testovací stránka</h1>
                </div>
            </Header>
        </Layout>
    );
}

export default TestPage;