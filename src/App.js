import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useState } from "react";
import { foodData } from "./Data";
import ErrorPage from "./Pages/ErrorPage";
import CuisinesList from "./Components/Cuisines/CuisinesList";
import MenuCard from "./Components/Menu/MenuCard"; 
import { cuisineData } from "./Data2";
import FoodDetails from "./Pages/FoodDetails ";

function App() {
// eslint-disable-next-line
  const [thefoods, useTheFoods] = useState(foodData);
  // eslint-disable-next-line
  const [cuisine, setCuisine] = useState(cuisineData);
  return (
    <div className="App" style={{ paddingTop: "4%" }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<MenuCard />} /> 
        <Route path="/cuisines/:id" element={<CuisinesList cuisine={cuisine} />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;