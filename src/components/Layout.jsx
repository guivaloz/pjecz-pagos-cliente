import * as React from "react";
import { Outlet } from "react-router-dom";
import '../assets/css/Styles.css';
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Footer />
      <Outlet />
    </>
  );
};

export default Layout;
