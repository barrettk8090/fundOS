import { useState } from "react"

function UserProjects({singleUserProject, setUsersProjects, usersProjects, user}){

    const [editMode, setEditMode] = useState(false)
    const [projectEditInput, setNewProjectTitle] = useState("")

    //Handles user clicking the edit button to open input field, 
    //which will allow them to edit the project name
    function handleEdit(){
        console.log('Edit button clicked')
        setEditMode(!editMode);
    }

    const changeProjectName = (e) => {
        setNewProjectTitle(e.target.value)
    }

    //Handles the patch functionality of updating users project name
    function handleEditSave(){
        console.log('Save button clicked')
        fetch(`/api/${user.id}/projects/${singleUserProject.id}`, {
            method: "PATCH",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({ name: projectEditInput })
        })
        .then(r => r.json())
        .then(() => {
            setUsersProjects(usersProjects.map(project => {
                if (project.id === singleUserProject.id){
                    return {...project, name: projectEditInput}
                } else {
                    return project
                }
            }))
            setEditMode(false)
        })
    }
    

    function handleDelete(){
        fetch(`/api/${user.id}/projects/${singleUserProject.id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then(() => {
            setUsersProjects(usersProjects.filter(project => project.id !== singleUserProject.id))
        })
    }

    

    return (
        <div>
            <p className="pt-4 text-3xl">{singleUserProject.name}</p> 
            
            <div className={` ${editMode ? 'edit' : ''}`}>
                <button className="my-2" onClick={()=> handleEdit()}> {editMode ? "Cancel" : `Edit Project Name`}</button> 
                {editMode && (
                    <div>
                        <form onSubmit={handleEditSave}>
                            <input className="w-80 h-10 rounded-lg p-2 mb-2" type="text" placeholder="Enter a new project name" value={projectEditInput} onChange={changeProjectName}/>
                            <button type="submit">Save</button>
                        </form>
                    </div>
            )}
            </div>
            
            <button className="pr-6 pl-6" onClick={handleDelete}>Delete Project</button>
           
        </div>
    );
}

export default UserProjects;