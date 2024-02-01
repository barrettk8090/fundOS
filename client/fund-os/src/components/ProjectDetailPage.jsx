import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function ProjectDetailPage(props){
    const [project, setProject] = useState(null);
    const location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        if (location.state) {
            // If state is passed, use it
            setProject(location.state.singleProject);
        } else {
            // Otherwise, fetch the project data
            fetch(`/api/projects/${id}`)
                .then(r => r.json())
                .then(data => setProject(data));
        }
    }, [location, id]);

    if (!project) {
        return <div>Loading...</div>;
    }
    return (
        <>
        <div>
            <h1>{project.name}</h1>
            <img src={project.image} alt="Project Image"/>
            <p>{project.type}</p>
            <p>{project.description}</p>
            <p>Funding Goal: ${project.funding_needed}</p>
            <p>Amount Raised: ${project.current_funding}</p>
            <p>Deadline: {project.deadline}</p>
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

        <div className="add-comment">
            <h3>Add a Comment</h3>
            <form>
                <label>
                    Comment:
                    <input type="text" name="comment" />
                </label>
                <input type="submit" value="Submit" />
            </form>

        </div>
        </>
    )
}

// const project = props.location.state.singleProject

export default ProjectDetailPage