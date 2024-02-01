function ProjectDetailPage(){
    return (
        <>
        <div>
            <h1>Project Name</h1>
            <img src="https://via.placeholder.com/150" alt="Project Image"/>
            <p>Project Details</p>
            <p>Project Funding Goal</p>
            <p>Project Current Amt</p>
            <p>Project Deadline</p>
            <button>Fund this project</button>
            <p> [XXXXXX_______] % Funding Progress Bar</p>
        </div>

        <div>
            <h2> TBD - Project Updates</h2>
        </div>

        <div>
            <h2>Project Funders</h2>
            <p> List of funder</p>
        </div>

        <div className="project-comments">
            <h3>Project Comments</h3>
            <p>Comment 1</p>
            <p>Comment 2</p>
            <p>Comment 3</p>
            <p>Comment 4</p>
            <p>Comment 5</p>
        </div>
        </>
    )
}

export default ProjectDetailPage