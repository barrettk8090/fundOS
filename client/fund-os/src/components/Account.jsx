import {useState, useEffect} from "react";

import AccountHistory from "./AccountHistory";
import UserProjects from "./UserProjects";


function Account({user}){

    return(
        <>
        <div>
            <h2>Account Details</h2>

            <img src={user?.image} alt="User Image" />

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
            <p>A list of projects that you are currently raising money for.</p>
            <UserProjects/>
        </div>
        </>
    )
}

export default Account;