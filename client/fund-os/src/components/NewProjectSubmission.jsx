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
                <h1 className="mx-12 my-8 lg:text-6xl flex justify-center font-bold">Publish Your Project</h1>
                <p className="home-text flex justify-center lg:mx-96 text-center font-bold text-2xl">Ready to begin receiving funding for a project? Fill out the form below to get started. Be careful! Projects submitted through this form are posted to the Ethereum blockchain and cannot be edited or deleted once submitted. 
                {/* Please read more details on what it means to submit a project here: INSERT LINK. */}
                </p>
            </div>
               
            <form className="create-project-form p-12 grid grid-cols-2 lg:mx-48 lg:my-6" onSubmit={handleSubmit}>
                <label className="col-span-2 mb-6">
                    <p className="text-3xl">Project Name:  </p>
                    <input className="px-4 py-4 mt-4 rounded-lg w-full" type="text" name="project_name" value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
                    <p className="pt-2 ">Give your project a compelling, unique name.</p>
                </label>

                <label className="col-span-2">
                    <p className="text-3xl">Project Description:</p>
                    <textarea 
                        className="px-4 py-4 mt-4 rounded-lg w-full h-40" 
                        name="project_description" 
                        value={projectDescription} 
                        onChange={(e) => setProjectDescription(e.target.value)} />
                    <p className="pt-2 ">Try to write an exciting description that will get your audience hyped about contributing to your project!</p>
                </label>

                <label className="col-span-1 py-4 flex flex-col pr-4">
                            <p className="text-3xl">Project Type:</p>
                            <select className="px-4 py-4 mt-4 mr-2 rounded-lg w-full" name="type" value={projectType} onChange={(e) => setProjectType(e.target.value)} required>
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
                    <p className="text-3xl">Project Image:</p>
                    <input className="px-4 py-4 mt-4 mx-2 rounded-lg w-full" type="img" name="project_image" value={projectImage} onChange={(e) => setProjectImage(e.target.value)}/>
                    <p className="pt-2 ">For now, please use an outsourced URL that directly links to an image.</p>
                </label>

                <label className="col-span-1 flex flex-col pr-4">
                    <p className="text-3xl">Funding Needed:</p>
                    <input className="px-4 py-4 mt-4 rounded-lg w-full" type="text" name="funding_needed" value={fundingNeeded} onChange={(e) => setFundingNeeded(e.target.value)}/>
                    <p className="pt-2 ">Enter the amount, in Ether, that you need to fund your project.</p>
                </label>

                <label className="col-span-1 flex flex-col">
                    <p className="text-3xl">Deadline:</p>
                    {isDeadlinePast && <p style={{color: 'red'}}>Deadline cannot be in the past</p>}
                    <input className="px-4 py-4 mt-4 mx-2 rounded-lg w-full" type="date" name="deadline" placeholder="2024-01-01"value={deadline} onChange={handleDeadlineChange}/>
                </label> 

                <button className="col-span-2 create-button text-4xl my-6 col-span-2 mx-60" type="submit">Launch 🚀 </button>

                    </form>
                

        </>

    
    )
    }


export default NewProjectSubmission
