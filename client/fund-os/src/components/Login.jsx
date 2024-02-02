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
        <div>
            {user ? <h1>Welcome, {user.username} </h1> : null}
        </div>
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label for="username">Username:</label>
                <input type="text" placeholder="Enter username" id="username_login" name="username" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)}/><br/>
                <label for="password">Password:</label>
                <input type="password" placeholder="Enter password" id="password_login" name="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/><br/>
                <button role="button" className="contrast" type="submit" onClick={handleLogin()} >
                  Login →
                </button>
                <h3>{loginStatus}</h3>
            </form>
        </div>
        </>
    );
}

export default Login