import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cartitem from '../Components/Cartitem';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount ,setTotalAmount ] = useState(0);

  useEffect(() =>{
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0));
  },[cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => (
              <Cartitem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

            <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
              <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
              <div className="flex flex-col gap-5 ">
              <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
                <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                </p>
              </div>
              </div>

              <div className="flex flex-col">
                <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}</p>
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">CheckOut Now</button>
              </div>
            </div>

            <div>
            
            <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}</p>            </div>
            <button>
              Checkout now
            </button>
          </div>
      ) : (
        <div>
          <h1>Your cart is empty</h1>

          <NavLink to={"/"}>
            <button>
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;