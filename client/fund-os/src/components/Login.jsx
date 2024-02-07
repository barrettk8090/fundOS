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
        <div className="lg:mx-60 lg:mt-20 lg:p-12 border-2 rounded-lg border-purple-800">
            <h1 className="lg:p-4 flex justify-center font-display animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="lg:pt-12 lg:px-96 font-display text-3xl">
                <label for="username">Username:</label>
                <input className="p-4 m-4 rounded-lg" type="text" placeholder="Enter username" id="username_login" name="username" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)}/><br/>
              </div>
              <div className="lg:pt-12 lg:px-96 font-display text-3xl">
                <label for="password">Password:</label>
                <input className="p-4 m-4 rounded-lg" type="password" placeholder="Enter password" id="password_login" name="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/><br/>
              </div>
              <div className="flex justify-center my-12">
                <button role="button" className="font-display py-4 px-8 bg-purple-700" type="submit" onClick={handleLogin()} >
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