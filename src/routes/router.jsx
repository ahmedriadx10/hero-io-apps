import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/home/Homepage";
import App from "../pages/apps/App";
import Installation from "../pages/installation/Installation";
import Dashboard from "../pages/dashboard/Dashboard";
import AppDetails from "../pages/app-details/AppDetails";

export const router=createBrowserRouter([

  {path:'/',
    Component:RootLayout,
    children:[
      {index:true,Component:Homepage},
      {path:'apps',Component:App},
      {path:'installation',Component:Installation},
      {path:'dashboard',Component:Dashboard},
      {path:'apps/details/:id',Component:AppDetails}
    ]
  }

])