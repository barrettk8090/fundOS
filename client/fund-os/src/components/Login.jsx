function Login(){
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"/><br/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"/><br/>
                <input type="submit" value="Log in"/>
            </form>
        </div>
    );
}

export default Login