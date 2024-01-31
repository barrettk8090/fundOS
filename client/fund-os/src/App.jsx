import { useState } from 'react'
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


function App() {

  return (
    
    
      <>
      <Nav/>
        <Home/>
        <CreateLogin/>
        <AllProjects/>
        <Dashboard/>
        <Account/>
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
        </Flex>
        <Button>Let's go</Button>
      </>
  
  )
}

export default App
