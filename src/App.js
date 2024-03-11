import {
  createBrowserRouter,
} from "react-router-dom";
import Home from './page/Home/Home';
import ErrorPage from "./common/Error/Error";
import Navbar from "./common/Navbar/Navbar";
import About from "./page/About/About";
import Service from "./page/Services/Service";
import SiteInfo from "./page/Site Info/SiteInfo";
import Portfolio from "./page/Portfolio/Portfolio";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Navbar/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/service",
        element: <Service/>,
      },
      {
        path: "/portfolio",
        element: <Portfolio/>,
      },
      {
        path: "/siteInfo",
        element: <SiteInfo/>,
      },
    ]
  },
  /*{
    path: "/home",
    element: <Navbar/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/about",
        //element: <About/>,
      },
      {
        path: "/portfolio",
        //element: <Portfolio/>,
      },
      {
        path: "/siteInfo",
        //element: <SiteInfo/>,
      },
    ]
  },*/
]);

export default router;