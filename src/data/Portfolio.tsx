import { useEffect, useState } from "react";
import { Repository } from './../types/Portfolio';


const Portfolio = () => {
    const [projects, setProjects] = useState<Repository[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        setLoading(true);

        try {
            const res = await fetch('https://api.alexpoky2011.fun/portfolio');
            const data = await res.json();

            if(data.length > 0) {
                setLoading(false);
                setProjects(data);
            }

        } catch(error) {
            setLoading(true);
            console.log(error);
        }
    }

    return (
        <div className="portfolio">
            {isLoading ? <div className="loading">
            <div className="w-full gap-x-2 flex justify-center items-center">
               <div className="w-5 bg-[#00e1ff] animate-pulse h-5 rounded-full animate-bounce"></div>
               <div className="w-5 animate-pulse h-5 bg-[#16B6B6] rounded-full animate-bounce"></div>
               <div className="w-5 h-5 animate-pulse bg-[#107F7F] rounded-full animate-bounce"></div>
           </div>
           
           <div className="a text-center text-[20px] animate-pulse animate-bounce">
           <a className="text-[#00e1ff]">Loa</a>
           <a className="text-[#16B6B6]">di</a> 
           <a className="text-[#107F7F]">ng</a>
           </div>

            </div> : ""}

            <div className="projects">
                {projects.map(project => (
                    <div key={project.id} className="project">
                        <h1 className="text-[20px] uppercase font-bold text-center">{project.name}</h1>
                        <span><p className="text-center text-[15px]">{project.date}</p></span>
                        ----------------------------------------------
                        <p className="text-[15px] text-center">{project.description}</p>
                        <a href={project.url} target="_blank"><p className="text-center text-[15px] bg-sky-600 rounded-[10px]">Otevřít</p></a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;