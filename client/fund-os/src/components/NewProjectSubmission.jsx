import {useState, useEffect} from "react";

function NewProjectSubmission({user}){

    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [projectType, setProjectType] = useState("")
    const [projectImage, setProjectImage] = useState("")
    const [fundingNeeded, setFundingNeeded] = useState("")
    const [deadline, setDeadline] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = {
            name: projectName,
            type: projectType,
            image: projectImage,
            description: projectDescription,
            funding_needed: fundingNeeded,
            deadline: deadline, 
        };
    
        try {
            const response = await fetch(`/api/${user.id}/projects/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                console.log('Form submitted successfully');
            }
        } catch (error) {
            console.error('An error occurred while submitting the form: ', error);
        }
    };

    return (
        <>        
        <div>
            <h1>Publish Your Project</h1>
            <p>If you're ready to begin fundraising for a project, fill out this form and hit submit. Please read more details on what it means to submit a project here: INSERT LINK.</p>
        </div>

        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Project Name:
                    <input type="text" name="project_name" value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
                </label>

                <label>
                    Project Description:
                    <input type="text" name="project_description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}/>
                </label>

                <label>
                    Project Type:
                    <select name="type" value={projectType} onChange={(e) => setProjectType(e.target.value)} required>
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
                    <input type="img" name="project_image" value={projectImage} onChange={(e) => setProjectImage(e.target.value)}/>
                </label>

                <label>
                    Funding Needed:
                    <input type="text" name="funding_needed" value={fundingNeeded} onChange={(e) => setFundingNeeded(e.target.value)}/>
                </label>

                <label>
                    Deadline:
                    <input type="text" name="deadline" placeholder="2024-01-01"value={deadline} onChange={(e) => setDeadline(e.target.value)}/>
                </label>

                <button type="submit">Submit</button>

            </form>
        </div>
        </>


    )
}

export default NewProjectSubmission