import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Pages/Layout/Header";
import MobileSectionIndex from "./Pages/MobileSection";
import MobileSectionForm from "./Pages/MobileSection/Form";
import FurnitureSectionIndex from "./Pages/FurnitureSection";
import FurnitureSection from "./Pages/FurnitureSection/Form";
import FashionSectionIndex from "./Pages/FashionSection";
import FashionSection from "./Pages/FashionSection/Form";
import GrocerySectionIndex from "./Pages/GrocerySection";
import GrocerySection from "./Pages/GrocerySection/Form";
import ApplianceSectionIndex from "./Pages/ApplianceSection";
import ApplianceSection from "./Pages/ApplianceSection/Form";
import ElectronicsSectionIndex from "./Pages/ElectronicsSection";
import ElectronicsSection from "./Pages/ElectronicsSection/Form";
import HomePageIndex from "./Pages/HomePage";
import HomePageForm from "./Pages/HomePage/Form";
import WelcomePage from "./Pages/Layout/Welcome";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      {/* home page */}
      <Route path="home-page" element={<HomePageIndex />} />
      <Route path="home-page/create" element={<HomePageForm />} />
      <Route path="home-page/:id" element={<HomePageForm />} />

      {/* mobile section */}
      <Route path="mobile-section" element={<MobileSectionIndex />} />
      <Route path="mobile-section/create" element={<MobileSectionForm />} />
      <Route path="mobile-section/:id" element={<MobileSectionForm />} />

      {/* furniture section */}
      <Route path="furniture-section" element={<FurnitureSectionIndex />} />
      <Route path="furniture-section/create" element={<FurnitureSection />} />
      <Route path="furniture-section/:id" element={<FurnitureSection />} />

      {/* fashion section */}
      <Route path="fashion-section" element={<FashionSectionIndex />} />
      <Route path="fashion-section/create" element={<FashionSection />} />
      <Route path="fashion-section/:id" element={<FashionSection />} />

      {/* grocery section */}
      <Route path="grocery-section" element={<GrocerySectionIndex />} />
      <Route path="grocery-section/create" element={<GrocerySection />} />
      <Route path="grocery-section/:id" element={<GrocerySection />} />

      {/* appliance section  */}
      <Route path="appliance-section" element={<ApplianceSectionIndex />} />
      <Route path="appliance-section/create" element={<ApplianceSection />} />
      <Route path="appliance-section/:id" element={<ApplianceSection />} />

      {/* electronics section  */}
      <Route path="electronics-section" element={<ElectronicsSectionIndex />} />
      <Route
        path="electronics-section/create"
        element={<ElectronicsSection />}
      />
      <Route path="electronics-section/:id" element={<ElectronicsSection />} />
    </Routes>
  </BrowserRouter>
);

export default App;