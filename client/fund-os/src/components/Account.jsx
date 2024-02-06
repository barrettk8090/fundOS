import {useState, useEffect} from "react";

import AccountHistory from "./AccountHistory";
import UserProjects from "./UserProjects";


function Account({user}){

    const [usersProjects, setUsersProjects] = useState([])


    useEffect(() => {
        if (user){
        fetch(`/api/${user.id}/projects`)
            .then(r => r.json())
            .then(data => setUsersProjects(data)) }
    }, [user]);

    const displayUsersProjects = usersProjects.map(singleUserProject => {
        return <UserProjects key={singleUserProject.id} singleUserProject={singleUserProject} setUsersProjects={setUsersProjects} usersProjects={usersProjects} user={user}/>})

    return(
        <>
        <div>
            <h2>Account Details</h2>

            <img className="rounded-full w-32" src={user?.image} alt="User Image" />

            <p>Your name: {user?.first_name} {user?.last_name}</p>
            <button>Edit</button>
            <p>Account Email: {user?.email}</p>
            <button>Edit</button>

            <p>Username: {user?.username}</p>
            <button>Edit</button>

            <p>Wallet Address: {user?.wallet_address}</p> 


        </div>

        <div>
            <h3>Account History</h3>
            <AccountHistory/>
        </div>

        <div>
            <h3>Your Projects</h3>
            <h3>❗❗❗This might make more sense to be in dash. Post MVP❗❗❗</h3>
            <p>A list of projects that you are currently raising money for.</p>
            {displayUsersProjects}
             <p> A note about editing projects... </p>
        </div>
        </>
    )
}

export default Account;