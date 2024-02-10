import ProjectCard from "./ProjectCard";
import {useEffect, useState} from "react"; 

//For each project, render a project card.
function AllProjects({}){

    const [allProjects, setAllProjects] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [singleProject, setSingleProject] = useState(null)

    function handleProjectClick(id){
        fetch(`/api/projects/${id}`)
            .then(r => r.json())
            .then(data => {
                setSingleProject(data);
            })
    }

    useEffect(() => {
        fetch(`/api/users`)
            .then(r => r.json())
            .then(data => setAllUsers(data))
    }, []);

    useEffect(() => {
        fetch(`/api/projects`)
            .then(r => r.json())
            .then(data => setAllProjects(data))
    }, []);

    const displayProjects = allProjects.map(singleProject => {
        const projectCreator = allUsers.find(user => user.id === singleProject.user_id);
    
        return (
            <ProjectCard 
                key={singleProject.id} 
                singleProject={singleProject} 
                handleProjectClick={handleProjectClick}
                username={projectCreator ? projectCreator.username : 'Unknown'}
            />
        )
    })


   

    return (
        <div className="mx-12">
            <h1 className="mx-12 my-4 flex justify-center lg:text-6xl font-display">All Projects</h1>
            {displayProjects}
        </div>
    );
}

export default AllProjects