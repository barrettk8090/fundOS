import {Link} from "react-router-dom";

function ProjectCard({singleProject, handleProjectClick, username}){

    return (
        <div className="project-card bg-slate-400 my-8 grid grid-cols-8 rounded-md">
            <div className="col-span-3">
                <img className="p-4" src={singleProject.image} alt="Project Image"/>
            </div>

            <div className="mx-12 my-12 col-span-5">
                <h2 className="my-6 font-bold text-3xl">{singleProject.name}</h2>
                <p>{singleProject.description}</p>
                <p>Created by: {username}</p>
                <p>Funds needed:{singleProject.funding_needed}</p>
                <p>Current Project Amount: {singleProject.current_funding}</p>
                <p>Deadline:{singleProject.deadline}</p>
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