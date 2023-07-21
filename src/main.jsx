import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'
import * as ReactDOM from 'react-dom/client'
import './index.css'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ""
      }
    })
  }
})
const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)