import React, { useContext } from 'react';
import { storeContext } from './../../context/storeContext';
import './Cart.css';

function Cart() {
  const { cartItems, food_list, removeFromCart } = useContext(storeContext);
  console.log(cartItems, food_list);
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className='cart-item-title cart-items-title' key={item._id}>
                 <img src={item.image} alt=""/>
                 <p>{item.name}</p>
                 <p>{item.price}</p>
                 <p>{cartItems[item._id]}</p>
                 <p>{item.price*cartItems[item._id]}</p>
                 <p>x</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
