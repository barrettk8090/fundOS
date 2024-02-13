import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from 'ethers'
import fundOSArtifact from '../contracts/fundOS.json'

function NewProjectSubmission({user}){

    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [projectType, setProjectType] = useState("")
    const [projectImage, setProjectImage] = useState("")
    const [fundingNeeded, setFundingNeeded] = useState("")
    const [deadline, setDeadline] = useState("")
    const [isDeadlinePast, setIsDeadlinePast] = useState(false)

    const navigate = useNavigate();

    const handleDeadlineChange = (e) => {
        const newDeadline = new Date(e.target.value);
        const now = new Date();
        setIsDeadlinePast(newDeadline < now);
        setDeadline(e.target.value);
    }



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isDeadlinePast) {
            return;
        }

        const formData = {
            name: projectName,
            type: projectType,
            image: projectImage,
            description: projectDescription,
            funding_needed: parseInt(fundingNeeded,  10),
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
                
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const contractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
                const contract = new ethers.Contract(contractAddress, fundOSArtifact.abi, signer);
                const deadlineContractConvert = Math.floor(new Date(deadline).getTime() /  1000);
                const transaction = await contract.createProject(fundingNeeded, deadlineContractConvert);
                await transaction.wait();

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
                <p className="lg:mx-48 font-bold">If you're ready to begin fundraising for a project, fill out this form and hit submit. Be careful when entering your information - you cannot edit a project, aside from the project name, once a submission has been made. If an error is made, projects must be deleted from the system and re-added with updated details. 
                {/* Please read more details on what it means to submit a project here: INSERT LINK. */}
                </p>
            </div>
               
            <form className="create-project-form p-12 grid grid-cols-2 lg:mx-48 lg:my-6" onSubmit={handleSubmit}>
                <label className="col-span-2 mb-6">
                    <p className="text-2xl">Project Name:  </p>
                    <input className="rounded-md border-2 border-purple-600 w-96 h-12" type="text" name="project_name" value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
                    <p>Give your project a compelling, unique name.</p>
                </label>

                <label className="col-span-2">
                    <p className="text-2xl">Project Description:</p>
                    <textarea 
                        className="rounded-md border-2 border-purple-600 w-full h-60 resize-none" 
                        name="project_description" 
                        value={projectDescription} 
                        onChange={(e) => setProjectDescription(e.target.value)} />
                    <p>Try to write an exciting description that will get your audience excited about contributing to your project!</p>
                </label>

                <label className="col-span-1 py-4 flex flex-col">
                            <p className="text-2xl">Project Type:</p>
                            <select className="rounded-md border-2 border-purple-600 w-96 h-12 mb-6" name="type" value={projectType} onChange={(e) => setProjectType(e.target.value)} required>
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

                <label className="col-span-1 py-4 flex flex-col">
                    <p className="text-2xl">Project Image:</p>
                    <input className="rounded-md border-2 border-purple-600 w-96 h-12" type="img" name="project_image" value={projectImage} onChange={(e) => setProjectImage(e.target.value)}/>
                    <p>For now, please use an outsourced URL that directly links to an image.</p>
                </label>

                <label className="col-span-1 flex flex-col">
                    <p className="text-2xl">Funding Needed:</p>
                    <input className="rounded-md border-2 border-purple-600 w-96 h-12" type="text" name="funding_needed" value={fundingNeeded} onChange={(e) => setFundingNeeded(e.target.value)}/>
                    <p>Enter the amount, in Ether, that you need to fund your project.</p>
                </label>

                <label className="col-span-1 flex flex-col">
                    <p className="text-2xl">Deadline:</p>
                    {isDeadlinePast && <p style={{color: 'red'}}>Deadline cannot be in the past</p>}
                    <input className="rounded-md border-2 border-purple-600 w-96 h-12" type="date" name="deadline" placeholder="2024-01-01"value={deadline} onChange={handleDeadlineChange}/>
                </label> 

                <button className="col-span-2 my-12 bg-slate-500 mx-60" type="submit">Launch 🚀 →</button>

                    </form>
                

        </>

    
    )
    }


export default NewProjectSubmission
