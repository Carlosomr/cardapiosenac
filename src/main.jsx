import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from "./styles/global"

import theme from './styles/theme'


import { App } from './Routes/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
     <GlobalStyles/>
     <BrowserRouter/>
     <App />
  
    </ThemeProvider>
    

  </React.StrictMode>,
)