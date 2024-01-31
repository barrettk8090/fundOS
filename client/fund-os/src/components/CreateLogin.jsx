import CreateAccount from "./CreateAccount";
import Login from "./Login";

function CreateLogin(setUser){
    return (
        <div>
            <h1>Create an Account or Login</h1>
            <CreateAccount/>
            <Login setUser={setUser}/>
        </div>
    );
}

export default CreateLogin