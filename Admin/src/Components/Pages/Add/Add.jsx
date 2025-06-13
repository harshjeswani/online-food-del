import React, { useEffect } from 'react'
import './Add.css'
import {assets} from '../../../assets/assets'
import { useState } from 'react';
function Add() {
  const [image,setImage]=useState(false);
  const [data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"salad"
  })
   const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
   }
   useEffect(()=>{
    console.log(data)
   },[data])
  return (
    <div className="add">
    <form className='flex-col'>
      <div className="add-img-upload">
        <p>Upload Image</p>
        <label htmlFor='image'>
          <img src={image?URL.createObjectURL(image):assets.upload_area} alt=""/>
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])}type="file" id="image" hidden required/>

      </div>
      <div className="add-product-name">
        <p>Product Name </p>
        <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Type here"/>

      </div>
      <div className="add-product-description">
        <p>Product Description</p>
        <textarea onChange={onChangeHandler} value={data.description} name="description" rows='6' placeholder='write content here'/>
      </div>
      <div className="add-category-price">
        <div className="add-category">
          <p>ADD Category</p>
          <select onChange={onChangeHandler}  name="category">
            <option value="salad">Salad</option>
            <option value="salad">Deserts</option>
            <option value="salad">Sandwich</option>
            <option value="salad">Cake</option>
            <option value="salad">Pure veg</option>
            <option value="salad">pasta</option>
            <option value="salad">Noodels</option>
            <option value="salad">Maggie</option>
            </select>
        </div>
        <div className="add-price">
          <p>Product price </p>
          <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder="$20"/>
        </div>
      </div>
      <button type='submit' className='add-btn'>Add Product </button>
      </form>
    </div>
  )
}

export default Add
