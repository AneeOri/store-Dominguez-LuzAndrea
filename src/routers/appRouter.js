import React from 'react';
import {Route,Routes} from "react-router-dom";
import ProductsPage from "../pages/productsPage";
import PointsPage from "../pages/pointsPage";
import HistoryPage from "../pages/historyPage";

export default function AppRouter() {
  return (
    <Routes>
        <Route exact path="/points" element = {<PointsPage/>}/>
        <Route exact path="/history" element = {<HistoryPage/>}/>
        <Route exact path="/" element = {<ProductsPage/>}/>
    </Routes>
  )
}
