function UserProjects({singleUserProject}){
    return (
        <div>
            <h1>Your Projects </h1>
            <h1>❗❗❗This might make more sense to be in dash. Post MVP❗❗❗</h1>
            <p>{singleUserProject.name}</p> <button>Edit</button> <button>Delete</button>
            <p> A note about editing projects... </p>
        </div>
    );
}

export default UserProjects;