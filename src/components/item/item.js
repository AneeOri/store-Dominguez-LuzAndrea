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
          <div className="figura">
              <div className="imagen">
                 <ItemInfo
                    productCost={cost}
                    userPoints={points}
                    isHover = {hover}
                 />

                 <img src={img.url} alt="Imagen ilustrativa del producto" />
                 <h3>{category}</h3>
                 <h3>{name}</h3>
             </div>
             <div className="capa">
              { hover && (
                <div >
                 <ItemHover
                   userData={userData}
                   setUserData={setUserData}
                   userPoints={points}
                   productCost={cost}
                   productId={_id}
                  />
              </div> 
              )}
            </div>
          </div>
        </div>
    );
}