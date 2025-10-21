import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import { Children } from "react";
import Home from "../../Component/Pages/Home";
import CategoryNews from "../../Component/CategoryNews/CategoryNews";
import ErrorPage from "../../Component/ErrorElement/ErrorPage";
import Login from "../../Component/Pages/Login";
import Register from "../../Component/Pages/Register";
import Authlayout from "../Authlayout/Authlayout";
import NewsDetails from "../../Component/NewsDetails/NewsDetails";
import PrivateRoute from "../../Component/Provider/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        Component: Home
      },
      {
        path:"/category/:id",
        Component: CategoryNews,
       loader:()=> fetch("/news.json")
      },
     
    ]
  },
  {
    path:'/auth',
    Component: Authlayout,
    children:[
      {
        path:"/auth/login",
        Component: Login
      },
      {
        path:"/auth/register",
        Component: Register,
      },
    ]
  },
  {
    path:'/news-details/:id',
    element: <PrivateRoute>
      <NewsDetails></NewsDetails>
    </PrivateRoute>,
    loader: ()=>fetch("/news.json")
  },
  {
    path:'/*',
    Component: ErrorPage

  }
]);

export default router;