

function ProjectCard({singleProject}){




    return (
        <div className="project-card">
            <img src="https://via.placeholder.com/150" alt="Project Image"/>
            <h2>{singleProject.name}</h2>
            <p>{singleProject.description}</p>
            <p>USER ID:{singleProject.user_id}</p>
            <p>Funds needed:{singleProject.funding_needed}</p>
            <p>Current Project Amount: {singleProject.current_funding}</p>
            <p>Deadline:{singleProject.deadline}</p>
            <button>Explore Project →</button>
        </div>
    )
}

export default ProjectCard