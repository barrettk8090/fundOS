import CreateAccount from "./CreateAccount";
import Login from "./Login";

function CreateLogin(){
    return (
        <div>
            <h1>Create an Account or Login</h1>
            <CreateAccount/>
            <Login/>
        </div>
    );
}

export default CreateLogin