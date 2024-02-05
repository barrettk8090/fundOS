import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import FundModal from './FundModal';
import ProjectComment from './ProjectComment';

function ProjectDetailPage({user, ...props}){
    const [project, setProject] = useState(null);
    const location = useLocation();
    const { id } = useParams();
    const [newComment, setNewComment] = useState('')
    const [singleProject, setSingleProject] = useState(null)
    const [allUsers, setAllUsers] = useState([])

    //Modal popup state
    const [showFundModal, setShowFundModal] = useState(false);


    //Fetching project data
    useEffect(() => {
        if (location.state) {
            // If state is passed, use it
            setSingleProject(location.state.singleProject);
        } else {
            // Otherwise, fetch the project data
            fetch(`/api/projects/${id}`)
                .then(r => r.json())
                .then(data => setProject(data));
        }
    }, [location, id]);

    useEffect(() => {
        fetch(`/api/users`)
            .then(r => r.json())
            .then(data => setAllUsers(data))
    }, []);

    const projectCreator = allUsers.find(user => user?.id === project?.user_id);

    const [projectComments, setProjectComments] = useState([])


    // Fetching project comments
    useEffect(() => {
        if (project) {
            fetch(`/api/project_comments/${project.id}`)
                .then(r => r.json())
                .then(data => setProjectComments(data));
        }
    }, [project]);

    if (!project) {
        return <div>Loading...</div>;
    }

    const displayProjectComments = projectComments.map(comment => {
        return <ProjectComment key={comment.id} comment={comment}/>})

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = {
            comment_text: newComment
        };
    
        try {
            const response = await fetch(`/api/project_comments/${user?.id}/${project.id}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(formData),
            })
            .then(r => r.json())
            .then(data=> setProjectComments([...projectComments, data]));
            
            
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                console.log('Form submitted successfully');
            }
        } catch (error) {
            console.error('An error occurred while submitting the form: ', error);
        }
    }


    return (
        <>
        <div>
            <p>Test: {project.id}</p>
            <h1>{project.name}</h1>
            <img src={project.image} alt="Project Image"/>
            <p>{project.type}</p>
            <p>Created by: {projectCreator?.username}</p>
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
            <h2>Comments</h2>
            {displayProjectComments}
        </div>

        <div className="add-comment">
            <h3>Add a Comment</h3>
            <form onSubmit={handleSubmit}> 
                <label>
                    Comment:
                    <input type="text" name="comment" value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>

        </div>
        </>
    )
}

export default ProjectDetailPage