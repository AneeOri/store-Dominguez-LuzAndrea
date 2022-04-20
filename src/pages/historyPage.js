import React, {useEffect, useState} from 'react';
import ItemHistory from '../components/itemHistory/itemHistory';
import { getHistory } from '../utils/api';
import { API_URL, RESOURCES, headers } from "../utils/constants";
import "./history.css";

export default function HistoryPage() {

  const url = `${API_URL}${RESOURCES.HISTORY}`;

  const[historyData, setHistoryData] = useState([]);

  useEffect(()=>{
    getHistory({ headers,setHistoryData},url);
  },[]);

  const historyDataR = historyData.reverse();

  return (
    <div className='histContainer'>
      <h1>Redeemed products</h1>
      <h2>History of your redeems</h2>
      <div className='products2'>
        {historyDataR.map((product)=>(
            <ItemHistory {...product} key={product.createDate}/>
        ))
        }
      </div>
    </div>
  )
}
