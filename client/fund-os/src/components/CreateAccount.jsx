// import * as Form from '@radix-ui/react-form';
import {Link} from "react-router-dom";
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function CreateAccount({user, setUser}){

        const [newUsername, setNewUsername] = useState("")
        const [newPassword, setNewPassword] = useState("")
        // const [createPasswordConfirm, setCreatePasswordConfirm] = useState("")
        const [newEmail, setNewEmail] = useState("")
        const [newFirstName, setNewFirstName] = useState("")
        const [newLastName, setNewLastName] = useState("")
        const [newProfileImage, setNewProfileImage] = useState("")
        const [newWalletAddress, setNewWalletAddress] = useState("")
        const [usernameStatus, setUsernameStatus] = useState('')

        const navigate = useNavigate()

        function handleCreateUser(e) {
            e.preventDefault()
            console.log("Submitting user:", newUsername, newPassword, newEmail, newFirstName, newLastName, newProfileImage, newWalletAddress);
            fetch('/api/users', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: newUsername,
                password: newPassword,
                email: newEmail,
                first_name: newFirstName,
                last_name: newLastName,
                image: newProfileImage,
                wallet_address: newWalletAddress
              })
            })
              .then(r => {
                if (r.ok) {
                  return r.json();
                } else {
                  setUsernameStatus('Check the information that you entered and try again.');
                }
              })
              .then(data => setUser(data))
              .catch(error => console.error('Error:', error));
            // Clear form inputs after submission
            setNewUsername("");
            setNewPassword("");
            setNewEmail("");
            setNewFirstName("");
            setNewLastName("");
            setNewProfileImage("");
            setNewWalletAddress("");
            setUsernameStatus('')
          }

          function handleCreate(){
            if (user) {
              navigate(`/projects`)}
          }

    return (
        <>
            <h1 className="lg:p-4 mt-12 flex justify-center font-display ">Create A New Account</h1>
            <div className="create-account-login lg:mx-60 lg:mt-6 lg:mb-12 lg:p-12">
                


                <form className="grid grid-cols-2" onSubmit={handleCreateUser}>

                  <div className="col-span-1 p-6 font-display text-3xl">
                    <label for="username"><p>Username:</p></label>
                    <input className="px-4 py-4 mt-4 rounded-lg w-full" type="text" id="username_create" name="username" placeholder="Create a username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/><br/>
                  </div>

                  <div className="col-span-1 p-6 font-display text-3xl">
                    <label for="password"><p>Password:</p></label>
                    <input className="px-4 py-4 mt-4 rounded-lg w-full" type="text" id="new_password" name="password" placeholder="Create a secure password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/><br/>
                  </div>
{/*                 
                    <label for="password">Confirm Password:</label>
                    <input type="password" id="password_confirm" name="password_confirm"/><br/> */}

                    <div className="col-span-1 p-6 font-display text-3xl">
                    <label for="first_name"><p>First Name:</p></label>
                    <input className="px-4 py-4 mt-4 rounded-lg w-full" type="text" id="first_name" name="first_name" placeholder="Your first name" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}/><br/>
                    </div>

                    <div className="col-span-1 p-6 font-display text-3xl">
                    <label for="last_name"><p>Last Name:</p></label>
                    <input className="px-4 py-4 mt-4 rounded-lg w-full" type="text" id="last_name" name="last_name" placeholder="Your last name" value={newLastName} onChange={(e) => setNewLastName(e.target.value)}/><br/>
                    </div>

                    <div className="col-span-1 p-6 font-display text-3xl">
                      <label for="email"><p>Email:</p></label>
                      <input className="px-4 py-4 mt-4 rounded-lg w-full" type="text" id="email" name="email" placeholder="Valid email address" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/><br/>
                    </div>

                    <div className="col-span-1 p-6 font-display text-3xl">
                    <label for="image"><p>Upload Image (URL):</p></label>
                    <input className="px-4 py-4 mt-4 rounded-lg w-full" type="text" id="profile_image" name="profile_image" placeholder="Direct URL, please!" value={newProfileImage} onChange={(e) => setNewProfileImage(e.target.value)}/><br/>
                    </div>

                    <div className="col-span-2 p-6 font-display ">
                      <p className="flex justify-center"> Note: You'll be able to connect to your Metamask wallet once you create your account.</p>
                    </div>  
{/* 
                    <div className="lg:pt-12 lg:px-96 font-display text-3xl">
                    <label for="wallet_address">Wallet Address Temp:</label>
                    <input className="px-12 py-4 m-4 rounded-lg" type="text" id="wallet_address" name="wallet_address" placeholder="Hopefully this will go away." value={newWalletAddress} onChange={(e) => setNewWalletAddress(e.target.value)}/><br/>
                    </div> */}

                    <button className="create-button text-4xl my-6 col-span-2 mx-60" type="Submit" onClick={handleCreate()}>Create Account →</button>
                    <h3>{usernameStatus}</h3>
                </form>
                <p className="flex justify-center text-xl pb-2">Already have an account?</p>
                <p className="flex justify-center text-xl"> <Link to="/login"> Log in instead →</Link> </p>
            </div>
        </>
    );
}

export default CreateAccount