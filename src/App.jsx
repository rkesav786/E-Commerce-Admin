import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import MobileSection from "./Pages/Catalogue/MobileSection";
import MobileSectionIndex from "./Pages/Catalogue/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Pages/Layout/Header";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="mobile-section" element={<MobileSectionIndex />} />
      <Route path="mobile-section/create" element={<MobileSection />} />
      <Route path="mobile-section/:id" element={<MobileSection />} />
    </Routes>
  </BrowserRouter>
);

export default App;