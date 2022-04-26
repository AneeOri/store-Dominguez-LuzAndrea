import React from 'react';
import {Route,Routes} from "react-router-dom";
import ProductsPage from "../pages/productsPage";
import PointsPage from "../pages/pointsPage";
import HistoryPage from "../pages/historyPage";

export default function AppRouter() {
  return (
    <Routes>
        <Route  path="/points" element = {<PointsPage/>}/>
        <Route  path="/history" element = {<HistoryPage/>}/>
        <Route  path="/*" element = {<ProductsPage/>}/>
    </Routes>
  )
}
