import {Link} from "react-router-dom";

function ProjectCard({singleProject, handleProjectClick, username}){
    const maxLength = 400; 
    const description = singleProject.description;
    const truncatedDescription = description.length > maxLength ? description.substring(0, maxLength) + "..." : description;

    return (
        <div className="project-card my-8 mx-4">
        
                <img className="h-96 w-full" src={singleProject.image} alt="Project Image"/>
                

            <div className="mx-6 my-6 ">
                <h2 className="my-6 font-bold text-5xl">{singleProject.name}</h2>
                <p className="proj-card-text">Creator: @{username}</p> 
                <p className="proj-card-text">Funds needed: {singleProject.funding_needed}</p>
                <p className="proj-card-text">Current Project Amount: {singleProject.current_funding}</p>
                <p className="proj-card-text pb-4">Deadline: {singleProject.deadline.split(' ')[0]}</p>

                <p className="proj-card-text pb-4">
                    {truncatedDescription}
                    {description.length > maxLength && 
                        <Link to={{
                            pathname: `/project/${singleProject.id}`,
                            state: { singleProject }
                        }}>
                            [Read More]
                        </Link>
                    }
                </p>
                
                
                <div className="flex flex-row-reverse">
                    <Link to={{
                        pathname: `/project/${singleProject.id}`,
                        state: { singleProject }
                    }}> <button  onClick={() => handleProjectClick(singleProject.id)}>Explore Project →</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard