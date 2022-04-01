import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import theme from "../src/themes/main"
import MainTemplate from "./templates/MainTemplate"
import { AuthProvider } from "./context/AuthContext"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <AuthProvider>
        <MainTemplate>
          <App />
        </MainTemplate>
      </AuthProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
)
