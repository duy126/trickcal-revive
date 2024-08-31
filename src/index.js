import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import HomePage from "./page/homePage";
import TongDoPage from "./page/tongDoPage";
import TongDoChiTietPage from "./page/tongDoChiTietPage";
import { Provider } from "react-redux";
import { store } from "./redux";
import ScrollToTop from "./Components/scrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<HomeTemplate></HomeTemplate>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="tong-do" element={<TongDoPage></TongDoPage>}></Route>
          <Route
            path="chiTiet-page/:idChiTiet"
            element={<TongDoChiTietPage></TongDoChiTietPage>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
