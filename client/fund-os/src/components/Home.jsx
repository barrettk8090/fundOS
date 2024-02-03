// import {Heading,Theme} from '@radix-ui/themes';
import { Link } from "react-router-dom";

function Home({user, setUser}){
    return (
        <>
        <div>
            <h1 className="text-3xl font-bold">The future of crowdfunding.</h1>
        </div>

        <div>
            <img height="300" src="./src/assets/Wallet.png"></img>
        </div>

        <div>
            <Link to="/create_account"><h2>Create An Account</h2></Link>
            <Link to="/login"><h2>Log In</h2></Link>
        </div>
        </>
    );
}

export default Home