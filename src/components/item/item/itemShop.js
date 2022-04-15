import React, {useState} from 'react';

export default function ItemShop (props) {

    const {redeemItem, userPoints, productCost, productId,redeem} = props;
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true);
    };
    const handleClose = () => {
        setClick(false);
    };

    return(
        <div>
             <button
                onClick={() => {
                   handleClick();
                   redeemItem(productId,productCost,userPoints);
                }}     
             >
                 Shop Now
             </button>
        </div>
       
        
    );
}
