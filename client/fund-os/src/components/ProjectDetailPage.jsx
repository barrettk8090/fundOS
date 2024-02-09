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
    const [amountRaised, setAmountRaised] = useState(0);

    //Update amount raised
    function updateAmountRaised(newAmount) {
        setProject({
          ...project,
          current_funding: newAmount
        });
        setAmountRaised(newAmount);
      }

    //Fetching single project
    useEffect(() => {
        if (location.state) {
            setSingleProject(location.state.singleProject);
        } else {
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
        <div className="grid grid-cols-8 mx-12 my-12 p-6 border-2 rounded-md shadow-2xl">

            <div className="col-span-4">
                <h1>{project.name}</h1>
                <p className="py-12">Created by: {projectCreator?.username}</p>
                <img src={project.image} alt="Project Image"/>
            </div>

            <div className="col-span-4 mt-40 px-8">
               <h3 className="text-3xl my-4">Funding Goal</h3>
               <p className="mb-12"> {project.funding_needed} </p>

                <h3 className="text-3xl my-4">Amount Raised</h3>
                <p className="mb-12"> {project.current_funding} </p>

                <h3 className="text-3xl my-4">Deadline</h3>
                <p className="mb-12"> {project.deadline} </p>
                <div className="flex flex-row-reverse">
                <button className="w-60 h-16" onClick={() => setShowFundModal(true)}>
                    Fund this project 
                </button>
                {showFundModal && <FundModal setShowFundModal={setShowFundModal} project={project} user={user} updateAmountRaised={updateAmountRaised}/>}
                </div>
            </div>

            <div className="col-span-8">
    <p>{project.type}</p>

    
    <p> {fundingPercentage} Funded</p>
    <div className="w-full bg-slate-200 rounded-full h-6 dark:bg-gray-700 overflow-hidden">
        <div className="bg-purple-600 h-6 rounded-full transition-all duration-500 ease-linear" style={{ width: fundingPercentage }}></div>
    </div>
</div>
            </div>

        {/* <div>
            <h2> TBD - Project Updates</h2>
        </div> */}

        <div className="bg-blue-900 p-24 mx-4 shadow-xl">
            <h2 className="flex justify-center text-5xl">About This Project</h2>
            <p className="pt-12 mx-32 text-2xl leading-10">{project.description}</p>
        </div>

        <div>
            <h2 className="text-6xl my-4">Funders</h2>
            {displayProjectFunders}
        </div>

        <div className="bg-purple-900 p-24 mx-4 shadow-xl">
            <h2 className="flex justify-center text-5xl">Comments</h2>
            {displayProjectComments}
     
            <h3 className="flex justify-center text-2xl py-4">Give this project a shoutout! Leave a comment below to let this creator know how excited you are to get this funded.</h3>
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