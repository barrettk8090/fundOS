// import {Heading,Theme} from '@radix-ui/themes';
import { Link } from "react-router-dom";

function Home({user, setUser}){
    return (
        <>
        <div className="h-96 border-2 border-green-500">
            <h1 className="text-3xl font-bold">Welcome to the future of crowdfunding.</h1>
            <p>Easy project creation. Get funded by backers. Immediate and decentralized payouts.</p>
        </div>

        <div className="border-2 border-red-500">
            <h2 className="text-2xl font-bold">Launch.</h2>
            <p>With fundOS, you're in complete control of your project. Simply login and connect a wallet using Metamask. Your wallet will be funded automatically if your funding goal is hit by the deadline. Set your funding goal, initialize a funding deadline, and launch your project in seconds.</p>
            <div>
                <img className="w-60" src="./src/assets/Processor.png"></img>   
            </div>
        </div>

        <div className="border-2 border-blue-500">
            <h2 className="text-2xl font-bold">Contribute.</h2>
            <p>Explore fundOS projects that you're interested in. Back a project using your Metamask wallet and help fund groundbreaking projects. If a project you contribute to doesn't hit their deadline in time, your funds are  returned to you, instantly.</p>
            <div>
                <img className="w-60" src="./src/assets/Wallet.png"></img>
            </div>
        </div>

        <div className="border-2 border-blue-500">
            <h2 className="text-2xl font-bold">Decentralized.</h2>
            <p>fundOS is built using Ethereum Smart Contracts to handle all transactions: from funding a project to getting a payout as a project creator. fundOS takes no cut from creators, especially since this is just a class project. It's not entirely decentralized, in order to meet final project requirements, but it is what it is! </p>
            <div>
                <img className="w-60" src="./src/assets/Securities.png"></img>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold">Ready to get started?</h2>
            <Link to="/create_account"><h2>Create An Account</h2></Link>
            <Link to="/login"><h2>Log In</h2></Link>
        </div>
        </>
    );
}

export default Home