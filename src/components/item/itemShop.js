import React, {useState} from 'react';
import Modal from './itemModal';

export default function ItemShop (props) {

    const {redeemItem, userPoints, productCost, productId,redeem} = props;
    const [click, setClick] = useState(false);

    return(
        <div>
             <button 
                onClick={() => {
                    setClick(true);
                   redeemItem(productId,productCost,userPoints);
                }}     
             >
                 Shop Now
             </button>
             {click && (
                  <Modal
                  title={<p>{redeem ? "Congratulations" : "ops! something went wrong"}</p>}
                  content={<h3>{redeem ? "keep shoping" : "try again"}</h3>}
                  close={setClick}
                />
             )}
        </div>
       
        
    );
}
