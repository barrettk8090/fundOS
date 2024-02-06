import {Link} from "react-router-dom";

function ProjectCard({singleProject, handleProjectClick, username}){

    return (
        <div className="project-card">
            <img src={singleProject.image} alt="Project Image"/>
            <h2>{singleProject.name}</h2>
            <p>{singleProject.description}</p>
            <p>Created by: {username}</p>
            <p>Funds needed:{singleProject.funding_needed}</p>
            <p>Current Project Amount: {singleProject.current_funding}</p>
            <p>Deadline:{singleProject.deadline}</p>
            <Link to={{
                pathname: `/project/${singleProject.id}`,
                state: { singleProject }
            }}> <button onClick={() => handleProjectClick(singleProject.id)}>Explore Project →</button></Link>
        </div>
    )
}

export default ProjectCard