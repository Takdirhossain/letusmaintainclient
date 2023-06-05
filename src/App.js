import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Management from "./pages/Management";
import Priceing from "./pages/Priceing";
import ContactwithUs from "./pages/ContactwithUs";
import Registation from "./pages/Registation";
import TremsAndCondition from "./pages/TremsAndCondition";
import Privacyandpolicy from "./pages/Privacyandpolicy";
import PaymentPolicy from "./pages/PaymentPolicy";
import Shipping from "./pages/Shipping";
import CountryPackages from "./pages/Package";
import ClientReg from "./pages/ClientReg";
import Career from "./pages/Career";
import Error from "./components/Error";
import Enterprise from "./pages/Enterprise";
import Individul from "./pages/Individul";
import Blogs from "./pages/Blogs";
import SingleBlog from "./pages/SingleBlog";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { useSelector } from "react-redux";



const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/blog", element: <Blogs /> },
  { path: "/blog/01", element: <SingleBlog /> },
  { path: "/aboutus", element: <About /> },
  { path: "/management", element: <Management /> },
  { path: "/priceing", element: <Priceing /> },
  { path: "/contact", element: <ContactwithUs /> },
  { path: "/channelpartner", element: <Registation /> },
  { path: "/trames", element: <TremsAndCondition /> },
  { path: "/privacy", element: <Privacyandpolicy /> },
  { path: "/cancellation", element: <PaymentPolicy /> },
  { path: "/shipping", element: <Shipping /> },
  { path: "/career", element: <Career /> },
  { path: "*", element: <Error /> },
  { path: "/regindivudal", element: <CountryPackages /> },
  { path: "/regenterprise", element: <ClientReg /> },
  { path: "/Enterprise", element: <Enterprise /> },
  { path: "/Individul", element: <Individul /> },
  { path: "/login", element: <Login /> },
  {path:"/dashboard", element: <Dashboard/>}
]);
const App = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log(isLoggedIn);
  return <RouterProvider router={router} />;
};

export default App;
