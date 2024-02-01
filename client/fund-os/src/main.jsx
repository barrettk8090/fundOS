import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <Theme 
            appearance = "dark"
            accentColor="plum"
            grayColor="mauve"
            panelBackground="solid"
            scaling="100%"
            radius="full">
        <App />
      </Theme>
    
  </React.StrictMode>,
)
