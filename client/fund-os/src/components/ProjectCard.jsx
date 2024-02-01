

function ProjectCard({singleProject}){




    return (
        <div className="project-card">
            <img src="https://via.placeholder.com/150" alt="Project Image"/>
            <h2>Project Title: {singleProject.name}</h2>
            <p>Project Description: </p>
            <p>Project Creator</p>
            <p>Project Goal</p>
            <p>Project Current Amount</p>
            <p>Project End Date</p>
            <button>Explore Project →</button>
        </div>
    )
}

export default ProjectCard