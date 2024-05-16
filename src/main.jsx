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
      loader: async () => {
        try {
            // Fetch data from the first link
            const spotsResponse = await fetch("https://b9a10-tourist-haven-server.vercel.app/spots");
            const spotsData = await spotsResponse.json();

            // Fetch data from the second link
            const countriesResponse = await fetch("https://b9a10-tourist-haven-server.vercel.app/countries");
            const countriesData = await countriesResponse.json();

            // Combine the data into an object
            const combinedData = {
                spots: spotsData,
                countries: countriesData
            };

            return combinedData;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error; // Propagate the error
        }
    }
    },
    {
      path:'/allspots',
      element: <AllSpots></AllSpots>,
      loader: () => fetch('https://b9a10-tourist-haven-server.vercel.app/spots')
    },
    {
      path:'/addspot',
      element:<PrivateRoute><AddSpot></AddSpot></PrivateRoute>
    }, 
    {
      path:'/mylist',
      element:<PrivateRoute><MyList></MyList></PrivateRoute>,
      loader: () => fetch('https://b9a10-tourist-haven-server.vercel.app/spots')
    },
    {
      path: "/mylist/updatespot/:id", 
      element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
      loader: ({params})=>fetch(`https://b9a10-tourist-haven-server.vercel.app/spots/${params.id}`)
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
      loader: () => fetch('https://b9a10-tourist-haven-server.vercel.app/spots')
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
