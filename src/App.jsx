import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/HomeMain";
import Details from "./pages/details/DetailsMain";
import Favorites from "./pages/favorites/FavoritesMain";
import Navbar from "./components/navbar/NavbarMain";

function App() {
  return (
    <div>
      <div className="min-h-screen  bg-white text-grey-600 text-lg">
        <div className="">
          <Navbar />
        </div>
        <div className="py-20 px-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe-item/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
