function CreateAccount(){
    return (
        <>
            <div>
                <h1>Create Account</h1>
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username"/><br/>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"/><br/>
                    <label for="password">Confirm Password:</label>
                    <input type="password" id="password_confirm" name="password_confirm"/><br/>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"/><br/>
                    <label for="first_name">First Name:</label>
                    <input type="text" id="first_name" name="first_name"/><br/>
                    <label for="last_name">Last Name:</label>
                    <input type="text" id="last_name" name="last_name"/><br/>
                    <label for="image">Upload Image (URL):</label>
                    <input type="text" id="profile_image" name="profile_image"/><br/>

                    <input type="submit" value="Create Account"/>
                </form>
                <p>Already have an account? Log in instead.</p>
            </div>
        </>
    );
}

export default CreateAccount