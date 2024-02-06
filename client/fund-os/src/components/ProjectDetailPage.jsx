import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import FundModal from './FundModal';
import ProjectComment from './ProjectComment';
import ProjectFunders from './ProjectFunders';

function ProjectDetailPage({user, ...props}){
    const [project, setProject] = useState(null);
    const location = useLocation();
    const { id } = useParams();
    const [newComment, setNewComment] = useState('')
    const [projectComments, setProjectComments] = useState([])
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

    //Fetching all users
    useEffect(() => {
        fetch(`/api/users`)
            .then(r => r.json())
            .then(data => setAllUsers(data))
    }, []);

    //Match user id with the current project ID to get the proj creator
    const projectCreator = allUsers.find(user => user?.id === project?.user_id);


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

    //Map thru comments to display
    const displayProjectComments = projectComments.map(comment => {
        return <ProjectComment key={comment.id} comment={comment}/>})

    //Handle form submission to add new comment
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

    //Map thru funders to display 
    const displayProjectFunders = project.user_project.map(funder => {
        return <ProjectFunders key={funder.id} funder={funder.user.username} funder_amt={funder.user_funded_amount}/>})

    //Calculate funding percentage - 2 decimal places
    const fundingPercentage = (((project.current_funding / project.funding_needed) * 100).toFixed(2)).toString() + '%'

    return (
        <>
        <div className="grid grid-cols-8 mx-12 my-12">

            <div className="col-span-4">
                <h1>{project.name}</h1>
                <p>Created by: {projectCreator?.username}</p>
                <img src={project.image} alt="Project Image"/>
            </div>

            <div className="col-span-4 mt-40">
               <h3 className="text-3xl my-4">Funding Goal</h3>
               <p className="mb-12"> {project.funding_needed} </p>

                <h3 className="text-3xl my-4">Amount Raised</h3>
                <p className="mb-12"> {project.current_funding} </p>

                <h3 className="text-3xl my-4">Deadline</h3>
                <p className="mb-12"> {project.deadline} </p>
            </div>

            <div className="col-span-8">
            <p>{project.type}</p>
            <p>{project.description}</p>
                <button onClick={() => setShowFundModal(true)}>
                    Fund this project 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 11.0001L12 13L20 11M4 11.0001L12 2M4 11.0001L12 9.00008M20 11L12 2M20 11L12 9.00008M12 2V9.00008M5.5 15L12.0001 22L18.5 15L12 16.5L5.5 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                {showFundModal && <FundModal setShowFundModal={setShowFundModal} project={project} user={user} />}
                <p> {fundingPercentage} Funded</p>
                <p> [XXXXXX_______] % Funding Progress Bar</p>
             </div>
            </div>

        <div>
            <h2> TBD - Project Updates</h2>
        </div>

        <div>
            <h2 className="my-4">Project Funders</h2>
            {displayProjectFunders}
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