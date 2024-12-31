import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import TopHeader from "./Header/TopHeader";
function Layout() {
  return (
    <>
      <TopHeader/>
      <Header/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
