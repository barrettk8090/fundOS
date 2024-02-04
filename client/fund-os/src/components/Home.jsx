// import {Heading,Theme} from '@radix-ui/themes';
import { Link } from "react-router-dom";

function Home({user, setUser}){
    return (
        <>
        <div className="mx-36 h-96 ">
            <h1 className="my-12 flex justify-center text-3xl lg:text-7xl text-center font-bold">Welcome to the future <br></br> of crowdfunding.</h1>
            <p className="mb-12 flex justify-center text-2xl text-center">Easy project creation. Get funded by backers. Immediate and decentralized payouts.</p>
            <div className="flex justify-center">
                <button>Get Started</button>
            </div>
        </div>

        <div className="flex mx-36 ">
            <div className="w-1/5 mx-12">
                <h2 className="text-2xl lg:text-6xl font-bold">Launch.</h2>
                <img className="my-12 h-60" src="./src/assets/Processor.png"></img>   
            </div>
            <p className="w-3/5 mx-36 py-36 text-2xl">With fundOS, you're in complete control of your project. Simply login and connect a wallet using Metamask. Your wallet will be funded automatically if your funding goal is hit by the deadline. Set your funding goal, initialize a funding deadline, and launch your project in seconds.</p>
        </div>

        <div className="flex mx-36">
            <div  className="w-1/5 mx-12">
                <h2 className="text-2xl lg:text-6xl font-bold">Contribute.</h2>
                <img className="my-12 h-60" src="./src/assets/Coins.png"></img>
            </div>
            <p className="w-3/5 mx-36 py-36 text-2xl">Explore fundOS projects that you're interested in. Back a project using your Metamask wallet and help fund groundbreaking projects. If a project you contribute to doesn't hit their deadline in time, your funds are  returned to you, instantly.</p>
        </div>

        <div className="flex mx-36">
            <div className="w-1/5 mx-12">
                <h2 className="text-2xl lg:text-6xl font-bold">Decentralized.</h2>
                <img className="my-12 h-60" src="./src/assets/Securities.png"></img>
            </div>
            <p className="w-3/5 mx-36 py-36 text-2xl">fundOS is built using Ethereum Smart Contracts to handle all transactions: from funding a project to getting a payout as a project creator. fundOS takes no cut from creators, especially since this is just a class project. It's not entirely decentralized, in order to meet final project requirements, but it is what it is! </p>
            
        </div>

        <div className="mx-36 h-96">
            <h2 className="my-12 flex justify-center text-3xl lg:text-7xl text-center font-bold">Ready to get started?</h2>
            <div className="flex justify-center">
            <Link to="/create_account"><button className="mx-10">Create An Account</button></Link>
            <Link to="/login"><button className="mx-10">Log In</button></Link>
            </div>
        </div>
        </>
    );
}

export default Home