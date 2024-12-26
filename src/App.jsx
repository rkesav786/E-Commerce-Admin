import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Pages/Layout/Header";
import MobileSectionIndex from "./Pages/MobileSection";
import MobileSectionForm from "./Pages/MobileSection/Form";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="mobile-section" element={<MobileSectionIndex />} />
      <Route path="mobile-section/create" element={<MobileSectionForm />} />
      <Route path="mobile-section/:id" element={<MobileSectionForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;