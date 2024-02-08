import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function NewProjectSubmission({user}){

    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [projectType, setProjectType] = useState("")
    const [projectImage, setProjectImage] = useState("")
    const [fundingNeeded, setFundingNeeded] = useState("")
    const [deadline, setDeadline] = useState("")

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = {
            name: projectName,
            type: projectType,
            image: projectImage,
            description: projectDescription,
            funding_needed: fundingNeeded,
            current_funding: 0,
            deadline: deadline, 
        };
        console.log(formData)
    
        try {
            const response = await fetch(`/api/${user.id}/projects/`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                const data = await response.json();
                const projectId = data.id;
                console.log('Project ID:', projectId)
                console.log('Form submitted successfully');
                navigate(`/lets-do-this/${projectId}`) ;
            }
        } catch (error) {
            console.error('An error occurred while submitting the form: ', error);
        }
    };

    return (
        <>    
            <div>
                <h1 className="mx-12 my-8 lg:text-6xl flex justify-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold">Publish Your Project</h1>
                <p className="lg:mx-48 font-bold">If you're ready to begin fundraising for a project, fill out this form and hit submit. Be careful when entering your information - you cannot edit a project, aside from the project name, once a submission has been made. If an error is made, projects must be deleted from the system and re-added with updated details. Please read more details on what it means to submit a project here: INSERT LINK.</p>
            </div>

            <div className="grid grid-cols-2">   
                <div className="lg:mx-48">
                    <form onSubmit={handleSubmit}>
                        <label className="font-bold">
                            Project Name: 
                            <input className="rounded-md border-2 border-purple-600 w-96 h-12 col-span-1" type="text" name="project_name" value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
                        </label>
                
                        <label>
                            Project Description:
                            <input className="rounded-md border-2 border-purple-600 w-96 h-12" type="text" name="project_description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}/>
                        </label>

                        <label>
                            Project Type:
                            <select className="rounded-md border-2 border-purple-600 w-96 h-12" name="type" value={projectType} onChange={(e) => setProjectType(e.target.value)} required>
                                <option>Arts & Lifestyle</option>
                                <option>Design</option>
                                <option>Education</option>
                                <option>Film & Photography</option>
                                <option>Food & Crafts</option>
                                <option>Games</option>
                                <option>Music</option>
                                <option>Publishing</option>
                                <option>Programming</option>
                            </select>
                        </label>

                        <label>
                            Project Image:
                            <input className="rounded-md border-2 border-purple-600 w-96 h-12" type="img" name="project_image" value={projectImage} onChange={(e) => setProjectImage(e.target.value)}/>
                        </label>

                        <label>
                            Funding Needed:
                            <input className="rounded-md border-2 border-purple-600 w-96 h-12" type="text" name="funding_needed" value={fundingNeeded} onChange={(e) => setFundingNeeded(e.target.value)}/>
                        </label>

                        <label>
                            Deadline:
                            <input className="rounded-md border-2 border-purple-600 w-96 h-12" type="text" name="deadline" placeholder="2024-01-01"value={deadline} onChange={(e) => setDeadline(e.target.value)}/>
                        </label>

                        <button type="submit">Submit</button>

                    </form>
                </div>
            </div> 
        </>


    )
}

export default NewProjectSubmission