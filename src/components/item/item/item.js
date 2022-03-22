import React from "react";

export default function Item (props) {

    const { img, category, name, cost, _id } = props;

    return(
        <div height="100px" width="100px">
            <img src={img.url} alt="Imagen ilustrativa del producto" />
            <h3>{category}</h3>
            <h3>{name}</h3>
            <h3>{cost}</h3>
            <h3>{_id}</h3>
         </div>
    );
}