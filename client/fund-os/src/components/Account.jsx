import AccountHistory from "./AccountHistory";
import UserProjects from "./UserProjects";

function Account(){
    return(
        <>
        <div>
            <h1>Your Account Details</h1>
            <p>Username: [Username]</p>
            <p>Email: [Email]</p>
            <p>First Name: [First Name]</p>
            <p>Last Name: [Last Name]</p>
            <p>Profile Image: [Profile Image]</p>
            <p>Change Password - TBD</p>
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