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
// import { Flex, Text, Button, Select} from '@radix-ui/themes';

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
        <Nav user={user} setUser={setUser}/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-account" element={<CreateAccount user={user} setUser={setUser}/>}/>
        <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
        <Route path="/projects" element={<AllProjects/>}/>
        <Route path="/dashboard" element={<Dashboard user={user}/>}/>
        <Route path="/account" element={<Account user={user}/>}/>
        //This is a TEMP route for the project detail page
        <Route path="/project/:id" element={<ProjectDetailPage user={user} component={ProjectDetailPage}/>}/>
        <Route path="/create-new-project" element={<NewProjectSubmission user={user}/>}/>
        <Route path="/lets-do-this/:projectId" element={<CreateProjectInterstitial user={user}/>}/>
        <Route path="/radix-tests" element={<RadixTests/>}/>

        </Routes>
        </BrowserRouter>
        {/* <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
        </Flex>
        <Button>Let's go</Button> */}
      </>
  
  )
}

export default App
