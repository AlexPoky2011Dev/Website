import { useEffect, useState } from "react";
import {Repository} from '../types/GitHub';

const GitHub = () => {
    const [projects, setProjects] = useState<Repository[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        setLoading(true);

        try {
            const res = await fetch('https://api.github.com/users/AlexPoky2011Dev/repos');
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
        <div className="github">
            {isLoading ? <div className="loading"></div> : ""}

            <div className="projects">
                {projects.map(project => (
                    <div key={project.id} className="project">
                        <h1 className="text-[20px] uppercase font-bold text-center">{project.name}</h1>
                        <span><p className="text-center text-[15px]">{project.language}</p></span>
                        ----------------------------------------------
                        <p className="text-[15px] text-center">{project.description}</p>
                        <a href={project.svn_url} target="_blank"><p className="text-center text-[15px] bg-sky-600 rounded-[10px]">Otevřít</p></a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GitHub;