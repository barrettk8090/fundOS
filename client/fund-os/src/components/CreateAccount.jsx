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

    return (
        <>
            <div>
                <h1>Create Account</h1>


                <form onSubmit={handleCreateUser}>
                    <label for="username">Username:</label>
                    <input type="text" id="username_create" name="username" placeholder="Create a unique username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/><br/>
                    
                    <label for="password">Password:</label>
                    <input type="text" id="new_password" name="password" placeholder="Create a secure password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/><br/>
{/* 
                    <label for="password">Confirm Password:</label>
                    <input type="password" id="password_confirm" name="password_confirm"/><br/> */}

                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="Valid email address" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/><br/>

                    <label for="first_name">First Name:</label>
                    <input type="text" id="first_name" name="first_name" placeholder="Your first name." value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}/><br/>

                    <label for="last_name">Last Name:</label>
                    <input type="text" id="last_name" name="last_name" placeholder="Your last name" value={newLastName} onChange={(e) => setNewLastName(e.target.value)}/><br/>

                    <label for="image">Upload Image (URL):</label>
                    <input type="text" id="profile_image" name="profile_image" placeholder="Direct URL, please!" value={newProfileImage} onChange={(e) => setNewProfileImage(e.target.value)}/><br/>

                    <label for="wallet_address">Wallet Address Temp:</label>
                    <input type="text" id="wallet_address" name="wallet_address" placeholder="Hopefully this will go away." value={newWalletAddress} onChange={(e) => setNewWalletAddress(e.target.value)}/><br/>

                    <button type="Submit">Create Account →</button>
                    <h3>{usernameStatus}</h3>
                </form>
                <p>Already have an account? <Link to="/login">Log in</Link> instead.</p>
            </div>
        </>
    );
}

export default CreateAccount