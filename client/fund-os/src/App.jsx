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


function App() {

  return (
    
    
      <>
        <Home/>
        <CreateLogin/>
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
        </Flex>
        <Button>Let's go</Button>
      </>
  
  )
}

export default App
