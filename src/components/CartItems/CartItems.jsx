import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext.jsx';
import remove_icon from '../Assets/cart_cross_icon.png';
//  The useContext hook helps you "connect" a component to a context
// Instead of passing data manually from parent to child, you can use a context to access shared data from anywhere in your app.

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext); // Fixed variable name

  return (
    <div className="cartitems">
      <h2 className="cart-heading">Your Shopping Cart</h2> 
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p> 
      </div>
      <hr />
      {all_products.map((e) => { 
        // Check if the product is in the cart
        // The map function is used to 
        // loop through an array and transform each element into something new. It creates a new array without changing the original one.
        if (cartItems[e.id] > 0) {
          return (
            <div className="cartitems-format" key={e.id}>
              <img src={e.image} alt={e.name} className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>₹{e.new_price.toFixed(2)}</p> 
              <button className="cartitems-quantity">{cartItems[e.id]}</button>
              <p>₹{(e.new_price * cartItems[e.id]).toFixed(2)}</p> 
              <img 
                src={remove_icon} 
                onClick={() => { removeFromCart(e.id); }} 
                alt="Remove" 
                className="cartitems-remove-icon" 
              />
            </div>
          );
        }
        return null; 
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal:</p>
              <p>₹{getTotalCartAmount().toFixed(2)}</p> 
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee:</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h2>Total:</h2>
              <h3>₹{getTotalCartAmount().toFixed(2)}</h3> 
            </div>
          </div>
        </div>
        <button className="checkout-button">PROCEED TO CHECKOUT</button> {/* Added class for styling */}
      </div>
    </div>
  );
};

export default CartItems;
