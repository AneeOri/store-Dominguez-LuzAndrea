import React from "react";
import { useState, useEffect } from "react";
import { API_URL, RESOURCES, headers } from "./utils/constants";
import {getFetchData} from "./utils/api";

export default function App() {
  const url = `${API_URL}${RESOURCES.PRODUCTS}`;

  const [list, setList] = useState([]);

  useEffect(() => {
    getFetchData(url, { headers ,list,setList})
    .then(console.log("list",list))
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>JABSAHSDHVJA</h1>
      <h2>LAHCUSDUC</h2>
    </div>
  );
}


