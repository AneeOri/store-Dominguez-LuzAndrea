import React,{useState, useContext}from "react";
import "./item.css";
import {UserContext} from "../../context/userContext";
import ItemHover from "./itemHover";
import ItemInfo from "./itemInfo";


export default function Item (props) {

    const { img, category, name, cost, _id} = props;
    const [userData, setUserData] = useContext(UserContext);
    const points = userData.points;
    const [hover, setHover] = useState(false);

    return(
        <div className="item" 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >

        { hover && (
            <ItemHover
               userData={userData}
               setUserData={setUserData}
               userPoints={points}
               productCost={cost}
               productId={_id}
            />
        )}
          <ItemInfo
               productCost={cost}
               userPoints={points}
               isHover = {hover}
          />

            <img src={img.url} alt="Imagen ilustrativa del producto" />
            <div>
              <h3>{category}</h3>
              <h3>{name}</h3>
            </div>
         </div>
    );
}