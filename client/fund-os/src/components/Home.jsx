// import {Heading,Theme} from '@radix-ui/themes';
import { Link } from "react-router-dom";

function Home(){
    return (
        <>
        <div>
            <h1>The future of crowdfunding.</h1>
        </div>

        <div>
            <Link to="/create_account"><h2>Create An Account</h2></Link>
            <Link to="login"><h2>Log In</h2></Link>
        </div>
        </>
    );
}

export default Home