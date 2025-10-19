import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import { Children } from "react";
import Home from "../../Component/Pages/Home";
import CategoryNews from "../../Component/CategoryNews/CategoryNews";


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
    element: <h1>Authentication</h1>
  },
  {
    path:'news',
    element: <h1>news</h1>
  },
  {
    path:'/*',
    element:<h1>error 404</h1>

  }
]);

export default router;