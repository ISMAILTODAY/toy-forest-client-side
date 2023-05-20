import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Login from './Component/Login/Login.jsx';
import Ragistration from './Component/Ragistration/Ragistration.jsx';
import AuthProvider from './Component/ProviderContext/AuthProvider.jsx';
import AllToy from './Component/allToy/allToy.jsx';
import AddToy from './Component/AddToy/AddToy.jsx';
import MyToys from './Component/MyToys/MyToys.jsx';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute.jsx';
import ToyDetails from './Component/ToyDetails/ToyDetails.jsx';
import UpDate from './Component/UpDate/UpDate.jsx';
import PageNotFound from './Component/PageNotFound/PageNotFound.jsx';
import BlogPage from './Component/BlogPage/BlogPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Ragistration></Ragistration>
      },
      {
        path: 'alltoys',
        element: <AllToy></AllToy>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute> <ToyDetails></ToyDetails></PrivateRoute>
      },
      {
        path: '/addtoys',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: '/mytoys',
        element: <PrivateRoute> <MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <UpDate></UpDate>,

      },
      {
        path: '/blog',
        element: <BlogPage></BlogPage>
      }

    ]
  },
  {
    path: '/*',
    element: <PageNotFound></PageNotFound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>


  </React.StrictMode>
)
