import ProjectCard from "./ProjectCard";
import {useEffect, useState} from "react"; 



//For each project, render a project card.
function AllProjects(){

    const [allProjects, setAllProjects] = useState([])


useEffect(() => {
      fetch(`/api/projects`)
        .then(r => r.json())
        .then(data => setAllProjects(data))
  }, []);

  const displayProjects = allProjects.map(singleProject => {
    return <ProjectCard key={singleProject.id} singleProject={singleProject}/>})

    return (
        <div>
            <h1>All Projects</h1>
            {displayProjects}
        </div>
    );
}

export default AllProjects