import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import FundModal from './FundModal';

function ProjectDetailPage(props){
    const [project, setProject] = useState(null);
    const location = useLocation();
    const { id } = useParams();

    //Model popup state
    const [showFundModal, setShowFundModal] = useState(false);


    //Fetching project data
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
            <p>Test: {project.id}</p>
            <h1>{project.name}</h1>
            <img src={project.image} alt="Project Image"/>
            <p>{project.type}</p>
            <p>{project.description}</p>
            <p>Funding Goal: ${project.funding_needed}</p>
            <p>Amount Raised: ${project.current_funding}</p>
            <p>Deadline: {project.deadline}</p>
            <button onClick={() => setShowFundModal(true)}>
                Fund this project 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11.0001L12 13L20 11M4 11.0001L12 2M4 11.0001L12 9.00008M20 11L12 2M20 11L12 9.00008M12 2V9.00008M5.5 15L12.0001 22L18.5 15L12 16.5L5.5 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            {showFundModal && <FundModal setShowFundModal={setShowFundModal} project={project} />}
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