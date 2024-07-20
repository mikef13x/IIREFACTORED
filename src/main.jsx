import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import App from './app'
import HomePage from './pages/homepage'
import GamePage from './pages/gamepage'
import LoginPage from './pages/loginpage'
import ProfilePage from './pages/profilepage'
import UploadPage from './pages/uploadpage'

const router = createBrowserRouter([

    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/game',
                element: <GamePage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/profile',
                element: <ProfilePage/>
            },
            {
                path: '/upload',
                element: <UploadPage/>
            },
        ]
    }




])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router}/>
)