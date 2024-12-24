import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeForm from "./Pages/Main/HomeForm";
import MainForm from "./Pages/MobileSection/MainForm";
import MobileSection from "./Pages/Catalogue/MobileSection";
import GrocerySection from "./Pages/Catalogue/GrocerySection";
import FurnitureSection from "./Pages/Catalogue/FurnitureSection";
import FashionSection from "./Pages/Catalogue/FashionSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Pages/Layout/Header";

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="home" element={<HomeForm />} />
        <Route path="main" element={<MainForm />} />
        <Route path="mobile-section" element={<MobileSection />} />
        <Route path="grocery-section" element={<GrocerySection />} />
        <Route path="furniture-section" element={<FurnitureSection />} />
        <Route path="fashion-section" element={<FashionSection />} />
        <Route />
      </Routes>
    </BrowserRouter>
  </>
); 

export default App;
