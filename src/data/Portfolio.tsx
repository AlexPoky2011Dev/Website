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
                        <img src={project.image} height={1000} width={1000}/>
                        <br />
                        <div className="flex justify-between"> 
                            <p className="text-[16px] bg-amber-600 py-[3px] rounded-[5px] px-[4px]">{project.date}</p>
                            <p className="text-[16px] bg-cyan-500 py-[3px] rounded-[5px] px-[4px] ">{project.language}</p>
                        </div>  
                        <div className="cara"></div>
                        <h1 className="text-[23px] uppercase font-bold">{project.name}</h1>  
                        <p className="text-[15px]">{project.description}</p>
                        <a href={project.url} target="_blank"><p className="text-center text-[15px] bg-sky-600 p-[2px] rounded-[5px] mt-[6px]">Otevřít</p></a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;