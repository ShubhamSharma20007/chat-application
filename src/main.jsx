import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import {createBrowserRouter,Router,RouterProvider} from "react-router-dom"
import Login from './pages/Login'
import Chat from './pages/Chat.jsx'
import Register from './pages/Register.jsx'


const router = createBrowserRouter([
  {
    path: "/login",
    element :<Login/>
  },
  {
    path: "/register",
    element :<Register/>
  },
  {
    path: "/",
    element :<Chat/>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
<>
<RouterProvider  router={router}/>
<Toaster />
</>
)
