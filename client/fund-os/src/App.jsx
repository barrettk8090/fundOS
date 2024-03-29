import { useState, useEffect } from 'react'
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Router,
  Link
} from "react-router-dom";
import { ethers } from 'ethers'
import fundOSArtifact from './contracts/fundOS.json'

import Home from './components/Home'
import Nav from './components/Nav'
import AllProjects from './components/AllProjects';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import ProjectDetailPage from './components/ProjectDetailPage';
import NewProjectSubmission from './components/NewProjectSubmission';
import CreateProjectInterstitial from './components/CreateProjectInterstitial';
import RadixTests from './components/RadixTests';


function App() {

  const [user, setUser] = useState(null)
  const [singleProject, setSingleProject] = useState(null)
  const [ethAddress, setEthAddress] = useState('');
  

  useEffect(() => {
    const fetchData = async () => {
      const provider = new ethers.JsonRpcProvider('http://localhost:8545'); 
      const signer = provider.getSigner();
      const contractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
      const contract = new ethers.Contract(contractAddress, fundOSArtifact.abi, signer);

      try {
        const message = await contract.createProject; 
        console.log(message);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const connectWallet = async function connectWallet() {
      if (window.ethereum) {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          setEthAddress(address);
      } else {
          console.log('Please install MetaMask!');
      }
  }

  useEffect(() => {
    fetch('/api/session')
      .then(r => {
        if (r.ok) {
          return r.json();
        } else {
          return null;
        }
      })
      .then(data => {setUser(data)
      });
  }, []);

  const [userCreatedProjects, setUserCreatedProjects] = useState([])
  const [userContributedProjects, setUserContributedProjects] = useState([])

  useEffect(() => {
    if (user) {
      fetch(`/api/${user.id}/projects`)
        .then(r => r.json())
        .then(data => setUserCreatedProjects(data))
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetch(`/api/user_funded_project/${user.id}/`)
        .then(r => r.json())
        .then(data =>  setUserContributedProjects(data))
    }
  }, [user]);

  return (
    
    
      <>
      <BrowserRouter>
        <Nav user={user} setUser={setUser} ethAddress={ethAddress} setEthAddress={setEthAddress} connectWallet={connectWallet}/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-account" element={<CreateAccount user={user} setUser={setUser}/>}/>
        <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
        <Route path="/projects" element={<AllProjects/>}/>
        <Route path="/dashboard" element={<Dashboard user={user}/>}/>
        <Route path="/account" element={<Account user={user} ethAddress={ethAddress}/>}/>
        //This is a TEMP route for the project detail page
        <Route path="/project/:id" element={<ProjectDetailPage user={user} component={ProjectDetailPage}/>}/>
        <Route path="/create-new-project" element={<NewProjectSubmission user={user}/>}/>
        <Route path="/lets-do-this/:projectId" element={<CreateProjectInterstitial user={user}/>}/>
        <Route path="/radix-tests" element={<RadixTests/>}/>

        </Routes>
        </BrowserRouter>
      </>
  
  )
}

export default App
