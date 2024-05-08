import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter, 
  RouterProvider, 
 } from "react-router-dom"; 
import Root from './component/Root';
import Home from './component/Home';
import ErrorPage from './component/ErrorPage';
import Login from './component/Login';
import Register from './component/Register';
import AllSpots from './component/AllSpots';
import AddSpot from './component/AddSpot';
import MyList from './component/MyList';
import AuthProvider from './providers/AuthProvider';

 const router = createBrowserRouter([ 
  { 
  path: "/", 
  element: <Root></Root>, 
  errorElement:<ErrorPage></ErrorPage>,
  children: [
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/allspots',
      element: <AllSpots></AllSpots>
    },
    {
      path:'/addspot',
      element:<AddSpot></AddSpot>
    },
    {
      path:'/mylist',
      element:<MyList></MyList>
    },
    {
      path:'/login',
      element:<Login></Login>,
    },
    {
      path:'/register',
      element:<Register></Register>,
    }
  ]
  }, 
 ]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
