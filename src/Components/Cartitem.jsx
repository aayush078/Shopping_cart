import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { FcDeleteDatabase } from "react-icons/fc";
import { remove } from '../redux/Slices/CartSlice';

const Cartitem = ({item,itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.success("Item have been removed from cart")
  }
  return (
    <div className='flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5'>
      <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>
        <div className='w-[40%] '>
          <img className ="object-cover" src={item.image}/>
        </div>

        <div className='md:ml-10 self-start gap-y-5 w-[100%] md:w-[60%] '>
          <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
          <h1 className='text-base text-slate-700 font-medium'>{item.description}</h1>
          <div className='flex justify-between items-center'>
            <p className='font-bold tetx-lg text-green-600 '>{item.price}</p>
            <div className='text-red-800 bg-red-200 group hover:bg-red-400 
            transition-transform duration-300'
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Cartitem