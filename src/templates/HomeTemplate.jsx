import React from "react";
import { Outlet } from "react-router-dom";
import HeaderPage from "../Components/headerPage";
import BackToTop from "../Components/backToTop";

const HomeTemplate = () => {
  return (
    <div>
      <HeaderPage></HeaderPage>
      <BackToTop></BackToTop>
      <Outlet></Outlet>
    </div>
  );
};

export default HomeTemplate;
