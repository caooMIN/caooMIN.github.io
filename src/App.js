import React, { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import CuisinesList from "./Components/Cuisines/CuisinesList";
import MenuCard from "./Components/Menu/MenuCard";
import { cuisineData } from "./Data2";
import FoodDetails from "./Pages/FoodDetails ";
import { foodData } from "./Data";
import { ToastContainer } from "react-toastify";

function App() {
  const [thefoods] = useState(foodData);
  const [cuisine] = useState(cuisineData);

  return (
    <div className="App" style={{ paddingTop: "4%" }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home thefoods={thefoods} />} />
        <Route path="/menu/:id" element={<MenuCard />} />
        <Route
          path="/cuisines/:id"
          element={<CuisinesList cuisine={cuisine} />}
        />
        <Route path="/food/:id" element={<FoodDetails thefoods={thefoods} />} /> 
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
