import React from "react";
import "./item.css";

export default function Item (props) {

    const { img, category, name, cost} = props;

    return(
        <div className="item" >
            <img src={img.url} alt="Imagen ilustrativa del producto" />
            <div>
              <h3>{category}</h3>
              <h3>{name}</h3>
              <h3>{cost}</h3>
            </div>
         </div>
    );
}