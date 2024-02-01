function UserProjects({singleUserProject, setUsersProjects, usersProjects, user}){

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
            <h1>Your Projects </h1>
            <h1>❗❗❗This might make more sense to be in dash. Post MVP❗❗❗</h1>
            <p>{singleUserProject.name}</p> <button>Edit</button> <button onClick={handleDelete}>Delete</button>
            <p> A note about editing projects... </p>
        </div>
    );
}

export default UserProjects;