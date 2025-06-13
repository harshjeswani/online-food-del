import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
function ExploreMenu({ category, setCategory }) {
  return (
    <div className='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>choose form a divers menu featrue on our page which is being popular since many year and it is very much appreciated by the peoples</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory((prev) => (prev === "ALL" ? item.menu_name : "ALL"))} key={index} className='explore-menu-list-item'>
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
