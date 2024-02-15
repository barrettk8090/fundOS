import {useState, useEffect} from "react";

import AccountHistory from "./AccountHistory";
import UserProjects from "./UserProjects";


function Account({user, ethAddress}){

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
    <h1 className="mx-12 my-8 flex justify-center lg:text-6xl font-display">Account Details</h1>

    <div className="grid grid-cols-2">
        
        <div className="account-blobs ml-8 mr-4 p-6 col-span-1 flex">
            <img className="rounded-full mt-20 h-32" src={user?.image} alt="User Image" />
            <div className="ml-24">
                <h1 className="pb-6 flex justify-center font-display"> Your Details: </h1>
                <div className="flex justify-between ">
                    <p className="pb-4">Your name: {user?.first_name} {user?.last_name}</p>
                    {/* <button>Edit</button> */}
                </div>
                <div className="flex justify-between">
                    <p className="pb-4">Account Email: {user?.email}</p>
                    {/* <button>Edit</button> */}
                </div>
                <div className="flex justify-between">
                    <p className="pb-4">Username: {user?.username}</p>
                    {/* <button>Edit</button> */}
                </div>
                <p className="pb-4">Wallet Address: {user?.wallet_address}</p> 
                <p className="pb-4">Read Wallet Address: {ethAddress}</p>
            </div>
        </div>

        <div className="account-blobs mr-8 ml-4 p-6 col-span-1">
            <h1 className="pb-6 flex justify-center font-display">Your Projects</h1>
            <p>A list of projects that you are currently raising money for.</p>
            {displayUsersProjects}
            {/* <p> A note about editing projects... </p> */}
        </div>
            
        <div className="col-span-2 account-blobs mx-8 my-8 p-6 ">
            <h1 className="pb-6 flex justify-center font-display">Account History</h1>
            <AccountHistory/>
        </div>
    </div>

    <div>
        
    </div>
</>
    )
}

export default Account;