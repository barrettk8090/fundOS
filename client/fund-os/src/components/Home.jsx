// import {Heading,Theme} from '@radix-ui/themes';
import { Link } from "react-router-dom";

function Home({user, setUser}){
    return (
        <>

        <div className="mx-36 mt-12 mb-12">

            <h1 className="mb-32 flex justify-center text-3xl lg:text-7xl  text-center font-display">Welcome to the future <br></br> of crowdfunding <br/> (eventually).</h1>
            <p className="home-text mb-32 flex justify-center text-5xl text-center font-display"><span className="pr-4">Create projects with ease.</span> <span className="pr-4">Get funded by backers. </span>Receive immediate payouts.</p>
            <div className="flex justify-center font-display">
            <Link to="/create-account"><button className="px-8 py-6 create-button text-4xl">Get Started →</button></Link>

            </div>
        </div>

        <div className="flex mx-36">
            <div className="w-1/5 mx-12">
                <h2 className="text-2xl lg:text-6xl font-display">Launch.</h2>
                <img className="my-12 h-60" src="./src/assets/Processor.png"></img>   
            </div>
            <p className="home-text  w-3/5 mx-36 py-36 text-4xl font-display">With fundOS, you're in complete control of your project. Simply login and connect a wallet using Metamask. Your wallet will be funded automatically if your funding goal is hit by the deadline. Set your funding goal, initialize a funding deadline, and launch your project in seconds.</p>
        </div>

        <div className="flex mx-36">
            <div  className="w-1/5 mx-12">
                <h2 className="text-2xl lg:text-6xl font-display">Contribute.</h2>
                <img className="my-12 h-60" src="./src/assets/Coins.png"></img>
            </div>
            <p className="home-text w-3/5 mx-36 py-36 text-4xl font-display">Explore fundOS projects that you're interested in. Back a project using your Metamask wallet and help fund groundbreaking projects. If a project you contribute to doesn't hit their deadline in time, your funds are  returned to you, instantly.</p>
        </div>

        <div className="flex mx-36">
            <div className="w-1/5 mx-12">
                <h2 className="text-2xl lg:text-6xl font-display">Decentralized.</h2>
                <img className="my-12 h-60" src="./src/assets/Securities.png"></img>
            </div>
            <p className="home-text w-3/5 mx-36 py-36 text-4xl font-display">fundOS is built using Ethereum Smart Contracts to handle all transactions: from funding a project to getting a payout as a project creator. fundOS takes no cut from creators, especially since this is just a class project. It's not entirely decentralized, in order to meet final project requirements, but it is what it is! </p>
            
        </div>

        <div className="mx-36 h-96">
            <h2 className="my-12 flex justify-center text-3xl lg:text-7xl text-center font-display">Ready to get started?</h2>
            <div className="flex justify-center">
            <Link to="/create-account"><button className="mx-10 font-display">Create An Account</button></Link>
            <Link to="/login"><button className="mx-10 font-display">Log In</button></Link>
            </div>
        </div>
        </>
    );
}

export default Home