import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login({user, setUser}){

    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState("")

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (loginUsername !== "") {
          fetch('/api/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: loginUsername,
              password: loginPassword
            })
          })
            .then(r => {
              if (r.ok) {
                return r.json();
              } else {
                setLoginStatus('Username or password was incorrect');
              }
            })
            .then(data => setUser(data))
          // Clear form inputs after submission
          setLoginUsername("");
          setLoginPassword("");
          setLoginStatus("");
        }
      }

      function handleLogin(){
        if (user) {
          navigate(`/dashboard`)}
      }

    return (
        <>
        <h1 className="lg:p-4 mt-12 flex justify-center font-display ">Login</h1>
        <div className="create-account-login lg:mx-60 lg:mt-6 lg:mb-12 lg:p-12">
            
            <form onSubmit={handleSubmit}>
              <div className="lg:pt-12 lg:px-96 font-display text-3xl">
                <label for="username"><p>Username:</p></label>
                <input className="px-4 py-4 mt-4 rounded-lg w-full" type="text" placeholder="Enter username" id="username_login" name="username" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)}/><br/>
              </div>
              <div className="lg:pt-12 lg:px-96 font-display text-3xl">
                <label for="password"><p>Password:</p></label>
                <input className="px-4 py-4 mt-4 rounded-lg w-full" type="password" placeholder="Enter password" id="password_login" name="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/><br/>
              </div>
              <div className="flex justify-center my-12">
                <button role="button" className="create-button text-4xl my-6 mx-60" type="submit" onClick={handleLogin()} >
                  Login →
                </button>
              </div>
                <h3>{loginStatus}</h3>
            </form>
        </div>
        </>
    );
}

export default Login