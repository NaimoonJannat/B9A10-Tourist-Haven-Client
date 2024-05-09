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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SpotDetails from './component/SpotDetails';
import PrivateRoute from './PrivateRoute';
import UpdateSpot from './component/UpdateSpot';


 const router = createBrowserRouter([ 
  { 
  path: "/", 
  element: <Root></Root>, 
  errorElement:<ErrorPage></ErrorPage>,
  children: [
    {
      path:'/',
      element:<Home></Home>,
      loader: () => fetch('http://localhost:3000/spots')
    },
    {
      path:'/allspots',
      element: <AllSpots></AllSpots>,
      loader: () => fetch('http://localhost:3000/spots')
    },
    {
      path:'/addspot',
      element:<PrivateRoute><AddSpot></AddSpot></PrivateRoute>
    }, 
    {
      path:'/mylist',
      element:<PrivateRoute><MyList></MyList></PrivateRoute>,
      loader: () => fetch('http://localhost:3000/spots')
    },
    {
      path: "/mylist/updatespot/:id", 
      element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
      loader: ({params})=>fetch(`http://localhost:3000/spots/${params.id}`)
    },
    {
      path:'/login',
      element:<Login></Login>,
    },
    {
      path:'/register',
      element:<Register></Register>,
    },
    {
      path: "/spot/:id",
      element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
      loader: () => fetch('http://localhost:3000/spots')
    }
  ]
  }, 
 ]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
      </AuthProvider>
  </React.StrictMode>,
)
