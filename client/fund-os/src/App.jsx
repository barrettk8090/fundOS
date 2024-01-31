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
import { Flex, Text, Button, Select} from '@radix-ui/themes';

import Home from './components/Home'
import CreateLogin from './components/CreateLogin'
import Nav from './components/Nav'
import AllProjects from './components/AllProjects';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';


function App() {

  const [user, setUser] = useState(null)

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

  function handleLogout() {
    fetch('/api/logout', {
      method: "DELETE"
    })
      .then(r => setUser(null));
  }

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
        <Nav/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create_account" element={<CreateAccount/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/projects" element={<AllProjects/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/account" element={<Account/>}/>

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
